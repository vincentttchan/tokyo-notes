(function initWalletSyncTransport(globalRef) {
  function createJsonpVerifier({ documentRef, timeoutMs = 12000 } = {}) {
    return function verifyStatus(endpoint, token, jobId) {
      return new Promise(resolve => {
        if (!documentRef?.head) {
          resolve(false);
          return;
        }

        const callback = '__tokyoSync' + Math.random().toString(36).slice(2);
        const script = documentRef.createElement('script');
        let settled = false;
        let timer;
        const finish = value => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          delete globalRef[callback];
          script.remove();
          resolve(Boolean(value));
        };

        globalRef[callback] = data => finish(data?.ok && data?.received);
        script.onerror = () => finish(false);
        script.src = endpoint
          + '?action=status'
          + '&jobId=' + encodeURIComponent(jobId)
          + '&token=' + encodeURIComponent(token)
          + '&callback=' + encodeURIComponent(callback)
          + '&_=' + Date.now();
        timer = setTimeout(() => finish(false), timeoutMs);
        documentRef.head.appendChild(script);
      });
    };
  }

  function createTransport(options = {}) {
    const navigatorRef = options.navigatorRef || globalRef.navigator || {};
    const fetchRef = options.fetchRef || globalRef.fetch?.bind(globalRef);
    const wait = options.wait || (delay => new Promise(resolve => setTimeout(resolve, delay)));
    const verifyStatus = options.verifyStatus || createJsonpVerifier({
      documentRef: options.documentRef || globalRef.document
    });
    const retryDelays = options.retryDelays || [500, 1000, 1800, 3000, 5000];

    function dispatchJob(job, config) {
      const payload = JSON.stringify({ ...job, token: config.token });
      if (typeof navigatorRef.sendBeacon === 'function') {
        try {
          const body = new Blob([payload], { type: 'text/plain;charset=UTF-8' });
          if (navigatorRef.sendBeacon(config.endpoint, body)) return;
        } catch {}
      }

      if (typeof fetchRef === 'function') {
        try {
          Promise.resolve(fetchRef(config.endpoint, {
            method: 'POST',
            mode: 'no-cors',
            keepalive: true,
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: payload
          })).catch(() => {});
        } catch {}
      }
    }

    async function transmitJob(job, config) {
      dispatchJob(job, config);
      for (const delay of retryDelays) {
        await wait(delay);
        if (await verifyStatus(config.endpoint, config.token, job.jobId)) return true;
      }
      return false;
    }

    return { dispatchJob, transmitJob };
  }

  const api = { createTransport, createJsonpVerifier };
  globalRef.TokyoWalletSyncTransport = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
