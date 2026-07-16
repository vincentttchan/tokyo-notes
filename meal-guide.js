(() => {
  const guides = {
    16: [['宵夜', 'らーめん 鴨to葱', '後備：一蘭 上野｜抵達較早才選鴨拉麵；延誤則直接到24小時一蘭。', '¥1,000–2,000', '免預約', 'Ramen Kamo to Negi Ueno Tokyo']],
    17: [
      ['早餐', 'Suke6 Diner', '後備：LANDABOUT Table｜前者配合淺草／藏前動線，趕時間便留在酒店。', '¥1,500–2,500', '免預約', 'Suke6 Diner Asakusa Tokyo'],
      ['午餐', '結わえる 本店', '後備：淺草むぎとろ｜糙米定食較輕盈，位置接近藏前；避免只喝咖啡。', '¥1,200–2,500', '免預約', 'YUWAERU Kuramae Tokyo'],
      ['晚餐', 'とんかつ山家 御徒町', '後備：鴨to葱／肉の大山｜A PIT後回上野，選近車站且不用跨區的店。', '¥1,000–2,000', '免預約', 'Tonkatsu Yamabe Okachimachi Tokyo']
    ],
    18: [
      ['早餐', 'LANDABOUT Table', '後備：CIBI Tokyo｜退房日前以不搬行李、準時寄存為優先。', '¥1,200–2,500', '免預約', 'LANDABOUT Table Tokyo'],
      ['午餐', 'BERG 新宿', '後備：牛かつ もと村｜BERG適合ReBIRD前快速用餐；牛かつ排隊超過20分鐘便放棄。', '¥1,000–2,500', '免預約', 'BERG Shinjuku Tokyo'],
      ['晚餐', '日本橋 玉ゐ 本店', '後備：お好み焼 ゆかり COREDO室町｜第一晚會合以酒店附近、日式料理為主。', '¥2,000–6,000', '玉ゐ建議預約', 'Nihonbashi Tamai Tokyo']
    ],
    19: [
      ['早餐', '酒店早餐', '後備：Blue Bottle Coffee 日本橋｜Koffee Mameya不是正餐，出發前先吃早餐。', '¥1,500–3,000', '住宿確認', 'Mitsui Garden Hotel Nihonbashi Premier breakfast'],
      ['午餐', 'とんかつ まい泉 青山本店', '後備：neel Jingumae輕食｜位於表參道路線，吃完直接開始南青山男裝店。', '¥2,000–3,500', '週日一般席不設預約', 'Tonkatsu Maisen Aoyama Tokyo'],
      ['晚餐', 'tar Shibuya', '你指定的固定餐廳｜圓山町 pizza、tapas、自然酒；從MIYASHITA PARK步行前往。', '¥4,000–7,000', '必須提前訂座', 'tar Shibuya Maruyamacho Tokyo']
    ],
    20: [
      ['早餐', '日本橋酒店早餐', '後備：東京站駅弁｜09:20退房前吃飽；不要把早餐押到輕井澤。', '¥1,500–3,500', '住宿確認', 'Mitsui Garden Hotel Nihonbashi Premier breakfast'],
      ['午餐', 'SAWAMURA 輕井澤外帶', '後備：車站NewDays駅弁｜只有約40分鐘寄行李及用餐，必須外帶，不排正式餐廳。', '¥800–1,800', '免預約', 'Bakery Restaurant Sawamura Karuizawa'],
      ['晚餐', 'José Luis Karuizawa', '後備：川上庵 輕井澤｜酒店內西班牙×信州料理最省交通；正式晚餐需預約。', '¥4,000–9,000', '主選建議預約', 'Jose Luis Karuizawa']
    ],
    21: [
      ['早餐', 'José Luis／TWIN-LINE早餐', '後備：SAWAMURA麵包外帶｜07:30開始，08:05前離開酒店趕08:30巴士。', '¥1,000–3,500', '住宿確認', 'Jose Luis Karuizawa breakfast'],
      ['午餐', 'SAWAMURA Harunire 外帶', '後備：輕井澤站峠の釜めし｜11:00只買麵包，不坐下等餐；不可錯過11:25巴士。', '¥800–1,500', '免預約', 'Bakery Restaurant Sawamura Harunire Terrace'],
      ['晚餐', '銀座 篝 本店', '後備：根室花まる銀座｜入住後留在銀座；想快吃選雞白湯，想壽司則預留排隊。', '¥1,500–4,000', '免預約', 'Ginza Kagari Honten Tokyo']
    ],
    22: [
      ['早餐', 'pain･maison 銀座店', '後備：築地丸豊飯糰｜你指定的塩麵包為主；排隊過長才轉築地飯糰。', '¥500–1,200', '不設預約', 'pain maison Ginza Tokyo'],
      ['午餐', '根室花まる 銀座', '後備：壽司美登利銀座｜Itoya後就近吃壽司，兩者皆以即場輪候為主。', '¥2,000–4,500', '預留排隊', 'Nemuro Hanamaru Ginza Tokyo'],
      ['晚餐', '銀座 篝 本店', '後備：銀座スイス｜由品川回銀座後簡單吃；主選雞白湯，後備元祖咖喱。', '¥1,500–3,000', '免預約', 'Ginza Kagari Honten Tokyo']
    ],
    23: [
      ['早餐', '銀座酒店早餐', '後備：pain･maison外帶｜豪德寺09:30開始，早餐必須在銀座先完成。', '¥800–3,000', '住宿確認', 'Mitsui Garden Hotel Ginza Gochome breakfast'],
      ['午餐', 'IVY PLACE 代官山', '後備：Hacienda del cielo｜兩者均接近眼鏡店；12:00入座、12:50前離開。', '¥2,000–3,500', '主選建議預約', 'IVY PLACE Daikanyama Tokyo'],
      ['晚餐', '豚組食堂 六本木', '後備：RIGOLETTO BAR AND GRILL｜森美術館後留在Hills，不返回銀座再找餐廳。', '¥2,000–5,000', '後備可預約', 'Butagumi Shokudo Roppongi Hills']
    ],
    24: [
      ['早餐', '銀座酒店早餐', '後備：andoh coffee＋麵包｜出發往吉祥寺前先墊胃，咖啡不能代替早餐。', '¥800–3,000', '住宿確認', 'Mitsui Garden Hotel Ginza Gochome breakfast'],
      ['午餐', '中華そば 青葉 中野本店', '後備：中野Sun Mall定食｜Sublo後乘中央線到中野，先快速吃拉麵再進Fujiya Camera。', '¥1,000–1,800', '免預約', 'Chuka Soba Aoba Nakano Tokyo'],
      ['晚餐', 'Ebisu Yoroniku', '你已確認的固定預約｜7/24 19:15、5人；完整預約號碼不在公開頁顯示。', '已訂套餐', '已確認預約', 'Ebisu Yoroniku Tokyo']
    ],
    25: [
      ['早餐', '銀座酒店早餐', '後備：GLITCH＋外帶麵包｜退房日前以整理行李和補買咖啡豆為主。', '¥1,000–3,000', '住宿確認', 'Mitsui Garden Hotel Ginza Gochome breakfast'],
      ['午餐', 'Pizza 4P’s Tokyo', '你指定的固定餐廳｜麻布台Hills Garden Plaza D；與teamLab同區。', '¥2,500–5,000', '必須提前訂座', 'Pizza 4Ps Tokyo Azabudai Hills'],
      ['晚餐', 'つるとんたん 羽田空港店', '後備：羽田江戶小路餐廳｜取行李後直接到第3航廈吃，不再留在銀座冒交通風險。', '¥1,500–3,000', '免預約', 'Tsurutontan Haneda Airport Terminal 3']
    ]
  };

  document.querySelectorAll('[data-route-day]').forEach((card) => {
    const meals = guides[Number(card.dataset.routeDay)];
    if (!meals || card.querySelector('.meal-guide')) return;

    const section = document.createElement('section');
    section.className = 'meal-guide';
    section.setAttribute('aria-label', '當日餐飲建議');
    section.innerHTML = `<header><h3>當日餐飲</h3><span>主選 · 後備 · 預算 · 預約</span></header><div class="meal-guide-grid">${meals.map((meal) => `<article><time>${meal[0]}</time><h4>${meal[1]}</h4><p>${meal[2]}</p><div class="meal-meta"><span>${meal[3]}</span><span>${meal[4]}</span><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meal[5])}">地圖</a></div></article>`).join('')}</div>`;

    const anchor = card.querySelector('.trip-advisory') || card.querySelector('.route-timeline');
    anchor.before(section);
  });
})();
