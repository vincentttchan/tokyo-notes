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
      area: '熊野皇大神社・舊輕井澤',
      title: 'Asama 609、取車與熊野皇大神社自駕線',
      intro: '抵達輕井澤後在車站北口取車，先把大型行李交給酒店，再沿碓冰峠前往熊野皇大神社；白絲瀑布已從行程移除。',
      advisory: '固定車次：Asama 609 東京 11:04 → 輕井澤 12:15；已預約 13:00 取車。櫃台位於輕井澤站前郵局旁大樓 2 樓，由北口步行約 5 分鐘。取車時確認 ETC、免責補償、NOC、油種及還車前加滿油。山路彎多且午後可能有霧或雷雨，不趕路、不在路肩停車。',
      weather: '暫按天氣良好的主線安排；山上仍可能起霧，出發前看即時能見度。若視野突然轉差，只取消見晴台，熊野皇大神社仍是今天核心。',
      footer: '固定交通：Asama 609 11:04–12:15｜7/20 13:00 取車｜7/21 13:00 還車',
      stops: [
        ['08:30', 'Breakfast', '日本橋酒店早餐・退房', '先吃完整早餐；09:45 前退房，確認新幹線票、雨具與日圓現金。', 'Mitsui Garden Hotel Nihonbashi Premier', 35.6882, 139.7735, 'hotel'],
        ['10:00', 'Transit', '日本橋酒店 → 東京站', '有行李建議短程的士至日本橋口；10:30 前到站，留時間找月台與買午餐。', 'Tokyo Station Nihonbashi Exit', 35.6825, 139.7707, 'transit'],
        ['11:04', 'Reserved Train', 'Asama 609｜東京 → 輕井澤', '固定班次 11:04–12:15；午餐在車上吃駅弁，避免抵達後再排餐廳。', 'Tokyo Station', 35.6812, 139.7671, 'reserved', 'JR 東日本', 'https://www.jreast.co.jp/multi/en/'],
        ['12:15', 'Arrival', '抵達輕井澤・先寄存行李', '由北口步行到 TWIN-LINE 寄存大型行李，再步行返回車站北口一帶；12:50 前到取車櫃台。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['13:00', 'Pick-up Car', '預約取車・完成車況確認', '櫃台在輕井澤站前郵局旁大樓 2 樓，北口步行約 5 分鐘；拍攝車身、確認油種、保險及還車方式。', 'Karuizawa Station Post Office', 36.3437, 138.6344, 'transit'],
        ['13:25', 'Drive', '自駕往熊野皇大神社', '導航設定熊野皇大神社；預留約 20–25 分鐘及暑期車流。山路窄彎，不超車、不在路肩停車。', 'Kumano Kotai Shrine Karuizawa', 36.3425, 138.6564, 'transit'],
        ['13:50', 'Main Visit', '熊野皇大神社・縣境・科之木', '今天最重要的行程。先完整參拜長野／群馬縣境上的神社及樹齡逾千年的科之木，不用趕往其他景點。', 'Kumano Kotai Shrine Karuizawa', 36.3425, 138.6564, 'reserved', '觀光資料', 'https://karuizawa-kankokyokai.jp/spot/23083/'],
        ['14:35', 'Local Snack', 'しげの屋・力餅', '就在神社旁，短休息約 20 分鐘；想控制時間可外帶或只點一款力餅。', 'Shigenoya Usui Pass Karuizawa', 36.3424, 138.6568, 'meal'],
        ['14:55', 'Viewpoint', '舊碓冰峠見晴台', '天氣清楚才前往，短停留約 20 分鐘看群山與縣境；若起霧便直接略過。', 'Usui Pass Observation Platform Karuizawa', 36.3403, 138.6570, 'spot'],
        ['15:20', 'Drive', '碓冰峠 → 舊輕井澤', '沿原路下山，使用舊輕井澤公共停車場；不要為找免費車位在商店街繞行。', 'Kyu Karuizawa Ginza Street', 36.3580, 138.6342, 'transit'],
        ['15:40', 'Historic Walk', 'Shaw Memorial Chapel・舊輕井澤銀座', '先到山腳附近的 Shaw Memorial Chapel，再沿主街往聖保羅教堂方向散步；16:35 開始回酒店。', 'Karuizawa Shaw Memorial Church', 36.3627, 138.6356, 'spot'],
        ['16:45', 'Return', '駕車返回 TWIN-LINE・入住', '回酒店停車、完成入住及休息；確認翌日退房後可否短暫放行李或直接把行李放入尾箱。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['19:00', 'Dinner', 'José Luis Karuizawa', '留在酒店內吃晚餐最穩妥；如未訂位，以川上庵或車站一帶餐廳作後備。', 'Jose Luis Karuizawa', 36.3430, 138.6365, 'reserved', '餐廳資料', 'https://www.twin-line-hotel.com/karuizawa/restaurant/']
      ]
    },
    21: {
      area: '星野・輕井澤站・東京丸之內',
      title: '星野短線、13:00 還車與 Asama 644',
      intro: '10:00 自酒店出發，以自駕完成 Harunire Terrace 與教堂短線；11:45 開始回程、加滿油，預留時間在 13:00 前還車。',
      advisory: '固定預約：7/21 13:00 在輕井澤站北口一帶還車；固定車次：Asama 644 輕井澤 15:34 → 東京 16:40。千住博美術館已移出主方案，因為 10:00 出發後再加入美術館，無法穩妥地完成入油、驗車及準時還車。Outlet 與午餐放在還車後步行完成。',
      weather: '暫按天氣良好的主線安排。星野停車場平日 11:00–14:00 較繁忙；P1–P3 滿位時直接依指示到 P6／P7，不在路邊等位。',
      footer: '固定交通：10:00 自駕出發｜13:00 還車｜Asama 644 15:34–16:40',
      stops: [
        ['09:00', 'Breakfast', 'TWIN-LINE 早餐', '09:00 慢慢吃早餐；09:40 回房作最後整理，護照與新幹線票放隨身袋。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['09:45', 'Checkout', '退房・行李放入尾箱', '完成退房，行李全部放入尾箱並保持車廂無可見物品；10:00 準時開車。', 'TWIN-LINE HOTEL KARUIZAWA JAPAN', 36.3430, 138.6365, 'hotel'],
        ['10:00', 'Drive', 'TWIN-LINE → 星野區', '導航前往 Harunire Terrace；預留約 20 分鐘。P1–P3 滿位時直接依現場指示到 P6／P7。', 'Harunire Terrace Karuizawa', 36.3598, 138.5913, 'transit', '停車資料', 'https://www.hoshino-area.jp/parking/'],
        ['10:25', 'Main Visit', '輕井澤高原教會', '今天最重要的行程。官方參觀時間 10:00–17:00；先問現場職員當日可入內時段，婚禮進行中便安靜等候或先去石之教堂。', 'Karuizawa Kogen Church', 36.3546, 138.5900, 'reserved', '官方參觀資料', 'https://www.karuizawachurch.org/about/'],
        ['10:50', 'Architecture', '石之教堂・內村鑑三紀念堂', '步行前往，欣賞石、玻璃、水與綠意構成的有機建築；官方參觀時間 10:00–17:00，婚禮時可能暫停入內。', 'Stone Church Uchimura Kanzo Memorial Hall', 36.3539, 138.5891, 'spot', '官方參觀資料', 'https://www.stonechurch.jp/access/'],
        ['11:20', 'Nearby Walk', 'Harunire Terrace・湯川短步道', '教堂完成後才順遊河畔與生活選物店；不作長距離步行，也不在餐廳排隊。', 'Harunire Terrace Karuizawa', 36.3598, 138.5913, 'spot', '星野地圖', 'https://www.hoshino-area.jp/wp-content/uploads/2025/05/hoshinoareamap_2505.pdf'],
        ['11:35', 'Coffee / Snack', '丸山咖啡／SAWAMURA 外帶', '只買咖啡豆、咖啡或麵包；11:45 必須開車離開。正式午餐放在還車後。', 'Maruyama Coffee Harunire Terrace', 36.3598, 138.5913, 'meal', '星野營業時間', 'https://www.hoshino-area.jp/business-hours/'],
        ['11:45', 'Drive', '星野 → 加油站', '立即駕車返回輕井澤站方向；按租車單指定油種加滿並保留收據。', 'Karuizawa Station', 36.3424, 138.6350, 'transit'],
        ['12:30', 'Return Car', '提早抵達租車櫃台・驗車', '預約還車時間是 13:00；目標 12:30–12:40 抵達，預留卸行李、驗車與上 2 樓辦手續。', 'Karuizawa Station Post Office', 36.3437, 138.6344, 'reserved'],
        ['13:00', 'Luggage', '完成還車・車站寄存行李', '步行約 5 分鐘回輕井澤站，把大型行李放入寄物櫃或服務櫃台後再前往南口。', 'Karuizawa Station', 36.3424, 138.6350, 'transit'],
        ['13:15', 'Lunch & Shopping', 'Prince Shopping Plaza', '先午餐，再只逛 1–2 間目標店；14:35 結帳離開，步行返回車站。', 'Karuizawa Prince Shopping Plaza', 36.3377, 138.6349, 'spot', '官方營業時間', 'https://www.karuizawa-psp.jp/time'],
        ['15:34', 'Reserved Train', 'Asama 644｜輕井澤 → 東京', '固定班次 15:34–16:40；不要為 Outlet 延遲還車。', 'Karuizawa Station', 36.3424, 138.6350, 'reserved', 'JR 東日本', 'https://www.jreast.co.jp/multi/en/'],
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

  [20, 21].forEach((day) => {
    const sheet = [...document.querySelectorAll('.book-sheet.book-day')]
      .find((item) => item.querySelector('.book-day-head strong')?.textContent.trim() === `7/${day}`);
    const plan = dayPlans[day];
    if (!sheet || !plan) return;

    const area = sheet.querySelector('.book-day-head em');
    const heading = sheet.querySelector('h4');
    const subtitle = sheet.querySelector('.book-subtitle');
    const advisory = sheet.querySelector('.book-advisory');
    const timeline = sheet.querySelector('.book-timeline');

    if (area) area.textContent = plan.area;
    if (heading) heading.textContent = plan.title;
    if (subtitle) subtitle.textContent = plan.intro;
    if (advisory) advisory.textContent = plan.advisory;
    if (timeline) {
      timeline.innerHTML = plan.stops.map(([time, category, title, note]) =>
        `<li><time>${time}</time><span><i>${category}</i><strong>${title}</strong><small>${note}</small></span></li>`
      ).join('');
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
      ['午餐', '東京站駅弁（車上吃）', '後備：車站 NewDays｜Asama 609 車程內完成午餐；抵達後要取車、寄存行李及上山，不再排正式餐廳。', '¥800–1,800', '免預約', 'Tokyo Station Ekiben Matsuri'],
      ['晚餐', 'José Luis Karuizawa', '後備：川上庵 輕井澤｜酒店內西班牙×信州料理最省交通；正式晚餐需預約。', '¥4,000–9,000', '主選建議預約', 'Jose Luis Karuizawa']
    ],
    21: [
      ['早餐', 'José Luis／TWIN-LINE早餐', '後備：酒店附近麵包｜09:00 用餐，09:45 完成退房及把行李放入尾箱，10:00 準時開車。', '¥1,000–3,500', '住宿確認', 'Jose Luis Karuizawa breakfast'],
      ['午餐', 'Prince Shopping Plaza', '後備：SAWAMURA 麵包外帶｜13:15 還車及寄存行李後才吃正式午餐；星野只買麵包或咖啡。', '¥1,000–2,500', '免預約', 'Karuizawa Prince Shopping Plaza restaurants'],
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
