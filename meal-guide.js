(() => {
  const dayPlans = {
    19: {
      area: '渋谷・表參道',
      title: '表參道與渋谷：預約咖啡、男裝與城市散步',
      intro: '早餐留在酒店，上午由表參道慢慢走向渋谷；13:00 準時抵達 KOFFEE MAMEYA。',
      advisory: 'KOFFEE MAMEYA 已定於 13:00，建議 12:45 抵達；午餐安排在預約前，避免咖啡體驗後才空腹找餐廳。Coffee Wrights／neel 只作彈性後備，晚餐留在渋谷。',
      weather: '青山至渋谷帶折傘；雷雨時以地鐵取代長距離步行。',
      footer: '今日策略：酒店早餐 → 表參道 → 13:00 KOFFEE MAMEYA → 渋谷',
      stops: [
        ['08:30', 'Breakfast', '酒店早餐', '先吃完整早餐，預留足夠時間整理後才前往表參道。', 'Mitsui Garden Hotel Nihonbashi Premier breakfast', 35.6882, 139.7735, 'hotel'],
        ['10:15', 'Shopping', '南青山・表參道男裝與設計店', '沿骨董通與表參道一帶選逛 Auralee、Graphpaper 等簡約男裝，不跨區。', 'Omotesando Tokyo', 35.6651, 139.7124, 'spot'],
        ['11:30', 'Lunch', 'とんかつ まい泉 青山本店', '在預約咖啡前完成午餐；若排隊超過 20 分鐘，改選附近輕食。', 'Tonkatsu Maisen Aoyama Tokyo', 35.6683, 139.7118, 'meal'],
        ['13:00', 'Reserved Coffee', 'KOFFEE MAMEYA', '已確認的預約時間；12:45 抵達，預留約 45–60 分鐘選豆與品飲。', 'KOFFEE MAMEYA Omotesando Tokyo', 35.6621, 139.6996, 'reserved', '預約資料', 'https://www.tablecheck.com/en/shops/koffee-mameya/reserve'],
        ['14:30', 'Coffee / Buffer', 'Coffee Wrights／neel（二選一）', '視體力與天氣選一間；若 KOFFEE MAMEYA 延誤便直接略過。', 'Coffee Wrights Omotesando Tokyo', 35.6643, 139.7040, 'coffee'],
        ['16:00', 'Shopping', 'MIYASHITA PARK・渋谷 PARCO', '集中完成服裝、設計雜貨與城市限定商品；兩處步行可接。', 'MIYASHITA PARK Shibuya Tokyo', 35.6620, 139.7019, 'spot'],
        ['18:30', 'Dinner', 'tar Shibuya', '你指定的圓山町餐廳；由渋谷中心步行前往，建議保留訂座。', 'tar Shibuya Maruyamacho Tokyo', 35.6577, 139.6950, 'reserved', '餐廳資料', 'https://www.google.com/maps/search/?api=1&query=tar%20Shibuya%20Maruyamacho%20Tokyo'],
        ['20:45', 'Return', '返回日本橋酒店', '由渋谷站直接乘地鐵回酒店，不再加插其他區域。', 'Mitsui Garden Hotel Nihonbashi Premier', 35.6882, 139.7735, 'hotel']
      ]
    },
    20: {
      area: '東京站・白絲瀑布・舊輕井澤',
      title: 'Asama 609、白絲瀑布與舊輕井澤（全程公共交通）',
      intro: '11:04 由東京出發，抵達後先寄存行李，再以草輕巴士完成白絲瀑布與舊輕井澤；不租車、不趕 12:40 班次。',
      advisory: '固定車次：Asama 609 東京 11:04 → 輕井澤 12:15。主方案搭 13:20 草輕巴士（北口 2 號站）→ 13:45 白絲瀑布；14:46 回程 → 15:05 舊輕井澤。若錯過主方案，改搭 13:40 → 14:05，並搭 15:03 → 15:22。巴士可能滿座或受塞車影響，落車時先確認回程站牌。',
      weather: '帶輕便雨具及防滑鞋；雷雨、巴士滿座或道路受阻時，直接取消白絲瀑布，改乘巴士到舊輕井澤，避免在山區等車。',
      footer: '固定交通：Asama 609 11:04–12:15｜草輕巴士 13:20／14:46',
      backup: {
        decision: '12:45 前決定：若持續下雨、看到雷達有雷雨帶，或 13:20 巴士候車人龍過長，便不要前往白絲瀑布。',
        options: [
          {
            label: 'A｜一般雨天',
            summary: '保留藝術與舊輕井澤氣氛，主要轉場以步行或短程的士完成。',
            steps: [
              ['13:00', '輕井澤 New Art Museum', '10:00–17:00；7/20 為祝日星期一，按官方規則照常開館。'],
              ['14:40', 'Church Street／舊輕井澤有上蓋店舖', '集中咖啡、果醬、手信與室內店，不前往雲場池。'],
              ['16:30', '返回 TWIN-LINE 入住', '換乾衣、休息；19:00 照常在 José Luis 晚餐。']
            ]
          },
          {
            label: 'B｜雷雨／大雨',
            summary: '不搭山區巴士、不走瀑布步道，活動範圍鎖定車站與酒店。',
            steps: [
              ['13:00', 'Prince Shopping Plaza', '由車站南口進入，以有上蓋通道、指定店和咖啡店為主。'],
              ['15:30', 'Outlet 室內咖啡／早段採買', '把 7/21 的 Outlet 購物移到今天，翌日便可更從容。'],
              ['17:00', 'TWIN-LINE', '提早入住；如雷暴持續，晚餐完全留在酒店。']
            ]
          }
        ]
      },
      stops: [
        ['08:30', 'Breakfast', '日本橋酒店早餐・退房', '先吃完整早餐；09:45 前退房，確認新幹線票、雨具與日圓現金。', 'Mitsui Garden Hotel Nihonbashi Premier', 35.6882, 139.7735, 'hotel'],
        ['10:00', 'Transit', '日本橋酒店 → 東京站', '有行李建議短程的士至日本橋口；10:30 前到站，留時間找月台與買午餐。', 'Tokyo Station Nihonbashi Exit', 35.6825, 139.7707, 'transit'],
        ['11:04', 'Reserved Train', 'Asama 609｜東京 → 輕井澤', '固定班次 11:04–12:15；午餐在車上吃駅弁，避免抵達後再排餐廳。', 'Tokyo Station', 35.6812, 139.7671, 'reserved', 'JR 東日本', 'https://www.jreast.co.jp/multi/en/'],
        ['12:15', 'Arrival', '抵達輕井澤・TWIN-LINE 寄存行李', '由北口步行至酒店，先寄存行李；13:05 前返回北口 2 號巴士站排隊。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['13:20', 'Bus', '草輕巴士 → 白絲瀑布', '北口 2 號站上車，13:45 抵達；單程 ¥720。今天是繁忙日，提早排隊，滿員時立即切換後備方案。', 'Karuizawa Station North Exit Bus Stop 2', 36.3424, 138.6350, 'transit', '官方時間表', 'https://www.kkkg.co.jp/bus/timetable/kusakaru_sen_sim.pdf?v=202604'],
        ['13:45', 'Nature', '白絲瀑布', '由站牌沿步道往返，停留約 50–55 分鐘；14:35 前回到站牌等車，不往山區延伸。', 'Shiraito Waterfall Karuizawa Nagano', 36.4106, 138.5921, 'spot'],
        ['14:46', 'Bus', '白絲瀑布 → 舊輕井澤', '搭 14:46 班次，15:05 於舊輕井澤下車。錯過便搭 15:03 → 15:22；不要等到更後班次才決定。', 'Kyu Karuizawa Ginza Street', 36.3580, 138.6342, 'transit', '官方時間表', 'https://www.kkkg.co.jp/bus/timetable/kusakaru_sen_sim.pdf?v=202604'],
        ['15:10', 'Walk & Shopping', '舊輕井澤銀座・聖保羅教堂', '先走主街及教堂；約 90 分鐘已足夠。人多時不加雲場池，避免把晚餐前的酒店入住壓縮。', 'Kyu Karuizawa Ginza Street', 36.3580, 138.6342, 'spot'],
        ['16:50', 'Return', '舊輕井澤 → TWIN-LINE', '搭巴士或步行約 25–30 分鐘回酒店；完成入住、休息及整理行李。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['19:00', 'Dinner', 'José Luis Karuizawa', '留在酒店內吃晚餐最穩妥；如未訂位，以川上庵或車站一帶餐廳作後備。', 'Jose Luis Karuizawa', 36.3430, 138.6365, 'reserved', '餐廳資料', 'https://www.twin-line-hotel.com/karuizawa/restaurant/']
      ]
    },
    21: {
      area: '星野・輕井澤站・東京丸之內',
      title: '星野晨遊、Asama 644 與東京站購物',
      intro: '10:00 離開酒店，以的士直達星野區；12:25 搭巴士回站，Outlet 只作一小時指定店快逛，再搭 15:34 新幹線。',
      advisory: '固定車次：Asama 644 輕井澤 15:34 → 東京 16:40。平日西武巴士在 09:10 後下一班由輕井澤站開出的班次是 11:00，因此 10:00 出發改搭的士，避免在車站浪費一小時。12:15 前到蜻蜓之湯站牌，搭 12:25 回程；若錯過，立即搭的士回酒店並取消 Outlet。',
      weather: '星野區早段較涼，帶薄外套；下雨時集中 Harunire Terrace 室內店與丸山咖啡。東京站購物全程可使用地下通道。',
      footer: '固定交通：10:00 的士往星野｜西武巴士 12:25 回程｜Asama 644 15:34–16:40',
      backup: {
        decision: '09:30 前決定：若只是短暫陣雨可去星野；若持續大雨、雷暴或能見度差，改走美術館／車站方案。',
        options: [
          {
            label: 'A｜間歇雨',
            summary: '仍去星野，但取消教堂之間的長步行，把時間轉到溫泉與室內店。',
            steps: [
              ['10:00', '的士直達蜻蜓之湯', '星野溫泉 09:00 起營業；先浸浴約 60 分鐘。'],
              ['11:20', 'Harunire Terrace', 'SAWAMURA 快速午餐、丸山咖啡買豆；12:15 到站牌。'],
              ['12:25', '西武巴士返回輕井澤站', '回酒店取行李；視雨勢保留或取消 13:35 Outlet。']
            ]
          },
          {
            label: 'B｜雷雨／大雨',
            summary: '取消星野區，改為建築美術館與車站南口，所有轉場均用短程的士。',
            steps: [
              ['10:00', '的士往輕井澤千住博美術館', '09:30–17:00；官方列明 7–9 月星期二也開館。'],
              ['11:40', '的士返回酒店取行李', '不等待巴士；約 12:15 前回到輕井澤站一帶。'],
              ['12:30', 'Prince Shopping Plaza／午餐', '有上蓋通道、餐廳與咖啡；14:35 結帳，14:45 回站。'],
              ['15:34', 'Asama 644 返回東京', '無論雨勢如何都保留固定新幹線，不再增加遠距離景點。']
            ]
          }
        ]
      },
      stops: [
        ['09:00', 'Breakfast', 'TWIN-LINE 早餐', '09:00 慢慢吃早餐；09:40 回房作最後整理，護照與新幹線票放隨身袋。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['09:50', 'Checkout', '退房・寄存行李', '在酒店完成退房並寄存大型行李；請櫃台協助預約 10:00 的士。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['10:00', 'Taxi', 'TWIN-LINE → 星野區', '直接乘的士到 Harunire Terrace／星野溫泉，車程約 20 分鐘；不等 11:00 才開出的下一班平日巴士。', 'Harunire Terrace Karuizawa', 36.3598, 138.5913, 'transit', '西武巴士時間表', 'https://www.seibubus.co.jp/timetable/dia/timechart/800001_01_1.html'],
        ['10:20', 'Nature & Design', 'Harunire Terrace・星野區散步', '沿湯川步道短走，再看設計、生活選物與手信；不走長距離森林路線。', 'Harunire Terrace Karuizawa', 36.3598, 138.5913, 'spot', '店舖營業時間', 'https://www.hoshino-area.jp/business-hours/'],
        ['10:55', 'Church', '輕井澤高原教會・石之教會', '步行查看兩座教堂；婚禮期間可能限制入內，不能參觀便只看外觀並立即返回 Harunire。', 'Stone Church Uchimura Kanzo Memorial Hall', 36.3539, 138.5891, 'spot', '參觀須知', 'https://www.stonechurch.jp/access/'],
        ['11:30', 'Early Lunch', 'SAWAMURA・丸山咖啡', 'SAWAMURA 11:00 起供應午餐；以麵包或快速餐點為主，丸山咖啡只作外帶／買豆。12:10 前離開。', 'Bakery Restaurant Sawamura Harunire Terrace', 36.3598, 138.5913, 'meal', '星野營業時間', 'https://www.hoshino-area.jp/business-hours/'],
        ['12:25', 'Bus', '星野溫泉 → 輕井澤站', '12:15 前到蜻蜓之湯站牌，搭平日 12:25 班次。錯過便立即叫的士，不等待 13:15 班次。', 'Hoshino Onsen Tombo no Yu Bus Stop', 36.3629, 138.5901, 'transit', '官方時間表', 'https://www.seibubus.co.jp/timetable/dia/timechart/800004_01_1.html'],
        ['13:10', 'Pickup', '返回 TWIN-LINE 取行李', '巴士抵站後回酒店取行李，再前往車站南口；若交通延誤至 13:30 後，直接取消 Outlet。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['13:35', 'Focused Shopping', 'Prince Shopping Plaza｜一小時快逛', '只揀 1–2 個目標品牌；14:35 無論如何結帳離開，14:45 回到車站。', 'Karuizawa Prince Shopping Plaza', 36.3377, 138.6349, 'spot', '官方營業時間', 'https://www.karuizawa-psp.jp/time'],
        ['15:34', 'Reserved Train', 'Asama 644｜輕井澤 → 東京', '14:45 回到車站、取行李及上月台；固定班次 15:34–16:40。', 'Karuizawa Station', 36.3424, 138.6350, 'reserved', 'JR 東日本', 'https://www.jreast.co.jp/multi/en/'],
        ['16:50', 'Luggage', '東京站行李寄存', '在東京站 B1 Gransta 地下北口附近寄存大型行李，服務一般至 21:00；先寄存再逛，避免拖箱穿過商場。', 'Tokyo Station Marunouchi Underground North Exit', 35.6821, 139.7664, 'transit', '寄存資料', 'https://www.gransta.jp/news/info/cloakservice/'],
        ['17:05', 'Stationery', 'TRAVELER’S FACTORY STATION', '就在丸之內地下北口外；優先看東京站限定 Station Edition、貼紙與活版印刷紙膠帶。', 'Travelers Factory Station Tokyo', 35.6823, 139.7660, 'spot', '店舖資料', 'https://www.gransta.jp/mall/gransta_marunouchi/travelersfactorystation/'],
        ['17:40', 'Books & Stationery', '丸善 丸之內本店', '步行至 Marunouchi OAZO，集中看日本設計、攝影書與書寫用品；營業至 21:00。', 'Maruzen Marunouchi Main Store Tokyo', 35.6837, 139.7668, 'spot'],
        ['18:30', 'Menswear', 'BEAMS HOUSE／BEAMS PLUS 丸之內', '兩店同區，適合成熟簡約男裝、外套與日本別注；只選一店慢慢試，避免再跨到八重洲。', 'BEAMS HOUSE Marunouchi Tokyo', 35.6805, 139.7637, 'spot', '店舖資料', 'https://www.beams.co.jp/shop/bhm/'],
        ['19:40', 'Dinner', '丸之內晚餐', '留在東京站／新丸之內大樓用餐；20:30 前取回行李，再乘的士到銀座酒店入住。', 'Shin Marunouchi Building Restaurants Tokyo', 35.6820, 139.7644, 'meal'],
        ['20:30', 'Hotel', '取行李 → 銀座酒店入住', '由東京站乘短程的士到三井花園酒店銀座五丁目，避免晚間再拖行李轉地鐵。', 'Mitsui Garden Hotel Ginza Gochome', 35.6693, 139.7673, 'hotel']
      ]
    },
    22: {
      area: '銀座・新宿',
      title: '銀座與新宿：咖啡、文具與相機採買',
      intro: '上午以銀座步行動線完成麵包、咖啡、文具；午後集中到新宿比較 Leica／Fujifilm 器材。',
      advisory: '今天只保留銀座與新宿，已移除築地、八重洲與品川，避免反覆轉車。相機採買預留兩間店比較時間；購買中古器材前先檢查快門、觀景器、感光元件與保養條款。',
      weather: '銀座與新宿均有大型室內商場；大雨時縮短街上步行，利用地下通道轉場。',
      footer: '今日策略：銀座步行採買 → 一程到新宿 → 相機集中比較',
      stops: [
        ['08:30', 'Breakfast', '塩麵包屋 pain･maison 銀座店', '先買你指定的塩麵包；排隊過長便外帶，不拖延後續。', 'pain maison Ginza Tokyo', 35.6694, 139.7597, 'meal'],
        ['09:30', 'Coffee', 'GLITCH COFFEE GINZA', '在銀座完成當日主咖啡，並詢問適合手沖的限定豆。', 'GLITCH COFFEE GINZA Tokyo', 35.6732, 139.7650, 'coffee'],
        ['10:45', 'Camera', 'Sukiya Camera', '先看 Leica 與中古鏡頭狀況，記錄價格後再到新宿比較。', 'Sukiya Camera Ginza Tokyo', 35.6713, 139.7646, 'spot'],
        ['12:00', 'Stationery', '銀座 伊東屋', '集中選購紙品、書寫工具及日本限定款，避免逐層無目的瀏覽。', 'Ginza Itoya Tokyo', 35.6718, 139.7664, 'spot'],
        ['13:15', 'Lunch', '根室花まる 銀座', '午餐後才轉往新宿；若輪候超過 30 分鐘，改吃附近後備。', 'Nemuro Hanamaru Ginza Tokyo', 35.6720, 139.7641, 'meal'],
        ['14:30', 'Transit', '銀座 → 新宿', '乘東京 Metro 丸之內線直達，避免經東京站繞路。', 'Shinjuku Station Tokyo', 35.6902, 139.6996, 'transit'],
        ['15:15', 'Camera', 'Map Camera', '集中比較 Leica 機身、鏡頭與 Fujifilm X-Pro3 配件；先驗貨再付款。', 'Map Camera Shinjuku Tokyo', 35.6894, 139.6968, 'spot'],
        ['16:45', 'Camera', '新宿 北村写真機店', '補看中古 X-Pro3、菲林及相機袋；與 Map Camera 的保養及價格直接比較。', 'Kitamura Camera Shinjuku Tokyo', 35.6916, 139.7025, 'spot'],
        ['18:30', 'Dinner', '新宿つな八 総本店', '留在新宿完成晚餐，不再折返銀座找餐廳。', 'Shinjuku Tsunahachi Tokyo', 35.6906, 139.7044, 'meal'],
        ['20:15', 'Return', '新宿 → 銀座酒店', '乘丸之內線返回銀座，整理當日採買。', 'Mitsui Garden Hotel Ginza Gochome', 35.6693, 139.7673, 'hotel']
      ]
    },
    23: {
      area: '六本木・麻布台',
      title: '東京博物館之旅：21_21、森美術館、teamLab',
      intro: '三個館集中在六本木至麻布台一帶，依地理順序一路向南，不再前往世田谷或代官山。',
      advisory: 'teamLab Borderless 必須先購指定時段門票，建議選 16:30；21_21 與森美術館也先確認當期展覽及休館資訊。每館保留 90–120 分鐘，若前段延誤，縮短午餐而不是壓縮 teamLab 入場緩衝。',
      weather: '今日以室內展館為主；六本木至麻布台仍有戶外步行，炎熱或下雨時改乘一站地鐵／的士。',
      footer: '今日策略：21_21 DESIGN SIGHT → 森美術館 → teamLab Borderless',
      stops: [
        ['08:30', 'Breakfast', '銀座酒店早餐', '博物館日會長時間步行與站立，先在酒店吃完整早餐。', 'Mitsui Garden Hotel Ginza Gochome breakfast', 35.6693, 139.7673, 'hotel'],
        ['09:30', 'Transit', '銀座 → 六本木', '預留開館前交通與步行時間，先到東京 Midtown 一帶。', '21 21 DESIGN SIGHT Tokyo', 35.6661, 139.7315, 'transit'],
        ['10:00', 'Museum', '21_21 DESIGN SIGHT', '先看設計主題展；建議控制在約 90 分鐘，保留午餐及移動緩衝。', '21_21 DESIGN SIGHT Tokyo', 35.6661, 139.7315, 'spot', '展覽資料', 'https://www.2121designsight.jp/en/'],
        ['11:45', 'Lunch', '東京 Midtown 午餐', '選酢重ダイニング六角等館旁餐廳；12:45 前離開。', 'Suju Dining Rokkaku Tokyo Midtown', 35.6667, 139.7306, 'meal'],
        ['13:15', 'Museum', '森美術館', '集中觀看主展與城市景觀；預留約 2 小時，不把商場購物混入展覽時段。', 'Mori Art Museum Tokyo', 35.6605, 139.7292, 'spot', '展覽與門票', 'https://www.mori.art.museum/en/'],
        ['15:30', 'Transit', '六本木 Hills → 麻布台 Hills', '步行或短程的士前往；必須為 teamLab 預約時段留 30 分鐘緩衝。', 'teamLab Borderless Azabudai Hills Tokyo', 35.6609, 139.7407, 'transit'],
        ['16:30', 'Ticketed Museum', 'teamLab Borderless', '建議預購 16:30 指定時段門票；入場後預留約 2 小時自由探索。', 'teamLab Borderless Azabudai Hills Tokyo', 35.6609, 139.7407, 'reserved', '購買門票', 'https://www.teamlab.art/e/tokyo/'],
        ['19:00', 'Dinner', 'Pizza 4P’s Tokyo', '你指定的餐廳就在麻布台 Hills；博物館結束後不必跨區。', 'Pizza 4Ps Tokyo Azabudai Hills', 35.6599, 139.7415, 'reserved', '餐廳資料', 'https://www.google.com/maps/search/?api=1&query=Pizza%204Ps%20Tokyo%20Azabudai%20Hills'],
        ['21:00', 'Return', '麻布台 → 銀座酒店', '晚餐後直接回酒店，結束博物館日。', 'Mitsui Garden Hotel Ginza Gochome', 35.6693, 139.7673, 'hotel']
      ]
    },
    24: {
      area: '代官山・中目黑・惠比壽',
      title: '代官山、中目黑、惠比壽：設計生活與預約燒肉',
      intro: '沿東急東橫線與步行範圍向南移動，將眼鏡、書店、文具、咖啡與已預約晚餐串成一條線。',
      advisory: 'Ebisu Yoroniku 已確認 19:15、5 人；18:55 前抵達。今天已移除吉祥寺、中野與新宿，避免固定晚餐前長距離折返。眼鏡試戴與調整需預留時間，不在同一店反覆進出。',
      weather: '代官山至中目黑適合步行；炎熱或大雨時使用東橫線一站轉場，保留晚餐準時到達。',
      footer: '今日策略：代官山 → 中目黑 → 惠比壽；19:15 固定晚餐',
      stops: [
        ['08:30', 'Breakfast', '銀座酒店早餐', '上午有較多步行，出發前先吃早餐。', 'Mitsui Garden Hotel Ginza Gochome breakfast', 35.6693, 139.7673, 'hotel'],
        ['10:15', 'Books & Design', '代官山 T-SITE', '先看建築、設計書與生活選物；只聚焦指定樓層，避免耗時過長。', 'Daikanyama T-SITE Tokyo', 35.6489, 139.6997, 'spot'],
        ['11:30', 'Eyewear', '金子眼鏡店 代官山', '試戴日系板材與日本限定配色，記錄型號、尺寸及取貨時間。', 'Kaneko Optical Daikanyama Tokyo', 35.6482, 139.7025, 'spot'],
        ['12:45', 'Lunch', 'IVY PLACE', '在代官山完成午餐；建議提前訂座，14:00 前離開。', 'IVY PLACE Daikanyama Tokyo', 35.6488, 139.6999, 'reserved', '餐廳資料', 'https://www.tysons.jp/ivyplace/en/'],
        ['14:15', 'Stationery', 'TRAVELER’S FACTORY 中目黑', '選購限定 TRAVELER’S notebook、補充頁與旅程印章。', 'TRAVELERS FACTORY Nakameguro Tokyo', 35.6436, 139.6989, 'spot'],
        ['15:15', 'Coffee & Walk', 'ONIBUS COFFEE・目黑川', '咖啡後沿目黑川短走；天氣差便取消散步，直接到惠比壽。', 'ONIBUS COFFEE Nakameguro Tokyo', 35.6439, 139.6984, 'coffee'],
        ['17:00', 'Design & Buffer', '惠比壽 Garden Place', '保留眼鏡取貨、購物或休息時間，也作晚餐前緩衝。', 'Yebisu Garden Place Tokyo', 35.6420, 139.7135, 'spot'],
        ['19:15', 'Confirmed Dinner', 'Ebisu Yoroniku', '已確認預約：7/24 19:15、5 人；建議 18:55 到達。', 'Ebisu Yoroniku Tokyo', 35.6470, 139.7087, 'reserved', '查看地圖', 'https://www.google.com/maps/search/?api=1&query=Ebisu%20Yoroniku%20Tokyo'],
        ['21:30', 'Return', '惠比壽 → 銀座酒店', '晚餐後直接乘地鐵回酒店。', 'Mitsui Garden Hotel Ginza Gochome', 35.6693, 139.7673, 'hotel']
      ]
    },
    25: {
      area: '銀座・惠比壽・羽田',
      title: '旅程收尾：Peter Luger 午餐與羽田出發',
      intro: '上午完成退房與銀座補買，中午到惠比壽吃 Peter Luger；下午回酒店取行李後提早前往羽田。',
      advisory: 'Peter Luger 建議預約 12:00 午餐並預留約 2 小時；teamLab Borderless 已移至 7/23，不再擠在離境日。21:00 前抵達羽田第 3 航廈，為 7/26 01:00 航班保留充足緩衝。',
      weather: '離境日以室內行程為主；若大雨或交通受阻，取消下午補買並提早前往羽田。',
      footer: '今日策略：退房寄存 → Peter Luger 午餐 → 取行李 → 羽田',
      stops: [
        ['08:30', 'Breakfast', '銀座酒店早餐', '先完成早餐及最後收拾，避免退房前匆忙。', 'Mitsui Garden Hotel Ginza Gochome breakfast', 35.6693, 139.7673, 'hotel'],
        ['10:00', 'Shopping', '銀座最後補買', '只處理已列好的咖啡豆、藥妝與手信清單，不新增遠距離景點。', 'Ginza Tokyo', 35.6717, 139.7650, 'spot'],
        ['10:45', 'Checkout', '退房・寄存行李', '確認護照、相機、退稅文件與航班資料隨身攜帶。', 'Mitsui Garden Hotel Ginza Gochome', 35.6693, 139.7673, 'hotel'],
        ['11:15', 'Transit', '銀座 → 惠比壽 Garden Place', '乘地鐵／JR 前往，預留步行及餐廳報到時間。', 'Peter Luger Steak House Tokyo', 35.6420, 139.7133, 'transit'],
        ['12:00', 'Reserved Lunch', 'Peter Luger Steak House Tokyo', '離境日重點午餐；建議提前訂座，預留約 2 小時享用及結帳。', 'Peter Luger Steak House Tokyo', 35.6420, 139.7133, 'reserved', '預約／餐廳資料', 'https://peterluger.co.jp/'],
        ['14:15', 'Buffer', '惠比壽短休・返回銀座', '只作短暫散步或咖啡，15:30 前開始返回銀座。', 'Ebisu Station Tokyo', 35.6467, 139.7101, 'spot'],
        ['16:00', 'Pickup', '銀座酒店取行李', '重新檢查退稅品、護照、充電器與現金。', 'Mitsui Garden Hotel Ginza Gochome', 35.6693, 139.7673, 'hotel'],
        ['18:00', 'Transit', '銀座 → 羽田機場', '優先乘都營淺草線／京急直通列車；遇延誤立即改用備選路線。', 'Haneda Airport Terminal 3', 35.5447, 139.7686, 'transit'],
        ['19:00', 'Dinner', '羽田第 3 航廈簡單晚餐', '完成報到及行李托運後再吃，避免在市區延誤。', 'Haneda Airport Terminal 3 restaurants', 35.5447, 139.7686, 'meal'],
        ['21:00', 'Flight Buffer', '抵達 HND 第 3 航廈', '辦理 UO623 登機；7/26 01:00 起飛。', 'Haneda Airport Terminal 3', 35.5447, 139.7686, 'flight']
      ]
    }
  };

  const renderStop = (day, stop, index) => {
    const [time, category, title, purpose, query, lat, lon, kind, actionLabel, actionUrl] = stop;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    const action = actionLabel && actionUrl
      ? `<a class="reservation-action" href="${actionUrl}" target="_blank" rel="noopener noreferrer">${actionLabel}</a>`
      : '';

    return `<li class="route-stop"><time class="timeline-time" datetime="${time}">${time}</time><article class="timeline-entry" data-stop-card data-stop-index="${index}" data-stop-time="${time}" data-map-label="${title}" data-map-lat="${lat}" data-map-lon="${lon}" data-map-url="${mapUrl}" data-map-kind="${kind}" id="day-${day}-stop-${index}"><p class="timeline-category">${category}</p><h3 data-stop-title>${title}</h3><p class="timeline-purpose">${purpose}</p><div class="timeline-actions"><a class="map" href="${mapUrl}" target="_blank" rel="noopener">地圖</a>${action}</div></article></li>`;
  };

  const renderBackup = (backup) => `<header><div><span>WEATHER BACKUP</span><h3>雨天後備行程</h3></div><p>${backup.decision}</p></header><div class="rain-backup-grid">${backup.options.map((option) => `<article><div class="rain-backup-label">${option.label}</div><p>${option.summary}</p><ol>${option.steps.map(([time, title, note]) => `<li><time>${time}</time><div><strong>${title}</strong><span>${note}</span></div></li>`).join('')}</ol></article>`).join('')}</div>`;

  Object.entries(dayPlans).forEach(([day, plan]) => {
    const card = document.querySelector(`[data-route-day="${day}"]`);
    if (!card) return;

    const area = card.querySelector('.area-tag');
    const heading = card.querySelector('.day-head > h2');
    const intro = heading?.nextElementSibling;
    const advisory = card.querySelector('.trip-advisory p');
    const timeline = card.querySelector('.route-timeline');
    const weatherTip = card.querySelector('[data-weather-tip]');
    const footer = card.querySelector('.day-footer b, .day-foot b');

    if (area) area.textContent = plan.area;
    if (heading) heading.textContent = plan.title;
    if (intro) intro.textContent = plan.intro;
    if (advisory) advisory.textContent = plan.advisory;
    if (timeline) timeline.innerHTML = plan.stops.map((stop, index) => renderStop(day, stop, index)).join('');
    if (weatherTip) weatherTip.textContent = plan.weather;
    if (footer) footer.textContent = plan.footer;
    if (plan.backup && !card.querySelector('.rain-backup')) {
      const section = document.createElement('section');
      section.className = 'rain-backup';
      section.setAttribute('aria-label', '雨天後備行程');
      section.innerHTML = renderBackup(plan.backup);
      const anchor = card.querySelector('.trip-advisory');
      if (anchor) anchor.after(section);
      else timeline?.before(section);
    }
  });

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
      ['午餐', '東京站駅弁（車上吃）', '後備：車站 NewDays｜Asama 609 車程內完成午餐；抵達後只處理寄存與 13:20 巴士，不再排正式餐廳。', '¥800–1,800', '免預約', 'Tokyo Station Ekiben Matsuri'],
      ['晚餐', 'José Luis Karuizawa', '後備：川上庵 輕井澤｜酒店內西班牙×信州料理最省交通；正式晚餐需預約。', '¥4,000–9,000', '主選建議預約', 'Jose Luis Karuizawa']
    ],
    21: [
      ['早餐', 'José Luis／TWIN-LINE早餐', '後備：酒店附近麵包｜09:00 用餐，09:50 完成退房及寄存，10:00 準時上車。', '¥1,000–3,500', '住宿確認', 'Jose Luis Karuizawa breakfast'],
      ['午餐', 'SAWAMURA Harunire', '後備：SAWAMURA 麵包外帶｜11:30 吃快速午餐，12:10 前離開並到蜻蜓之湯站牌。', '¥1,000–2,500', '免預約', 'Bakery Restaurant Sawamura Harunire Terrace'],
      ['晚餐', '丸之內／新丸之內大樓', '後備：Gransta 東京駅內餐廳｜購物後就地吃飯；20:30前取行李，再乘的士到銀座酒店。', '¥1,500–5,000', '熱門店建議預約', 'Shin Marunouchi Building Restaurants Tokyo']
    ],
    22: [
      ['早餐', 'pain･maison 銀座店', '後備：酒店早餐｜你指定的塩麵包為主；排隊超過 25 分鐘便外帶。', '¥500–1,200', '不設預約', 'pain maison Ginza Tokyo'],
      ['午餐', '根室花まる 銀座', '後備：壽司美登利銀座｜Itoya後就近用餐，再乘丸之內線前往新宿。', '¥2,000–4,500', '預留排隊', 'Nemuro Hanamaru Ginza Tokyo'],
      ['晚餐', '新宿つな八 総本店', '後備：BERG 新宿｜完成兩間相機店後留在新宿用餐，不再跨區。', '¥2,000–5,000', '晚市可預約', 'Shinjuku Tsunahachi Tokyo']
    ],
    23: [
      ['早餐', '銀座酒店早餐', '後備：pain･maison外帶｜博物館日步行與站立時間長，先吃完整早餐。', '¥800–3,000', '住宿確認', 'Mitsui Garden Hotel Ginza Gochome breakfast'],
      ['午餐', '酢重ダイニング 六角', '後備：東京 Midtown 輕食｜就在 21_21 附近，12:45 前離開前往森美術館。', '¥2,000–4,000', '建議預約', 'Suju Dining Rokkaku Tokyo Midtown'],
      ['晚餐', 'Pizza 4P’s Tokyo', '你指定的餐廳｜位於麻布台 Hills，teamLab 結束後不用再跨區。', '¥2,500–5,000', '必須提前訂座', 'Pizza 4Ps Tokyo Azabudai Hills']
    ],
    24: [
      ['早餐', '銀座酒店早餐', '後備：代官山 T-SITE 輕食｜出發前先墊胃，咖啡不能代替早餐。', '¥800–3,000', '住宿確認', 'Mitsui Garden Hotel Ginza Gochome breakfast'],
      ['午餐', 'IVY PLACE 代官山', '後備：Hacienda del cielo｜位於 T-SITE 旁，午餐後順路前往中目黑。', '¥2,000–3,500', '建議提前訂座', 'IVY PLACE Daikanyama Tokyo'],
      ['晚餐', 'Ebisu Yoroniku', '你已確認的固定預約｜7/24 19:15、5人；完整預約號碼不在公開頁顯示。', '已訂套餐', '已確認預約', 'Ebisu Yoroniku Tokyo']
    ],
    25: [
      ['早餐', '銀座酒店早餐', '後備：GLITCH＋外帶麵包｜退房日前以整理行李和補買咖啡豆為主。', '¥1,000–3,000', '住宿確認', 'Mitsui Garden Hotel Ginza Gochome breakfast'],
      ['午餐', 'Peter Luger Steak House Tokyo', '你指定的離境日午餐｜位於惠比壽 Garden Place；建議 12:00 入座並預留約 2 小時。', '¥8,000–20,000+', '必須提前訂座', 'Peter Luger Steak House Tokyo'],
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
