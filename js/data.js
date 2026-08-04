/* ==========================================================================
   OOTD 日系約會穿搭指南 - Structured Outfit Database
   ========================================================================== */

const outfitDatabase = {
  // 階段 1：曖昧期 (First Date / Early Stage)
  first_date: {
    stageName: '曖昧期 1st Date Look',
    stageDesc: '重視第一印象的「氣質」與「適度體貼感」，絕不出錯的沉穩對比與質感配件。',
    scenarios: {
      exhibition: {
        id: 'exhibition',
        name: '看展覽 / 美術館 🎨',
        vibe: '氣質優雅 · 簡約知性',
        img: 'images/exhibition.jpg',
        desc: '不約而同的經典黑白搭配，表現出乾淨優雅的文藝氣質，落肩剪裁有效修飾肩線，大方從容。',
        male: {
          items: [
            { name: '亞麻涼感開領短袖襯衫 (白色)', tag: '透氣 / 亞麻混紡', fitCode: 'narrow_shoulder' },
            { name: '寬版高腰西裝庫 (黑色)', tag: '接觸涼感 / 抗皺', fitCode: 'leg_lengthen' },
            { name: '質感壓紋皮革隨身包', tag: '精緻皮革 / 剛好容量', fitCode: 'accessory' },
            { name: '銀質輕型褲鏈', tag: '極簡亮點 / 細節加分', fitCode: 'accessory' }
          ],
          rules: [
            '【廓形心法】：寬鬆開領襯衫 + 垂墜西裝褲，延伸肩膀比例不顯魁梧。',
            '【材質重點】：選擇微透光的亞麻材質，視覺涼爽且充滿從容自在感。',
            '【約會貼心】：隨身小包大小適中，必要時可幫女生放置小隨身物品。'
          ],
          fabricTags: ['亞麻透氣', '接觸涼感', '抗皺免燙'],
          bodyFit: ['窄肩修飾', '腿型拉長']
        },
        female: {
          items: [
            { name: '落肩學院風大雪紡上衣 (白色)', tag: '寬鬆修飾 / 楚楚可憐', fitCode: 'hide_belly' },
            { name: 'A字剪裁抗皺長裙 (黑色)', tag: '不易起皺 / 順滑', fitCode: 'leg_lengthen' },
            { name: '日系復古隨身斜背包', tag: '點睛配件', fitCode: 'accessory' }
          ],
          rules: [
            '【遮瑕心法】：落肩上衣與寬鬆版型，自然修飾小腹與腰線痛點。',
            '【坐姿防皺】：抗皺裙裝解決展覽休息坐下後的尷尬不自然折痕。',
            '【視覺黃金比】：黑白簡約搭配，隨手一拍都是文藝質感大片。'
          ],
          fabricTags: ['抗皺免燙', '雪紡垂墜'],
          bodyFit: ['遮小腹', '落肩修飾']
        },
        hotspots: [
          { top: '35%', left: '38%', title: '開領亞麻襯衫', text: '微透光亞麻材質，涼爽且延伸肩線，視覺寬闊可靠。' },
          { top: '65%', left: '34%', title: '銀質細褲鏈', text: '素色西裝褲上的低調極簡配件，細節感滿分。' },
          { top: '48%', left: '42%', title: '壓紋皮革小包', text: '約會必備精緻皮革小包，不過度大包小包，乾淨俐落。' },
          { top: '40%', left: '68%', title: '落肩楚楚可憐切', text: '寬鬆落肩讓手臂與手肘肉肉獲得自然修飾。' }
        ]
      },
      shopping: {
        id: 'shopping',
        name: '澀谷/信義區 逛街購物 🛍️',
        vibe: '時髦混搭 · 展現品味',
        img: 'images/shopping.jpg',
        desc: '逛街行程需兼顧頻繁試穿的便利性與強烈個人風格，刺繡、薄紗疊穿與亮眼格紋輕鬆抓住目光。',
        male: {
          items: [
            { name: '質感彈性領口莫代爾T恤', tag: '易穿脫 / 領口抗洗', fitCode: 'narrow_shoulder' },
            { name: '接觸涼感寬版牛仔褲', tag: '接觸涼感 / 弧線剪裁', fitCode: 'leg_lengthen' },
            { name: '銀色造型戒指與鑰匙圈', tag: '街頭飾品', fitCode: 'accessory' }
          ],
          rules: [
            '【試穿便利】：領口具高彈性，頻繁試穿不拉鬆、不弄亂髮型。',
            '【涼感科技】：牛仔褲採用接觸涼感布料，強烈冷氣吹入更顯涼爽。',
            '【心機細節】：轉身後的背影精緻刺繡圖案，給走在身後的女生小驚喜。'
          ],
          fabricTags: ['接觸涼感', '彈性棉質'],
          bodyFit: ['腿型拉長', '高彈易穿']
        },
        female: {
          items: [
            { name: '刺繡拼接細節薄紗短T', tag: '層次感 / 刺繡精緻', fitCode: 'arm_hide' },
            { name: '黑白格紋花邊蛋糕裙', tag: '造型感強 / 雷絲蕾絲', fitCode: 'hide_belly' },
            { name: '潮流日系斜背腰包', tag: '提高腰線 / 比例神力', fitCode: 'leg_lengthen' }
          ],
          rules: [
            '【腰線重塑】：使用腰包斜背在胸腰位置，視覺腰線瞬間拉高5公分。',
            '【甜酷平衡】：格紋蛋糕裙搭配極簡刺繡T，甜美不失個性。',
            '【多層次零負擔】：選用輕盈薄紗，無感疊穿卻擁有滿滿日系豐富度。'
          ],
          fabricTags: ['透氣薄紗', '雷絲蕾絲'],
          bodyFit: ['顯高比例', '遮小腹']
        },
        hotspots: [
          { top: '30%', left: '35%', title: '高彈力抗洗領口', text: '試穿衣服時輕鬆穿脫，避免領口荷葉邊與髮型崩潰。' },
          { top: '55%', left: '72%', title: '日系高腰腰包', text: '將斜背腰包定位於高腰處，重塑全身完美比例。' },
          { top: '75%', left: '70%', title: '蕾絲花邊蛋糕裙', text: '層次豐富不笨重，散發獨特日系潮流氣息。' }
        ]
      },
      park: {
        id: 'park',
        name: '公園散步 / 戶外綠意 🌿',
        vibe: '陽光清新 · 親和無壓',
        img: 'images/park.jpg',
        desc: '戶外陽光下的輕盈防護，兼顧清涼與防蚊需求，上挺下飄的比例搭配讓人感到舒服好親近。',
        male: {
          items: [
            { name: '透氣壓紋針織 POLO 衫 (明亮藍)', tag: '飽和顯白 / 接觸涼感', fitCode: 'narrow_shoulder' },
            { name: '過膝六分寬鬆氣球褲 (麻灰)', tag: '膝蓋掩護 / 垂墜對比', fitCode: 'hide_belly' },
            { name: '便攜式復古帆布鞋', tag: '輕鬆防護', fitCode: 'accessory' }
          ],
          rules: [
            '【上挺下飄】：上半身選擇微挺針織 POLO，下半身搭配飄逸氣球褲。',
            '【顯白密碼】：高飽和亮藍色讓戶外皮膚看起來格外透亮乾淨。',
            '【遮膝防護】：過膝六分剪裁遮住膝蓋肉，同時解決害羞與蚊蟲叮咬。'
          ],
          fabricTags: ['接觸涼感', '透氣針織'],
          bodyFit: ['Oversized防魁梧', '腿型修飾']
        },
        female: {
          items: [
            { name: '蕾絲滾邊透膚接觸涼感襯衫', tag: '鎖骨展示 / 吸濕排汗', fitCode: 'arm_hide' },
            { name: '拼接蕾絲棉質寬褲 (米白)', tag: '舒適防蚊 / 不抓癢', fitCode: 'leg_lengthen' },
            { name: '前高後高厚底涼拖鞋', tag: '一秒穿脫 / 野餐便捷', fitCode: 'leg_lengthen' }
          ],
          rules: [
            '【防蚊兼顧】：長褲防止草地蚊蟲，棉質涼感材質高溫下也不悶熱。',
            '【一秒穿脫】：前高後高涼拖鞋讓草地野餐墊穿脫鞋瞬間完成。',
            '【鎖骨露出】：將第二顆扣子打開往後拉，露出優美鎖骨線條。'
          ],
          fabricTags: ['接觸涼感', '綿麻透氣'],
          bodyFit: ['遮腿肉', '顯高比例']
        },
        hotspots: [
          { top: '28%', left: '30%', title: '針織 POLO 顯白配色', text: '明亮飽和藍色在綠意公園中格外陽光亮眼。' },
          { top: '65%', left: '26%', title: '六分垂墜氣球褲', text: '蓋住膝蓋避免受傷與蚊蟲，立體剪裁不顯笨重。' },
          { top: '80%', left: '72%', title: '前高後高厚底涼拖', text: '野餐墊上下穿脫超快速，厚底完美延伸腿部線條。' }
        ]
      }
    }
  },

  // 階段 2：熱戀期 / 紀念日 (Anniversary / Deep Relationship)
  anniversary: {
    stageName: '熱戀期 / 紀念日 Look',
    stageDesc: '儀式感與低調奢華兼具，展現深度了解彼此後的層次感與默契混搭。',
    scenarios: {
      dining: {
        id: 'dining',
        name: '高級餐廳 紀念日晚宴 🍷',
        vibe: '低調華麗 · 輕奢正裝',
        img: 'images/dining.jpg',
        desc: '不需呆板全套西裝，運用短袖西裝外套、卡其混紡與微閃亮片背心，呈現剛剛好的精緻得體。',
        male: {
          items: [
            { name: '短袖古巴領西裝外套 (深灰)', tag: '隨性正裝 / 休閒兼顧', fitCode: 'narrow_shoulder' },
            { name: '壓線垂墜混砂卡其褲 (米白)', tag: '混砂涼感 / 立體折線', fitCode: 'leg_lengthen' },
            { name: '經典樂福皮鞋', tag: '得體正式', fitCode: 'accessory' }
          ],
          rules: [
            '【高 CP 正裝】：古巴領短袖西服，紀念日晚餐後日常通訊也能穿。',
            '【下淺上深】：深色外套平衡視覺，明亮褲款展現從容不呆板。',
            '【皮鞋點睛】：垂墜褲腳剛好覆蓋皮鞋鞋面，體現滿分儀式感。'
          ],
          fabricTags: ['混砂涼感', '垂墜混紡'],
          bodyFit: ['顯高比例', '窄肩修飾']
        },
        female: {
          items: [
            { name: '短袖修身落肩西裝外套 (奶茶色)', tag: '手臂修飾 / 恰好華麗', fitCode: 'arm_hide' },
            { name: '微光閃耀質感細肩背心', tag: '燈光亮點 / 同色延長', fitCode: 'hide_belly' },
            { name: '輕層次低調蛋糕裙', tag: '不甜膩 / 高級層次', fitCode: 'leg_lengthen' },
            { name: '細帶極簡涼鞋', tag: '清爽優雅', fitCode: 'accessory' }
          ],
          rules: [
            '【燈光聚焦】：微光亮片內搭在餐廳氣氛燈下閃爍，低調有巧思。',
            '【剛好的華麗】：少層數蛋糕裙免去過度甜美，展現優雅女人味。',
            '【同色延伸】：同色系背心與外套搭配，視覺身型自然向上拉長。'
          ],
          fabricTags: ['微光混紡', '垂墜雪紡'],
          bodyFit: ['手臂修飾', '顯高比例']
        },
        hotspots: [
          { top: '35%', left: '35%', title: '古巴領短袖西服', text: '得體又不沉重，日常與重要場合皆可隨時駕馭。' },
          { top: '40%', left: '68%', title: '微光氣氛背心', text: '燭光與氣氛燈下的極致小巧思，閃耀而不張揚。' },
          { top: '65%', left: '72%', title: '少層數低調蛋糕裙', text: '恰到好處的層次感，擺脫傳統龐大澎裙的幼稚感。' }
        ]
      },
      bar: {
        id: 'bar',
        name: '夜間酒吧 / 質感小酌 🍸',
        vibe: '微醺浪漫 · 和風層次',
        img: 'images/bar.jpg',
        desc: '下班後的隨性轉換，利用抽繩與和風版型細節，在酒吧氣氛燈光下散發神秘魅力的低調粉嫩感。',
        male: {
          items: [
            { name: '和風抽繩縮口襯衫 (乾燥粉)', tag: '粉嫩細節 / 和風剪裁', fitCode: 'narrow_shoulder' },
            { name: '修身直筒深色長褲', tag: '視覺收斂 / 沉穩', fitCode: 'leg_lengthen' },
            { name: '銀飾戒指組合', tag: '酒吧氛圍', fitCode: 'accessory' }
          ],
          rules: [
            '【日夜切換】：上班時放鬆抽繩，下班酒吧隨手抽緊變換束口輪廓。',
            '【勇於嘗試】：莫蘭迪乾燥粉在酒吧暗光中顯得溫柔且極具品味。',
            '【好活動】：和風袖型活動自如，舉杯小酌時線條流暢好看。'
          ],
          fabricTags: ['和風綿麻', '伸縮調校'],
          bodyFit: ['窄肩修飾', '身型收斂']
        },
        female: {
          items: [
            { name: '透膚層次壓紋晚宴上衣', tag: '低調微露 / 氛圍美感', fitCode: 'arm_hide' },
            { name: '高腰俐落剪裁西裝長褲', tag: '大方洗練 / 華麗轉身', fitCode: 'leg_lengthen' },
            { name: '精緻金屬吊飾手鍊', tag: '舉杯亮點', fitCode: 'accessory' }
          ],
          rules: [
            '【華麗轉身】：上班專業下班性感，透膚質感在酒吧燈下極具魅力。',
            '【洗練腿型】：高腰褲型平衡上衣透膚感，帥氣與女性美兼備。',
            '【配飾連動】：拿酒杯與調酒時手鍊自然閃爍。'
          ],
          fabricTags: ['透膚雪紡', '彈性混紡'],
          bodyFit: ['顯高比例', '遮小腹']
        },
        hotspots: [
          { top: '38%', left: '36%', title: '和風抽繩結構', text: '下班一秒抽緊改變輪廓，打造專業到浪漫的完美變身。' },
          { top: '30%', left: '30%', title: '莫蘭迪乾燥粉', text: '打破男生不敢穿粉色的迷思，低飽和粉極顯質感。' },
          { top: '42%', left: '68%', title: '透膚壓紋層次上衣', text: '酒吧昏黃燈光下的隱約美感，高級感十足。' }
        ]
      }
    }
  }
};

// P1 功能資料庫：自由混搭選項單品庫
const mixAndMatchOptions = {
  male: {
    tops: [
      { id: 'm_top_1', name: '亞麻涼感開領短袖襯衫 (白色)', type: 'structured', scoreBonus: 25, desc: '【上挺】延伸肩線，透氣自然' },
      { id: 'm_top_2', name: '彈性莫代爾極簡T恤 (淺灰)', type: 'soft', scoreBonus: 20, desc: '【休閒】領口彈性好拉伸，不變形' },
      { id: 'm_top_3', name: '壓紋針織 POLO 衫 (飽和藍)', type: 'structured', scoreBonus: 25, desc: '【上挺】顯白戶外第一首選' },
      { id: 'm_top_4', name: '短袖古巴領西裝外套 (深灰)', type: 'structured', scoreBonus: 30, desc: '【正裝上挺】隨性得體兼具' },
      { id: 'm_top_5', name: '和風抽繩縮口襯衫 (乾燥粉)', type: 'flowy', scoreBonus: 25, desc: '【和風】下班一秒變換束口質感' }
    ],
    bottoms: [
      { id: 'm_bot_1', name: '寬版高腰垂墜西裝褲 (黑色)', type: 'flowy', scoreBonus: 25, desc: '【下飄】垂墜度滿分，完美比例' },
      { id: 'm_bot_2', name: '接觸涼感弧線牛仔褲 (深藍)', type: 'structured', scoreBonus: 20, desc: '【街頭】接觸涼感，冷氣房超爽' },
      { id: 'm_bot_3', name: '過膝六分氣球褲 (麻灰)', type: 'flowy', scoreBonus: 25, desc: '【下飄】掩護膝蓋，對比滿分' },
      { id: 'm_bot_4', name: '混砂折線卡其褲 (米白)', type: 'flowy', scoreBonus: 25, desc: '【下飄】修飾腿型，從容自如' }
    ],
    footwear: [
      { id: 'm_shoe_1', name: '經典黑色樂福皮鞋', scoreBonus: 25, desc: '【正式】得體質感亮點' },
      { id: 'm_shoe_2', name: '復古低筒帆布鞋', scoreBonus: 20, desc: '【休閒】戶外散步必備' },
      { id: 'm_shoe_3', name: '真皮工裝短靴', scoreBonus: 20, desc: '【街頭】個性份量感' }
    ],
    accessories: [
      { id: 'm_acc_1', name: '壓紋皮革極簡隨身包 + 銀色褲鏈', scoreBonus: 25, desc: '【細節】貼心幫拿隨身物品' },
      { id: 'm_acc_2', name: '銀質戒指與金屬鑰匙圈', scoreBonus: 20, desc: '【細節】舉手投足個性彰顯' },
      { id: 'm_acc_3', name: '日系極簡漁夫帽', scoreBonus: 15, desc: '【戶外】防曬又有型' }
    ]
  },
  female: {
    tops: [
      { id: 'f_top_1', name: '落肩學院風大雪紡上衣 (白色)', type: 'flowy', scoreBonus: 25, desc: '【楚楚可憐】遮手臂與小腹' },
      { id: 'f_top_2', name: '刺繡拼接細節薄紗短T', type: 'soft', scoreBonus: 20, desc: '【多層次】零負擔無感疊穿' },
      { id: 'f_top_3', name: '蕾絲滾邊透膚涼感襯衫', type: 'flowy', scoreBonus: 25, desc: '【鎖骨露出】退後扣子超迷人' },
      { id: 'f_top_4', name: '修身落肩西裝外套 + 微光背心', type: 'structured', scoreBonus: 30, desc: '【高級華麗】氣氛燈下閃耀' },
      { id: 'f_top_5', name: '透膚層次壓紋晚宴上衣', type: 'flowy', scoreBonus: 25, desc: '【微醺】低調透膚浪漫氛圍' }
    ],
    bottoms: [
      { id: 'f_bot_1', name: 'A字剪裁抗皺長裙 (黑色)', type: 'flowy', scoreBonus: 25, desc: '【A字】坐下站起防不自然折痕' },
      { id: 'f_bot_2', name: '黑白格紋蕾絲蛋糕裙', type: 'flowy', scoreBonus: 25, desc: '【蛋糕裙】甜酷風格平衡' },
      { id: 'f_bot_3', name: '拼接蕾絲棉質寬褲 (米白)', type: 'flowy', scoreBonus: 20, desc: '【防蚊】野餐草地好活動' },
      { id: 'f_bot_4', name: '高腰俐落剪裁西裝長褲', type: 'structured', scoreBonus: 25, desc: '【高腰】洗練腿長神力' }
    ],
    footwear: [
      { id: 'f_shoe_1', name: '前高後高厚底涼拖鞋', scoreBonus: 25, desc: '【野餐】一秒穿脫超方便' },
      { id: 'f_shoe_2', name: '極簡細帶優雅涼鞋', scoreBonus: 25, desc: '【晚宴】延伸腳背線條' },
      { id: 'f_shoe_3', name: '日系復古瑪莉珍鞋', scoreBonus: 20, desc: '【氣質】可愛文藝感受' }
    ],
    accessories: [
      { id: 'f_acc_1', name: '高腰潮流斜背腰包', scoreBonus: 25, desc: '【比例】腰線拉高 5 公分' },
      { id: 'f_acc_2', name: '日系復古斜背小包', scoreBonus: 20, desc: '【質感】點睛隨身配件' },
      { id: 'f_acc_3', name: '金屬吊飾精緻手鍊', scoreBonus: 20, desc: '【舉杯】酒吧燈光閃爍亮點' }
    ]
  }
};
