/* ==========================================================================
   OOTD 日系約會穿搭指南 - Client Application & P1 UIUX Optimized Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // State Variables
  let currentStage = 'first_date';
  let currentScenario = 'exhibition';
  let currentGender = 'male';
  let fitGender = 'male';
  let userQuizFit = null;

  // DOM References
  const stageBtns = document.querySelectorAll('.stage-btn');
  const scenariosGrid = document.getElementById('scenariosGrid');
  const outfitImg = document.getElementById('outfitImg');
  const hotspotContainer = document.getElementById('hotspotContainer');
  const infoStageBadge = document.getElementById('infoStageBadge');
  const infoTitle = document.getElementById('infoTitle');
  const infoDesc = document.getElementById('infoDesc');
  const genderBtns = document.querySelectorAll('.gender-btn');
  const itemList = document.getElementById('itemList');
  const rulesContainer = document.getElementById('rulesContainer');
  const exportCardBtn = document.getElementById('exportCardBtn');

  // Weather Slider
  const tempSlider = document.getElementById('tempSlider');
  const tempDisplay = document.getElementById('tempDisplay');
  const tempAdvice = document.getElementById('tempAdvice');
  const weatherIcon = document.getElementById('weatherIcon');

  // Fitting Studio Elements
  const fitGenderMale = document.getElementById('fitGenderMale');
  const fitGenderFemale = document.getElementById('fitGenderFemale');
  const selectTop = document.getElementById('selectTop');
  const selectBottom = document.getElementById('selectBottom');
  const selectShoe = document.getElementById('selectShoe');
  const selectAcc = document.getElementById('selectAcc');
  const fitScore = document.getElementById('fitScore');
  const scoreFill = document.getElementById('scoreFill');
  const evalBox = document.getElementById('evalBox');
  const fitSummary = document.getElementById('fitSummary');
  const exportMixCardBtn = document.getElementById('exportMixCardBtn');

  // Radar Tags
  const filterTags = document.querySelectorAll('.filter-tag');

  // Universal Modal Elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  // Top-Right Header Tool 1: Quiz Modal
  const openQuizBtn = document.getElementById('openQuizBtn');
  const quizOverlay = document.getElementById('quizOverlay');
  const quizClose = document.getElementById('quizClose');
  const quizOpts = document.querySelectorAll('.quiz-opt');

  // Top-Right Header Tool 2: AI Stylist Modal
  const openAiStylistBtn = document.getElementById('openAiStylistBtn');
  const floatingAiBtn = document.getElementById('floatingAiBtn');
  const aiStylistOverlay = document.getElementById('aiStylistOverlay');
  const aiStylistClose = document.getElementById('aiStylistClose');
  const chatBox = document.getElementById('chatBox');
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');
  const quickChips = document.querySelectorAll('.quick-chip');

  // Top-Right Header Tool 3: Social Share Modal
  const openShareBtn = document.getElementById('openShareBtn');
  const shareOverlay = document.getElementById('shareOverlay');
  const shareClose = document.getElementById('shareClose');
  const shareCardTitle = document.getElementById('shareCardTitle');
  const shareCardVibe = document.getElementById('shareCardVibe');
  const shareTextPreview = document.getElementById('shareTextPreview');
  const copyShareTextBtn = document.getElementById('copyShareTextBtn');
  const lineShareSimBtn = document.getElementById('lineShareSimBtn');

  // 1. Initialize Stage & Showcase
  initStage(currentStage);
  initFittingStudio(fitGender);
  initWeatherSlider(30);

  // Toast Helper
  function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // Stage Switch Event
  stageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStage = btn.dataset.stage;
      const stageData = outfitDatabase[currentStage];
      currentScenario = Object.keys(stageData.scenarios)[0];
      renderScenarios();
      renderShowcase();
    });
  });

  function initStage(stageKey) {
    currentStage = stageKey;
    const stageData = outfitDatabase[currentStage];
    currentScenario = Object.keys(stageData.scenarios)[0];
    renderScenarios();
    renderShowcase();
  }

  // 2. Render Scenarios Grid
  function renderScenarios() {
    scenariosGrid.innerHTML = '';
    const stageData = outfitDatabase[currentStage];

    Object.values(stageData.scenarios).forEach(sc => {
      const card = document.createElement('div');
      card.className = `scenario-card ${sc.id === currentScenario ? 'active' : ''}`;
      card.dataset.id = sc.id;
      
      card.innerHTML = `
        <div class="scenario-icon">${getScenarioIcon(sc.id)}</div>
        <div class="scenario-name">${sc.name}</div>
        <div class="scenario-vibe">${sc.vibe}</div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.scenario-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        currentScenario = sc.id;
        renderShowcase();
      });

      scenariosGrid.appendChild(card);
    });
  }

  function getScenarioIcon(id) {
    const icons = { exhibition: '🎨', shopping: '🛍️', park: '🌿', dining: '🍷', bar: '🍸' };
    return icons[id] || '✨';
  }

  // 3. Render Outfit Showcase
  function renderShowcase() {
    const scenarioData = outfitDatabase[currentStage].scenarios[currentScenario];
    if (!scenarioData) return;

    infoStageBadge.textContent = outfitDatabase[currentStage].stageName;
    infoTitle.textContent = scenarioData.name;
    infoDesc.textContent = scenarioData.desc;
    outfitImg.src = scenarioData.img;
    outfitImg.alt = scenarioData.name;

    renderHotspots(scenarioData.hotspots);
    renderGenderData(scenarioData);
  }

  function renderHotspots(hotspots) {
    hotspotContainer.innerHTML = '';
    if (!hotspots) return;

    hotspots.forEach((hs, idx) => {
      const spot = document.createElement('div');
      spot.className = 'hotspot';
      spot.style.top = hs.top;
      spot.style.left = hs.left;
      spot.textContent = idx + 1;

      spot.addEventListener('click', () => {
        openModal(`💡 心機細節 #${idx + 1}：${hs.title}`, `
          <p style="font-size: 1.05rem; color: #1c1c1e; margin-bottom: 1rem; font-weight: 500;">${hs.text}</p>
          <div style="background: #f8f6f3; padding: 12px; border-radius: 8px; border-left: 3px solid #6b705c; font-size: 0.88rem; color: #5e5e62;">
            <strong>【老辣妹點評】</strong>：日系穿搭的極致在於「看似隨性，細節滿滿」。這個地方的搭配能瞬間提升整體精緻度！
          </div>
        `);
      });

      hotspotContainer.appendChild(spot);
    });
  }

  // Gender Tab Events
  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      genderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGender = btn.dataset.gender;
      const scenarioData = outfitDatabase[currentStage].scenarios[currentScenario];
      renderGenderData(scenarioData);
    });
  });

  function renderGenderData(scenarioData) {
    const genderData = scenarioData[currentGender];
    if (!genderData) return;

    itemList.innerHTML = '';
    genderData.items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'item-row';

      const isUserBest = userQuizFit && item.fitCode === userQuizFit;
      const badgeHtml = isUserBest ? '<span style="background: #ffd700; color: #1c1c1e; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 0.72rem; margin-right: 6px;">🌟 完美推薦</span>' : '';

      li.innerHTML = `
        <span class="item-name">${badgeHtml}${item.name}</span>
        <span class="item-tag">${item.tag}</span>
      `;

      li.addEventListener('click', () => {
        openModal(`👕 單品細節與選購指南`, `
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #1c1c1e;">${item.name}</h4>
          <p style="color: #6b705c; font-weight: 600; margin-bottom: 1rem;">特色標籤：${item.tag}</p>
          <p style="font-size: 0.95rem; color: #5e5e62; line-height: 1.6;">此單品選用高品質日系剪裁與面料，極適合作為約會行程的重點視效靈感。</p>
        `);
      });
      itemList.appendChild(li);
    });

    rulesContainer.innerHTML = '';
    genderData.rules.forEach(rule => {
      const div = document.createElement('div');
      div.className = 'rule-chip';
      div.innerHTML = `<span>✨</span> <div>${rule}</div>`;
      rulesContainer.appendChild(div);
    });
  }

  // 4. Fitting Studio (自由混搭工作台)
  fitGenderMale.addEventListener('click', () => {
    fitGenderMale.classList.add('active');
    fitGenderFemale.classList.remove('active');
    fitGender = 'male';
    initFittingStudio(fitGender);
  });

  fitGenderFemale.addEventListener('click', () => {
    fitGenderFemale.classList.add('active');
    fitGenderMale.classList.remove('active');
    fitGender = 'female';
    initFittingStudio(fitGender);
  });

  function initFittingStudio(gender) {
    const opts = mixAndMatchOptions[gender];
    populateSelect(selectTop, opts.tops);
    populateSelect(selectBottom, opts.bottoms);
    populateSelect(selectShoe, opts.footwear);
    populateSelect(selectAcc, opts.accessories);

    calculateFittingScore();
  }

  function populateSelect(selectEl, items) {
    selectEl.innerHTML = '';
    items.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = `${item.name} (${item.desc})`;
      selectEl.appendChild(opt);
    });
    selectEl.onchange = calculateFittingScore;
  }

  function calculateFittingScore() {
    const opts = mixAndMatchOptions[fitGender];
    const top = opts.tops.find(i => i.id === selectTop.value) || opts.tops[0];
    const bot = opts.bottoms.find(i => i.id === selectBottom.value) || opts.bottoms[0];
    const shoe = opts.footwear.find(i => i.id === selectShoe.value) || opts.footwear[0];
    const acc = opts.accessories.find(i => i.id === selectAcc.value) || opts.accessories[0];

    let score = top.scoreBonus + bot.scoreBonus + shoe.scoreBonus + acc.scoreBonus;

    let evalMsg = '';
    if (top.type === 'structured' && bot.type === 'flowy') {
      score = Math.min(100, score + 10);
      evalMsg = '✨ 【上挺下飄黃金比例】：結構感上衣 + 垂墜飄逸下裝，完美的日系視覺層次感，得滿分！';
    } else if (top.type === 'flowy' && bot.type === 'structured') {
      evalMsg = '✨ 【A字重塑比例】：垂墜上衣 + 立體剪裁下裝，完美收斂腰腿線條！';
    } else {
      evalMsg = '💡 【平衡搭配】：造型簡約大方，適度運用手錶或配件增加精緻細節！';
    }

    fitScore.textContent = score;
    scoreFill.style.width = `${score}%`;
    evalBox.textContent = evalMsg;

    fitSummary.innerHTML = `
      <div style="font-size: 0.85rem; color: #5e5e62;">
        <strong>已選單品：</strong><br>
        • 上衣：${top.name}<br>
        • 下裝：${bot.name}<br>
        • 鞋款：${shoe.name}<br>
        • 配件：${acc.name}
      </div>
    `;
  }

  // 5. PNG Card Exporter
  exportCardBtn.addEventListener('click', () => exportMagazineCard());
  exportMixCardBtn.addEventListener('click', () => exportMagazineCard(true));

  function exportMagazineCard(isMix = false) {
    const canvas = document.getElementById('exportCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 800;

    // Background
    ctx.fillStyle = '#f8f6f3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border Frame
    ctx.strokeStyle = '#1c1c1e';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Magazine Header
    ctx.fillStyle = '#1c1c1e';
    ctx.font = 'bold 28px "Zen Kaku Gothic New", sans-serif';
    ctx.fillText('OOTD MAGAZINE · 日系約會指南', 40, 70);

    ctx.fillStyle = '#cb997e';
    ctx.font = 'bold 16px sans-serif';
    const scName = isMix ? 'Fitting Studio 混搭專屬提案' : outfitDatabase[currentStage].scenarios[currentScenario].name;
    ctx.fillText(`LOOK 2026 // ${scName}`, 40, 105);

    // Line
    ctx.strokeStyle = '#e5e2dc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 120);
    ctx.lineTo(560, 120);
    ctx.stroke();

    if (!isMix) {
      const scenarioData = outfitDatabase[currentStage].scenarios[currentScenario];
      const gData = scenarioData[currentGender];

      ctx.fillStyle = '#2b2d42';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(`情境：${scenarioData.name}`, 40, 160);

      ctx.fillStyle = '#5e5e62';
      ctx.font = '14px sans-serif';
      ctx.fillText(`氛圍：${scenarioData.vibe}`, 40, 190);

      // Single Items List
      ctx.fillStyle = '#1c1c1e';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('【推薦單品組合】', 40, 230);

      gData.items.forEach((item, idx) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(40, 250 + (idx * 45), 520, 36);
        ctx.strokeStyle = '#e5e2dc';
        ctx.strokeRect(40, 250 + (idx * 45), 520, 36);

        ctx.fillStyle = '#1c1c1e';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(`• ${item.name}`, 55, 273 + (idx * 45));

        ctx.fillStyle = '#6b705c';
        ctx.font = '12px sans-serif';
        ctx.fillText(item.tag, 420, 273 + (idx * 45));
      });

      // Styling Rules Box
      ctx.fillStyle = '#efece6';
      ctx.fillRect(40, 460, 520, 200);
      ctx.fillStyle = '#1c1c1e';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('💡 約會避坑與細節法則', 60, 495);

      gData.rules.forEach((r, idx) => {
        ctx.fillStyle = '#5e5e62';
        ctx.font = '13px sans-serif';
        ctx.fillText(r, 60, 530 + (idx * 35));
      });

    } else {
      const opts = mixAndMatchOptions[fitGender];
      const top = opts.tops.find(i => i.id === selectTop.value) || opts.tops[0];
      const bot = opts.bottoms.find(i => i.id === selectBottom.value) || opts.bottoms[0];
      const shoe = opts.footwear.find(i => i.id === selectShoe.value) || opts.footwear[0];
      const acc = opts.accessories.find(i => i.id === selectAcc.value) || opts.accessories[0];

      ctx.fillStyle = '#2b2d42';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(`黃金比例評分：${fitScore.textContent} 分`, 40, 160);

      ctx.fillStyle = '#1c1c1e';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('【您的客製化混搭清單】', 40, 210);

      const items = [
        { label: '上衣', val: top.name },
        { label: '下裝', val: bot.name },
        { label: '鞋款', val: shoe.name },
        { label: '配件', val: acc.name }
      ];

      items.forEach((it, idx) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(40, 235 + (idx * 55), 520, 44);
        ctx.strokeStyle = '#e5e2dc';
        ctx.strokeRect(40, 235 + (idx * 55), 520, 44);

        ctx.fillStyle = '#cb997e';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(`[${it.label}]`, 55, 262 + (idx * 55));

        ctx.fillStyle = '#1c1c1e';
        ctx.font = '14px sans-serif';
        ctx.fillText(it.val, 120, 262 + (idx * 55));
      });

      ctx.fillStyle = '#efece6';
      ctx.fillRect(40, 480, 520, 180);
      ctx.fillStyle = '#1c1c1e';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('🎯 老辣妹專業短評', 60, 520);

      ctx.fillStyle = '#5e5e62';
      ctx.font = '14px sans-serif';
      ctx.fillText(evalBox.textContent, 60, 555);
    }

    // Footer Branding
    ctx.fillStyle = '#8e8e93';
    ctx.font = '12px sans-serif';
    ctx.fillText('Designed by OOTD Japanese Style Guide © 2026', 40, 755);

    // Download PNG
    const link = document.createElement('a');
    link.download = `OOTD_Date_Card_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('📸 雜誌風 PNG 穿搭卡片下載成功！');
  }

  // 6. Header Button 1: Quiz Modal (身型膚色問卷)
  openQuizBtn.addEventListener('click', () => {
    quizOverlay.classList.add('open');
  });

  quizClose.addEventListener('click', () => quizOverlay.classList.remove('open'));

  quizOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      userQuizFit = opt.dataset.fit;
      quizOverlay.classList.remove('open');
      renderShowcase();

      showToast('🌟 專屬最佳推薦標籤已在單品清單中啟用！');

      openModal('🎉 專屬身型對照已啟用！', `
        <p style="font-size: 1.05rem; color: #1c1c1e; line-height: 1.6;">系統已為您精準標註 <strong>🌟 完美推薦</strong> 徽章！</p>
        <p style="margin-top: 0.75rem; color: #5e5e62; font-size: 0.92rem;">您現在可以瀏覽各個約會場合，右側單品清單將優先顯示契合您身型條件的最佳組合！</p>
      `);
    });
  });

  // 7. Header Button 2: Gemini AI Stylist Modal (Gemini 穿搭顧問)
  openAiStylistBtn.addEventListener('click', () => aiStylistOverlay.classList.add('open'));
  floatingAiBtn.addEventListener('click', () => aiStylistOverlay.classList.add('open'));
  aiStylistClose.addEventListener('click', () => aiStylistOverlay.classList.remove('open'));

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chatInput.value = chip.dataset.prompt;
      handleAiQuery();
    });
  });

  sendChatBtn.addEventListener('click', handleAiQuery);
  chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleAiQuery(); });

  function handleAiQuery() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    addChatMsg(userText, 'user');
    chatInput.value = '';

    setTimeout(() => {
      let botReply = '';
      if (userText.includes('海邊') || userText.includes('沙灘') || userText.includes('淡水')) {
        botReply = '🌊 針對【海風/海邊約會】：建議選擇【亞麻涼感開領襯衫】搭配【前高後高涼拖鞋】，顏色挑選飽和白與明亮藍，既能防曬透氣，又充滿陽光氛圍！破冰話題：「這海風吹起來蠻舒服的，你平常休假喜歡去戶外嗎？」';
      } else if (userText.includes('夜市') || userText.includes('吃')) {
        botReply = '🍡 針對【逛夜市/小吃約會】：重點在於【好走動】與【抗污防皺】！推薦【彈性莫代爾T恤】加上【抗皺長裙/直筒牛仔褲】，鞋子一定要穿舒適鞋款。心機提醒：隨身帶濕紙巾給對方，印象分數直接打滿！';
      } else if (userText.includes('家') || userText.includes('吃飯')) {
        botReply = '🏠 針對【見家長/溫馨聚餐】：重點在於「適度正裝與得體」！男生可穿【短袖古巴領西裝外套 + 卡其褲】，女生可穿【奶茶色落肩西裝外套 + 微光背心】，給人成熟靠譜的好印象。';
      } else {
        botReply = `💡 針對「${userText}」：建議遵守『上挺下飄』的日系黃金法則！上半身選擇俐落落肩剪裁，下半身搭垂墜感褲款/抗皺長裙，配件加上低調細褲鏈或質感隨身包，立刻散發不費力的時髦質感！`;
      }
      addChatMsg(botReply, 'bot');
    }, 500);
  }

  function addChatMsg(text, sender) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // 8. Header Button 3: Social Share Modal (社群約會分享)
  openShareBtn.addEventListener('click', () => {
    const sc = outfitDatabase[currentStage].scenarios[currentScenario];
    shareCardTitle.textContent = `約會情境：${sc.name}`;
    shareCardVibe.textContent = `氛圍：${sc.vibe}`;
    shareTextPreview.textContent = `這週末我們去【${sc.name}】約會，我幫我們挑了這套日系約會穿搭（${sc.vibe}），你看好不好看？✨ 詳情連結：${window.location.href}`;
    shareOverlay.classList.add('open');
  });

  shareClose.addEventListener('click', () => shareOverlay.classList.remove('open'));

  copyShareTextBtn.addEventListener('click', () => {
    const textToCopy = shareTextPreview.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('📋 約會邀約文案已成功複製至剪貼簿！');
    });
  });

  lineShareSimBtn.addEventListener('click', () => {
    showToast('💬 LINE 預覽訊息格式生成完成，可直接傳送！');
  });

  // 9. Weather & Temperature Sync
  tempSlider.addEventListener('input', (e) => {
    const temp = parseInt(e.target.value);
    initWeatherSlider(temp);
  });

  function initWeatherSlider(temp) {
    let desc = '';
    let icon = '☀️';

    if (temp >= 30) {
      icon = '☀️';
      desc = `${temp}°C (酷暑高溫)`;
      tempAdvice.textContent = '🔥 酷暑提醒：強烈推薦選用【接觸涼感】與【亞麻透氣】單品，下裝選擇抗皺布料防止汗水折痕！';
    } else if (temp >= 23) {
      icon = '⛅';
      desc = `${temp}°C (舒適宜人)`;
      tempAdvice.textContent = '🌿 舒適氣候：適合選用【薄紗疊穿】與【開領襯衫】，展現完美日系多層次細節！';
    } else {
      icon = '🌬️';
      desc = `${temp}°C (偏涼降溫)`;
      tempAdvice.textContent = '🧥 涼意提醒：建議選擇【短袖西裝外套 + 內搭微光背心】或【和風縮口襯衫】，兼具保暖與優雅感！';
    }

    weatherIcon.textContent = icon;
    tempDisplay.textContent = desc;
  }

  // 10. Radar Tags Filtering
  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const filterValue = tag.dataset.filter;
      const isAlreadyActive = tag.classList.contains('active');
      filterTags.forEach(t => t.classList.remove('active'));

      if (!isAlreadyActive) {
        tag.classList.add('active');
        handleRadarFilter(filterValue);
      }
    });
  });

  function handleRadarFilter(filterValue) {
    let matches = [];
    Object.values(outfitDatabase).forEach(stage => {
      Object.values(stage.scenarios).forEach(sc => {
        const maleTags = [...sc.male.fabricTags, ...sc.male.bodyFit];
        const femaleTags = [...sc.female.fabricTags, ...sc.female.bodyFit];
        if (maleTags.includes(filterValue) || femaleTags.includes(filterValue)) {
          matches.push(sc.name);
        }
      });
    });

    openModal(`🎯 身型 / 材質匹配推薦：${filterValue}`, `
      <p style="font-size: 1rem; color: #1c1c1e; margin-bottom: 1rem;">符合「<strong>${filterValue}</strong>」需求的建議約會穿搭情境包括：</p>
      <ul style="list-style-type: square; padding-left: 1.5rem; color: #2b2d42; font-size: 0.95rem; line-height: 1.8;">
        ${matches.map(m => `<li><strong>${m}</strong></li>`).join('')}
      </ul>
    `);
  }

  // Universal Modal Helpers
  function openModal(title, contentHtml) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('open');
  }

  // Global Backdrop Click & Keyboard ESC Listener for Modals
  const overlays = [modalOverlay, aiStylistOverlay, quizOverlay, shareOverlay];
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  modalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => overlay.classList.remove('open'));
    }
  });

  // 11. Service Worker & PWA Auto-Update Detection
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';

  if ('serviceWorker' in navigator) {
    if (isLocalhost) {
      // Unregister Service Worker in local dev environment to avoid HMR / caching conflicts
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    } else {
      // Register Service Worker in production environment
      navigator.serviceWorker.register('./sw.js').then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) return;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                showSwUpdateToast(registration);
              }
            }
          };
        };
      }).catch(err => {
        console.log('ServiceWorker registration error:', err);
      });

      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  }

  function showSwUpdateToast(registration) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast update-toast';
    toast.style.background = '#2b2d42';
    toast.style.border = '1px solid #4a4d68';

    toast.innerHTML = `
      <span>🚀 發現網站發布了新版本！</span>
      <button id="reloadSwBtn" style="background: #cb997e; color: #fff; border: none; padding: 4px 12px; border-radius: 999px; font-weight: 700; font-size: 0.8rem; margin-left: 8px; cursor: pointer;">
        點擊重新載入最新版
      </button>
    `;
    container.appendChild(toast);

    document.getElementById('reloadSwBtn').addEventListener('click', () => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    });
  }
});
