let appLang = 'en';

window.changeLang = function(lang) {
    appLang = lang;
    renderStage(currentStageIndex);
};

// Fallback proxy for translations
const rawT = {
    // Stage 1
    welcomeTitle: { hi: "नमस्ते<br>अपना स्कोर बनाएं", en: "Welcome<br>Build Your Score", ta: "வரவேற்கிறோம்<br>மதிப்பீட்டை உருவாக்கவும்", te: "స్వాగతం<br>మీ స్కోర్‌ను నిర్మించండి", kn: "ಸ್ವಾಗತ<br>ನಿಮ್ಮ ಸ್ಕೋರ್ ನಿರ್ಮಿಸಿ" },
    welcomeSub: { hi: "भाषा चुनें / Choose Language", en: "Choose Language / भाषा चुनें", ta: "மொழியைத் தேர்ந்தெடுக்கவும்", te: "భాషను ఎంచుకోండి", kn: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ" },
    hiBtn: { hi: "हिंदी", en: "हिंदी" },
    enBtn: { hi: "English", en: "English" },
    taBtn: { hi: "தமிழ்", en: "தமிழ்", ta: "தமிழ்" },
    teBtn: { hi: "తెలుగు", en: "తెలుగు", te: "తెలుగు" },
    knBtn: { hi: "ಕನ್ನಡ", en: "ಕನ್ನಡ", kn: "ಕನ್ನಡ" },
    voiceActive: { hi: "वॉयस गाइडेंस सक्रिय", en: "Voice Guidance Active", ta: "குரல் வழிகாட்டுதல்", te: "వాయిస్ గైడెన్స్", kn: "ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ" },

    // DB Stage
    memberDb: { en: "Member Database", hi: "सदस्य डेटाबेस", ta: "உறுப்பினர் தரவுத்தளம்", te: "సభ్యుల డేటాబేస్", kn: "ಸದಸ್ಯರ ಡೇಟಾಬೇಸ್" },
    addMember: { en: "Add Member", hi: "सदस्य जोड़ें", ta: "உறுப்பினரைச் சேர்", te: "సభ్యుడిని చేర్చండి", kn: "ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ" },
    scoreTxt: { en: "SCORE", hi: "स्कोर", ta: "மதிப்பெண்", te: "స్కోర్", kn: "ಸ್ಕೋರ್" },
    profileTxt: { en: "Profile", hi: "प्रोफ़ाइल", ta: "சுயவிவரம்", te: "ప్రొఫైల్", kn: "ಪ್ರೊಫೈಲ್" },
    closeTxt: { en: "Close", hi: "बंद करें", ta: "மூடு", te: "మూసివేయు", kn: "ಮುಚ್ಚಿ" },

    // Stage 2 & 3
    fpInstruct: { hi: "अपना अंगूठा यहाँ रखें", en: "Place Your Thumb Here" },
    fpWait: { hi: "पहचान सत्यापित हो रही है...", en: "VERIFYING IDENTITY..." },
    fpStored: { hi: "पहचान सुरक्षित और सत्यापित", en: "IDENTITY STORED & VERIFIED" },
    docInstruct: { hi: "बिजली बिल यहाँ अपलोड करें", en: "Upload Electricity Bill Here" },
    docSuccess: { hi: "भुगतान इतिहास सत्यापित", en: "PAYMENT HISTORY VERIFIED" },
    docWait: { hi: "सत्यापन...", en: "VERIFYING..." },
    signedIn: { hi: "साइन इन: प्रिया शर्मा", en: "SIGNED IN: PRIYA S." },

    // Stage 4
    nfcInstruct: { hi: "अपना आधार कार्ड यहाँ रखें", en: "Place Aadhaar Card Here" },
    nfcWait: { hi: "चिप पढ़ी जा रही है...", en: "READING SECURE CHIP..." },
    nfcSuccess: { hi: "जनसांख्यिकीय डेटा सुरक्षित", en: "DEMOGRAPHIC DATA SECURED" },

    // Stage 5
    voiceInstruct: { hi: "प्रश्नों के उत्तर दें", en: "Answer the questions" },
    vQ1: { hi: "Q: लोन किस चीज़ के लिए चाहिए?", en: "Q: What do you need the loan for?" },
    vA1: { hi: "A: सिलाई मशीन खरीदनी है", en: "A: To buy a sewing machine" },
    vQ2: { hi: "Q: लोन कितने समय में वापस करेंगी?", en: "Q: In how long will you repay?" },
    vA2: { hi: "A: एक साल में", en: "A: In one year" },
    vComplete: { hi: "व्यवहार मूल्यांकन पूर्ण", en: "BEHAVIORAL ASSESSMENT COMPLETE" },
    vWait: { hi: "सुन रहा हूँ...", en: "LISTENING..." },

    // Stage 6
    opInstruct: { hi: "ऑपरेटर का अंगूठा चाहिए", en: "Operator Thumbprint Needed" },
    opWait: { hi: "सत्यापन...", en: "OPERATOR VOUCHING..." },
    opSuccess: { hi: "सामुदायिक वाउचिंग की पुष्टि", en: "COMMUNITY VOUCHING CONFIRMED" },

    // Stage 7
    syncTitle: { hi: "पैकेट एन्क्रिप्ट हो रहा है", en: "ENCRYPTING PACKET" },
    syncText: { hi: "सुरक्षित लाइन द्वारा अपलोड", en: "UPLOADING VIA SECURE TUNNEL" },
    syncDone: { hi: "डेटा सुरक्षित रूप से भेजा गया", en: "DATA SENT SECURELY" },
    syncProc: { hi: "आपके स्कोर की गणना हो रही है", en: "PROCESSING YOUR TRUSTSCORE" },

    // Stage 8
    aiWait: { hi: "कृपया प्रतीक्षा करें", en: "PLEASE WAIT" },

    // Stage 9
    scoreGood: { hi: "अच्छी स्थिति", en: "GOOD STANDING" },
    scoreAvail: { hi: "आपके लिए लोन उपलब्ध है", en: "LOAN IS AVAILABLE FOR YOU" },
    
    // Stage 10
    printWait: { hi: "आपका सर्टिफिकेट प्रिंट हो रहा है", en: "YOUR CERTIFICATE IS PRINTING" },
    printDispense: { hi: "नीचे प्राप्त करें...", en: "DISPENSING BELOW..." },

    // Stage 11
    endThanks: { hi: "धन्यवाद !", en: "THANK YOU !" },
    endMsg: { hi: "वित्तीय समावेशन पूर्ण।", en: "Financial Inclusion Complete." }
};

const t = new Proxy(rawT, {
    get: function(target, prop) {
        if (!target[prop]) return new Proxy({}, { get: () => prop });
        return new Proxy(target[prop], {
            get: function(subTarget, subProp) {
                return subTarget[subProp] || subTarget['en'] || "Text";
            }
        });
    }
});

window.formatCustomDate = function(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}:${month}:${year}`;
};

window.computeMemberMetrics = function(totalSpent, joinDate) {
    const jd = new Date(joinDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
    const cd = new Date();
    
    // Use Math.ceil to avoid 0 days for new registrations
    const daysActive = Math.max(1, Math.ceil((cd - jd) / (1000 * 60 * 60 * 24)));
    
    // PREDICTION RIG: If they joined less than 30 days ago, project their monthly spend
    // based on their daily average. If older, use the actual monthly average.
    let avgSpend;
    if (daysActive < 30) {
        // Project: (Total / Days) * 30.4
        avgSpend = Math.round((totalSpent / daysActive) * 30.4);
    } else {
        const monthsActive = daysActive / 30.4;
        avgSpend = Math.round(totalSpent / monthsActive);
    }
    
    // Core Math Module Computations for Score
    // Using log-based growth for financial bonus to feel more realistic
    const activityBonus = Math.min(daysActive * 0.5, 120); 
    const financialBonus = Math.min(Math.log10(avgSpend || 1) * 150, 550);
    
    let score = Math.floor(280 + activityBonus + financialBonus);
    if(score > 900) score = 900;
    
    const docsUploaded = Math.floor(totalSpent / 850) + (daysActive < 10 ? 1 : 0);

    // Dynamic Breakdown Generation
    const docBreakdown = [
        { type: "Electricity Bills", count: Math.ceil(docsUploaded * 0.4), val: Math.round(totalSpent * 0.45) },
        { type: "Water Bills", count: Math.ceil(docsUploaded * 0.2), val: Math.round(totalSpent * 0.15) },
        { type: "Gas/Utility", count: Math.ceil(docsUploaded * 0.2), val: Math.round(totalSpent * 0.25) },
        { type: "Mobile/Internet", count: Math.ceil(docsUploaded * 0.2), val: Math.round(totalSpent * 0.15) }
    ];

    return { daysActive, avgSpend, score, docsUploaded, totalSpent, jd, joinDate, docBreakdown };
};

window.openProfile = function(name, totalSpent, color, joinDate) {
    const ks = document.getElementById('kiosk-screen');
    ks.innerHTML = `
        <div class="kiosk-fingerprint w-full h-full fade-in" style="justify-content: center;">
            <button onclick="renderStage(currentStageIndex)" style="position:absolute; top:1rem; left:1rem; background:none; border:none; color:white; cursor:pointer; font-size:1rem;"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <h2 class="hindi-text mb-4 text-xl">Authenticate: ${name}</h2>
            <div class="fp-ring scanning" id="mem-fp-ring">
                <i class="fa-solid fa-fingerprint fp-icon" style="color: ${color}"></i>
            </div>
            <div class="status-text text-primary text-sm" id="mem-fp-text">Place thumb to verify...</div>
        </div>
    `;

    setTimeout(() => {
        const ring = document.getElementById('mem-fp-ring');
        if(ring) ring.classList.replace('scanning', 'success');
        const txt = document.getElementById('mem-fp-text');
        if(txt) {
            txt.innerHTML = `<i class="fa-solid fa-check"></i> Identity Verified`;
            txt.classList.replace('text-primary', 'text-accent');
        }
        
        setTimeout(() => {
            showMemberDash(name, totalSpent, color, joinDate);
        }, 1500);
    }, 2000);
};

window.showMemberDash = function(name, totalSpent, color, joinDate) {
    const ks = document.getElementById('kiosk-screen');
    if(!ks) return;

    const meta = computeMemberMetrics(totalSpent, joinDate);
    const score = meta.score;
    const daysActive = meta.daysActive;

    let rating = "POOR";
    let ratingColor = "#ef4444";
    
    if(daysActive < 10) {
        rating = score > 300 ? "GOOD PROGRESS" : "NEWBIE";
        ratingColor = score > 300 ? "#10b981" : "#f59e0b";
    } else if (daysActive < 60) {
        if(score > 600) rating = "EXCELLENT";
        else if (score > 400) rating = "GOOD PROGRESS";
        else rating = "MEDIUM";
        ratingColor = score > 600 ? "#10b981" : (score > 400 ? "#3b82f6" : "#f59e0b");
    } else {
        if(score > 750) { rating = "EXCELLENT"; ratingColor = "#10b981"; }
        else if(score > 500) { rating = "GOOD"; ratingColor = "#3b82f6"; }
        else if(score > 350) { rating = "MEDIUM"; ratingColor = "#f59e0b"; }
        else { rating = "BAD"; ratingColor = "#ef4444"; }
    }

    ks.innerHTML = `
        <div class="w-full h-full p-4 fade-in" style="background: #0b0f19; display: flex; flex-direction: column; justify-content: center; align-items: center; position:relative;">
            <button onclick="renderStage(currentStageIndex)" style="position:absolute; top:1rem; left:1rem; background:none; border:none; color:white; cursor:pointer; font-size:1rem;"><i class="fa-solid fa-arrow-left"></i> Back</button>
            
            <div class="profile-photo mb-2" style="border-color:${color}; color:${color}">
                <i class="fa-solid fa-user"></i>
            </div>
            <h3 class="text-white text-xl font-space">${name}</h3>
            
            <div style="display:flex; justify-content:space-around; width:100%; margin: 1rem 0;">
                <div class="text-center">
                    <div class="text-xs text-muted">SCORE</div>
                    <div class="text-lg font-space" id="dynamic-score" style="color:${color}">${score}</div>
                </div>
                <div class="text-center">
                    <div class="text-xs text-muted">STATUS</div>
                    <div class="text-sm font-space mt-1" style="color:${ratingColor}; background:rgba(255,255,255,0.05); padding: 2px 8px; border-radius:4px;">${rating}</div>
                </div>
                <div class="text-center">
                    <div class="text-xs text-muted">ACTIVE DAYS</div>
                    <div class="text-lg font-space text-white">${daysActive}d</div>
                </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 80%;">
                <button class="kiosk-lang-btn text-left" style="padding-left:1.5rem;" onclick="openMemberScore('${totalSpent}', '${color}', '${name}', '${joinDate}')"><i class="fa-solid fa-chart-pie mr-2"></i> Check Score Points</button>
                <button class="kiosk-lang-btn text-left" style="padding-left:1.5rem;" onclick="openMemberUpload('${name}', '${totalSpent}', '${color}', '${joinDate}')"><i class="fa-solid fa-file-arrow-up mr-2"></i> Upload Documents</button>
                <button class="kiosk-lang-btn text-left" style="padding-left:1.5rem;" onclick="openMemberPrint('${name}', '${totalSpent}', '${color}', '${joinDate}')"><i class="fa-solid fa-print mr-2"></i> Print Certificate</button>
            </div>
        </div>
    `;
};

window.openMemberScore = function(totalSpent, color, name, joinDate) {
    const ks = document.getElementById('kiosk-screen');
    const meta = computeMemberMetrics(totalSpent, joinDate);

    ks.innerHTML = `
        <div class="kiosk-score fade-in" style="position:relative;">
            <button onclick="showMemberDash('${name}', '${totalSpent}', '${color}', '${joinDate}')" style="position:absolute; top:1rem; left:1rem; background:none; border:none; color:white; cursor:pointer; font-size:1rem;"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <div class="score-dial text-accent" style="--accent: ${color};">
                <div class="dial-inner">
                    <div class="dial-number" id="mem-final-score" style="color: ${color}">0</div>
                    <div class="dial-max">/900</div>
                </div>
            </div>
            <div class="text-white font-space mt-2">Current TrustScore</div>
            <div class="text-muted text-sm mt-2 text-center" style="max-width:80%">Upload more documents or verify bills to gradually increase your score.</div>
        </div>
    `;
    setTimeout(() => {
        const scoreEl = document.getElementById('mem-final-score');
        if(!scoreEl) return;
        let c = 0;
        let target = meta.score;
        let int = setInterval(()=>{
            c += Math.ceil(target/15);
            if(c >= target) { clearInterval(int); scoreEl.innerText = target; }
            else scoreEl.innerText = c;
        }, 40);
    }, 100);
}

window.openMemberUpload = function(name, totalSpent, color, joinDate) {
    const ks = document.getElementById('kiosk-screen');
    ks.innerHTML = `
        <div class="kiosk-ocr fade-in" style="position:relative;">
            <button onclick="showMemberDash('${name}', '${totalSpent}', '${color}', '${joinDate}')" style="position:absolute; top:1rem; left:1rem; background:none; border:none; color:white; cursor:pointer; font-size:1rem;"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <h2 class="text-white mb-4 text-lg">Upload Alternative Data (e.g. Utility Bill)</h2>
            <div class="doc-scan-area">
                <i class="fa-solid fa-file-invoice text-4xl text-muted opacity-50"></i>
                <div class="scan-laser" id="mem-scan-laser"></div>
            </div>
            <div class="status-text text-primary text-sm mt-md" id="mem-ocr-status">SCANNING DOCUMENT...</div>
        </div>
    `;
    
    setTimeout(() => {
        const statusEl = document.getElementById('mem-ocr-status');
        if(statusEl) {
            statusEl.innerHTML = `<i class="fa-solid fa-check"></i> Verified. Score Increased!`;
            statusEl.classList.replace('text-primary', 'text-accent');
        }
        const laser = document.getElementById('mem-scan-laser');
        if(laser) laser.style.display = 'none';
        
        let newTotalSpent = parseInt(totalSpent) + 2100; // Mock addition of utility bill doc verification
        setTimeout(() => {
            let nMeta = computeMemberMetrics(newTotalSpent, joinDate);
            let newColor = nMeta.score > 700 ? '#10b981' : (nMeta.score > 400 ? '#3b82f6' : '#f59e0b');
            showMemberDash(name, newTotalSpent, newColor, joinDate);
        }, 2000);
    }, 2500);
}

window.openMemberPrint = function(name, totalSpent, color, joinDate) {
    const meta = computeMemberMetrics(totalSpent, joinDate);
    
    let eligibility = "Up to ₹15,000";
    let standing = "POOR STANDING";
    if (meta.score > 700) { eligibility = "Up to ₹1,50,000"; standing = "EXCELLENT STANDING"; }
    else if (meta.score > 400) { eligibility = "Up to ₹50,000"; standing = "GOOD PROGRESS"; }
    else if (meta.daysActive < 15) { eligibility = "Up to ₹10,000 (Newbie)"; standing = "BUILDING PROFILE"; }

    const ks = document.getElementById('kiosk-screen');
    ks.innerHTML = `
        <div class="kiosk-print fade-in" style="position:relative;">
            <button onclick="showMemberDash('${name}', '${totalSpent}', '${color}', '${joinDate}')" style="position:absolute; top:1rem; left:1rem; background:none; border:none; color:white; cursor:pointer; font-size:1rem;"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <i class="fa-solid fa-print fa-4x text-primary mb-4" style="animation: pulse-border 1.5s infinite;"></i>
            <h2 class="text-white mb-4 text-xl">Printing Certificate...</h2>
        </div>
    `;
    
    setTimeout(() => {
        const pn = document.querySelector('.cert-name');
        const ps = document.querySelector('.cert-score');
        if(pn) pn.innerText = name;
        if(ps) ps.innerText = meta.score;
        
        const dtEl = document.getElementById('print-cert-date');
        if(dtEl) dtEl.innerText = formatCustomDate(meta.jd);
        
        const docEl = document.getElementById('print-cert-docs');
        if(docEl) docEl.innerText = meta.docsUploaded.toString();
        
        const stEl = document.getElementById('print-cert-status');
        if(stEl) stEl.innerText = standing;
        
        const totEl = document.getElementById('print-cert-total');
        if(totEl) totEl.innerText = '₹' + meta.totalSpent.toLocaleString('en-IN');
        
        const avgEl = document.getElementById('print-cert-avg');
        if(avgEl) avgEl.innerText = '₹' + meta.avgSpend.toLocaleString('en-IN');
        
        const loanEl = document.getElementById('print-cert-loan');
        if(loanEl) loanEl.innerText = eligibility;

        // Breakdown Population
        const listEl = document.getElementById('doc-breakdown-list');
        if(listEl) {
            listEl.innerHTML = meta.docBreakdown.map(d => `
                <div class="doc-item">
                    <span class="doc-type">${d.type}</span>
                    <span class="doc-count">(${d.count} files)</span>
                    <span class="doc-val">₹${d.val.toLocaleString('en-IN')}</span>
                </div>
            `).join('');
        }

        const out = document.querySelector('.certificate-output');
        if(out) out.classList.add('printing');
    }, 500);
}

const stages = [
    {
        id: 1,
        title: "Arrival at TrustPoint",
        time: "2 mins",
        desc: "Priya, a rural woman with no smartphone, bank account, or credit history, visits her local Common Service Centre. She brings her electricity bill and Aadhaar card.",
        tech: [
            "User interface dynamically matches local language preference.",
            "Voice guidance enabled for low literacy accessibility."
        ],
        hwModule: null,
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-welcome">
                    <i class="fa-solid fa-hands-holding-circle fa-4x mb-4 text-primary"></i>
                    <h2 class="hindi-text mb-2 text-primary">${t.welcomeTitle[appLang]}</h2>
                    <p class="text-white text-sm uppercase tracking-wide mt-md border border-gray-700 px-4 py-2 rounded-full">${t.welcomeSub[appLang]}</p>
                    
                    <div class="lang-selector" style="flex-wrap: wrap; margin-top: 1.5rem; justify-content: center;">
                        <button class="kiosk-lang-btn ${appLang === 'en' ? 'active' : ''}" onclick="changeLang('en')">${t.enBtn[appLang]}</button>
                        <button class="kiosk-lang-btn ${appLang === 'hi' ? 'active' : ''}" onclick="changeLang('hi')">${t.hiBtn[appLang]}</button>
                        <button class="kiosk-lang-btn ${appLang === 'ta' ? 'active' : ''}" onclick="changeLang('ta')">${t.taBtn[appLang]}</button>
                        <button class="kiosk-lang-btn ${appLang === 'te' ? 'active' : ''}" onclick="changeLang('te')">${t.teBtn[appLang]}</button>
                        <button class="kiosk-lang-btn ${appLang === 'kn' ? 'active' : ''}" onclick="changeLang('kn')">${t.knBtn[appLang]}</button>
                    </div>

                    <div class="mt-lg text-muted text-sm"><i class="fa-solid fa-volume-high"></i> ${t.voiceActive[appLang]}</div>
                </div>
            `;
        }
    },
    {
        id: "db",
        title: "Member Database Access",
        time: "1 min",
        desc: "The CSC Operator views the local TrustScore database. They can access profiles of existing verified members or add a new unbanked member. For Priya's demo, they select 'Add Member'.",
        tech: [
            "Local decentralized database node view.",
            "Visualized trust metrics for operator dashboard."
        ],
        hwModule: null,
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-database">
                    <div class="db-header">
                        <div class="db-title"><i class="fa-solid fa-users text-primary"></i> ${t.memberDb[appLang]}</div>
                        <button class="btn-add-member" onclick="document.getElementById('btn-next').click()">
                            <i class="fa-solid fa-plus"></i> ${t.addMember[appLang]}
                        </button>
                    </div>
                    
                    <div class="db-grid">
                        <div class="db-card" onclick="openProfile('Rahul Kumar', '1500', '#f59e0b', '${new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}')">
                            <div class="db-avatar" style="border: 2px solid #f59e0b; color: #f59e0b"><i class="fa-solid fa-user"></i></div>
                            <div class="db-info">
                                <div class="db-name">Rahul Kumar</div>
                                <div class="db-score text-warning" id="live-sc-1">Pts Loading</div>
                            </div>
                        </div>
                        <div class="db-card" onclick="openProfile('Anjali Gupta', '9800', '#3b82f6', '${new Date(Date.now() - 80 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}')">
                            <div class="db-avatar" style="border: 2px solid #3b82f6; color: #3b82f6"><i class="fa-solid fa-user"></i></div>
                            <div class="db-info">
                                <div class="db-name">Anjali Gupta</div>
                                <div class="db-score text-primary" id="live-sc-2">Pts Loading</div>
                            </div>
                        </div>
                        <div class="db-card" onclick="openProfile('Sunil Das', '200', '#ef4444', '${new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}')">
                            <div class="db-avatar" style="border: 2px solid #ef4444; color: #ef4444"><i class="fa-solid fa-user"></i></div>
                            <div class="db-info">
                                <div class="db-name">Sunil Das</div>
                                <div class="db-score" style="color:#ef4444" id="live-sc-3">Pts Loading</div>
                            </div>
                        </div>
                        <div class="db-card" onclick="openProfile('Meena Devi', '4500', '#10b981', '${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}')">
                            <div class="db-avatar" style="border: 2px solid #10b981; color: #10b981"><i class="fa-solid fa-user"></i></div>
                            <div class="db-info">
                                <div class="db-name">Meena Devi</div>
                                <div class="db-score text-accent" id="live-sc-4">Pts Loading <span style="font-size:0.6rem;opacity:0.7">(New)</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            setTimeout(() => {
                document.getElementById('live-sc-1').innerHTML = t.scoreTxt[appLang] + " " + computeMemberMetrics(1500, new Date(Date.now() - 45 * 86400000)).score;
                document.getElementById('live-sc-2').innerHTML = t.scoreTxt[appLang] + " " + computeMemberMetrics(9800, new Date(Date.now() - 80 * 86400000)).score;
                document.getElementById('live-sc-3').innerHTML = t.scoreTxt[appLang] + " " + computeMemberMetrics(200, new Date(Date.now() - 150 * 86400000)).score;
                document.getElementById('live-sc-4').innerHTML = t.scoreTxt[appLang] + " " + computeMemberMetrics(4500, new Date(Date.now() - 7 * 86400000)).score + ` <span style="font-size:0.6rem;opacity:0.7">(New)</span>`;
            }, 50);
        }
    },
    {
        id: 2,
        title: "Identity Verification & Sign In",
        time: "15 secs",
        desc: "Priya places her right thumb on the circular fingerprint scanner pad. Her biometric template is verified, bringing up her securely stored government profile/picture to log her into the session.",
        tech: [
            "Live encrypted API connection to UIDAI database.",
            "Retrieves visual profile representation automatically.",
            "Confirms true existence and authenticates the active session securely."
        ],
        hwModule: "hw-fingerprint",
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-fingerprint">
                    <h2 class="hindi-text mb-4">${t.fpInstruct[appLang]}</h2>
                    <div class="fp-ring scanning" id="device-fp-ring">
                        <i class="fa-solid fa-fingerprint fp-icon"></i>
                    </div>
                    <div class="status-text text-primary" id="device-fp-text">${t.fpWait[appLang]}</div>
                </div>
            `;
            setTimeout(() => {
                const ring = document.getElementById('device-fp-ring');
                const text = document.getElementById('device-fp-text');
                if(ring && text) {
                    ring.classList.replace('scanning', 'success');
                    ring.style.display = 'none'; // hide ring to show avatar
                    text.classList.replace('text-primary', 'text-accent');
                    text.innerHTML = `
                        <div class="profile-auth-container fade-in">
                            <div class="profile-photo">
                                <i class="fa-solid fa-user"></i>
                                <div class="auth-badge"><i class="fa-solid fa-check"></i></div>
                            </div>
                            <div class="mt-2 text-white font-space">PRIYA SHARMA<br><span class="text-xs text-accent">${t.fpStored[appLang]}</span></div>
                        </div>
                    `;
                }
            }, 2500);
        }
    },
    {
        id: 3,
        title: "Document Upload & Verification",
        time: "3 mins",
        desc: "Now successfully signed in, Priya proves her financial history. She uploads her electricity bill onto the scanner. The OCR extracts the account number and verifies 11 years of payments.",
        tech: [
            "Verifies session against fetched Aadhaar photo profile.",
            "Bright white LED scan line for even item illumination.",
            "Verification API pull: 11 years / 132 individual exact payment records matched."
        ],
        hwModule: "hw-scanner",
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-ocr">
                    <div class="text-sm font-space text-accent flex items-center gap-2 mb-4" style="background: rgba(16,185,129,0.1); padding: 0.5rem 1rem; border-radius: 50px;">
                        <i class="fa-solid fa-user-check"></i> ${t.signedIn[appLang]}
                    </div>
                    <h2 class="hindi-text mb-4 text-xl">${t.docInstruct[appLang]}</h2>
                    <div class="doc-scan-area">
                        <i class="fa-solid fa-file-invoice text-4xl text-muted opacity-50"></i>
                        <div class="scan-laser"></div>
                        <div class="live-text" id="live-txt" style="top:20px;">EXTRACTING: Acct #884920...</div>
                        <div class="live-text" id="live-txt2" style="top:50px;">EXTRACTING: Amt Rs 450...</div>
                        <div class="live-text" id="live-txt3" style="top:80px;">API: STATE UTILITY DB...</div>
                    </div>
                    <div class="status-text text-primary text-sm mt-md" id="ocr-status">${t.docWait[appLang]}</div>
                    <div class="ocr-stats" id="ocr-stats" style="opacity:0; transition: opacity 1s;">
                        <div class="stat-box">11 YRS</div>
                        <div class="stat-box">132 PAYMENTS</div>
                        <div class="stat-box">0 MISSED</div>
                    </div>
                </div>
            `;
            
            setTimeout(()=> { if(document.getElementById('live-txt')) document.getElementById('live-txt').style.opacity = 1; }, 500);
            setTimeout(()=> { if(document.getElementById('live-txt2')) document.getElementById('live-txt2').style.opacity = 1; }, 1000);
            setTimeout(()=> { if(document.getElementById('live-txt3')) document.getElementById('live-txt3').style.opacity = 1; }, 1500);
            
            setTimeout(() => {
                const status = document.getElementById('ocr-status');
                const stats = document.getElementById('ocr-stats');
                if(status && stats) {
                    status.innerHTML = `<i class="fa-solid fa-check"></i> ${t.docSuccess[appLang]}`;
                    status.classList.replace('text-primary', 'text-accent');
                    stats.style.opacity = 1;
                    const laser = document.querySelector('.scan-laser');
                    if(laser) laser.style.display = 'none';
                }
            }, 3000);
        }
    },
    {
        id: 4,
        title: "NFC Data Reading",
        time: "30 secs",
        desc: "Priya taps her Aadhaar card on the NFC reader. It securely reads stored address history and demographic details directly from the chip.",
        tech: [
            "Wireless communication with secure element chip.",
            "Cross-references address data with electricity bill.",
            "Smart-meter integration ready if available."
        ],
        hwModule: "hw-nfc",
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-nfc">
                    <h2 class="hindi-text mb-4 text-xl">${t.nfcInstruct[appLang]}</h2>
                    <i class="fa-brands fa-nfc-symbol fa-4x text-primary mb-4" id="nfc-icon" style="animation: pulse-border 1.5s infinite;"></i>
                    <div class="status-text text-primary text-sm" id="nfc-status">${t.nfcWait[appLang]}</div>
                </div>
            `;
            setTimeout(() => {
                const icon = document.getElementById('nfc-icon');
                const status = document.getElementById('nfc-status');
                if(icon && status) {
                    icon.style.animation = 'none';
                    icon.classList.replace('text-primary', 'text-accent');
                    status.innerHTML = `<i class="fa-solid fa-lock mr-2"></i> ${t.nfcSuccess[appLang]}`;
                    status.classList.replace('text-primary', 'text-accent');
                }
            }, 2000);
        }
    },
    {
        id: 5,
        title: "Voice Assessment AI",
        time: "5 mins",
        desc: "The device asks 8 simple questions. Priya speaks naturally. Voice recognition transcribes and NLP evaluates her financial capability and intent.",
        tech: [
            "Real-time Audio-to-Text transcription.",
            "NLP extraction models measure: financial goal clarity, repayment timeline realism.",
            "Generates behavioral psychometric score."
        ],
        hwModule: "hw-voice",
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-voice" style="padding-top:1rem;">
                    <div class="mic-pulse">
                        <i class="fa-solid fa-microphone mic-icon"></i>
                        <div class="mic-waves"></div>
                    </div>
                    <div class="transcript-box">
                        <div class="transcript-q" id="vq">${t.voiceInstruct[appLang]}</div>
                        <div class="transcript-a" id="va">...</div>
                    </div>
                    <div class="status-text text-warning mt-4 text-sm" id="v-status">${t.vWait[appLang]}</div>
                </div>
            `;
            
            setTimeout(() => {
                const vq = document.getElementById('vq');
                const va = document.getElementById('va');
                if(vq && va) {
                    vq.innerText = t.vQ1[appLang];
                    va.innerHTML = t.vA1[appLang];
                    
                    setTimeout(() => {
                        vq.innerText = t.vQ2[appLang];
                        va.innerHTML = t.vA2[appLang];
                        
                        setTimeout(() => {
                            document.getElementById('v-status').innerHTML = `<i class='fa-solid fa-check'></i> ${t.vComplete[appLang]}`;
                            document.getElementById('v-status').classList.replace('text-warning', 'text-accent');
                            document.querySelector('.mic-waves').style.display = 'none';
                        }, 2500);
                    }, 2500);
                }
            }, 1000);
        }
    },
    {
        id: 6,
        title: "Community Vouching",
        time: "30 secs",
        desc: "The CSC operator who personally knows Priya places their registered thumb on the scanner. This creates an accountable, biometrically linked community endorsement.",
        tech: [
            "Operator biometric profile validation.",
            "Accountability score linkage (false vouching hurts operator reputation).",
            "Creates massive social trust weight."
        ],
        hwModule: "hw-fingerprint",
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-fingerprint">
                    <h2 class="hindi-text mb-4 text-xl">${t.opInstruct[appLang]}</h2>
                    <div class="fp-ring scanning" id="op-fp-ring">
                        <i class="fa-solid fa-fingerprint fp-icon text-warning" style="color: var(--warning)"></i>
                    </div>
                    <div class="status-text text-warning text-sm" id="op-fp-text">${t.opWait[appLang]}</div>
                </div>
            `;
            setTimeout(() => {
                const ring = document.getElementById('op-fp-ring');
                const text = document.getElementById('op-fp-text');
                if(ring && text) {
                    ring.classList.remove('scanning');
                    ring.classList.add('success');
                    text.classList.remove('text-warning');
                    text.classList.add('text-accent');
                    text.innerHTML = `<i class="fa-solid fa-handshake"></i> ${t.opSuccess[appLang]}<br><span class="text-xs text-white mt-1 block">OPERATOR ID: CSC-MH-004</span>`;
                }
            }, 2000);
        }
    },
    {
        id: 7,
        title: "Secure Transmission",
        time: "1 min",
        desc: "All collected data is packaged and encrypted using AES-256. It is sent via the built-in 4G SIM to the TrustScore cloud for processing.",
        tech: [
            "Bank-grade AES-256 bits encryption standard.",
            "Local encrypted fallback storage if offline.",
            "Time and geo-stamping applied to package."
        ],
        hwModule: null,
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-sync">
                    <i class="fa-solid fa-shield-halved fa-4x text-primary mb-4" style="animation: pulse-border 1.5s infinite;"></i>
                    <h2 class="font-space text-2xl mb-2 tracking-wider">${t.syncTitle[appLang]}</h2>
                    <div class="progress-bar-container mt-4 mb-2" style="width: 200px;"><div class="progress-bar" id="sync-bar" style="width:0%"></div></div>
                    <div class="status-text text-muted text-xs">${t.syncText[appLang]}</div>
                </div>
            `;
            setTimeout(() => {
                const bar = document.getElementById('sync-bar');
                if(bar) {
                    bar.style.width = "100%";
                    setTimeout(() => {
                        container.innerHTML = `
                            <div class="kiosk-sync">
                                <i class="fa-solid fa-cloud-arrow-up fa-4x text-accent mb-4"></i>
                                <h2 class="font-space text-2xl mb-2 text-accent tracking-wider">${t.syncDone[appLang]}</h2>
                                <div class="status-text text-muted text-xs mt-4"><i class="fa-solid fa-cog fa-spin"></i> ${t.syncProc[appLang]}</div>
                            </div>
                        `;
                    }, 800);
                }
            }, 500);
        }
    },
    {
        id: 8,
        title: "AI Score Generation",
        time: "Cloud Processing",
        desc: "The TrustScore AI engine processes 50+ signals across 4 categories (Payments, Community, Behavioral, Digital) using historical repayment data.",
        tech: [
            "Payment Signals: 35% weight.",
            "Community Signals: 25% weight.",
            "Behavioral Signals: 25% weight.",
            "Digital Signals: 15% weight."
        ],
        hwModule: null,
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-sync" style="background:#000;">
                    <h2 class="hindi-text mb-4 text-xl" style="opacity:0.5;">${t.aiWait[appLang]}</h2>
                    <div style="width: 150px; height: 150px; position:relative;">
                        <svg viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" stroke-width="4" stroke-dasharray="250" stroke-dashoffset="0" style="animation: dash 2s linear infinite;"></circle>
                        </svg>
                    </div>
                </div>
            `;
            const style = document.createElement('style');
            style.innerHTML = `@keyframes dash { to { stroke-dashoffset: 500; } }`;
            container.appendChild(style);
        }
    },
    {
        id: 9,
        title: "Score Delivery",
        time: "Instant",
        desc: "The completed TrustScore is sent back. Priya sees her score, credit eligibility, and recommended interest rates in a simple visual format.",
        tech: [
            "Visual translation of complex data into intuitive dials.",
            "Direct lender matching logic.",
            "Actionable 'How to Improve' suggestions displayed."
        ],
        hwModule: null,
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-score">
                    <div class="score-dial text-accent" style="--accent: var(--accent);">
                        <div class="dial-inner">
                            <div class="dial-number" id="final-score">0</div>
                            <div class="dial-max">/900</div>
                        </div>
                    </div>
                    <div class="text-accent font-space font-bold tracking-widest uppercase mb-2">${t.scoreGood[appLang]}</div>
                    <div class="hindi-text text-lg">${t.scoreAvail[appLang]}</div>
                    <div class="text-white font-space mt-1 mb-2">₹25,000 - ₹75,000 @ 14-18% APR</div>
                    
                    <div class="signal-bars">
                        <div class="bar-wrap"><div class="bar-fill"><div class="bar-inner" style="height:0%" id="b1"></div></div><div class="bar-label">PAY</div></div>
                        <div class="bar-wrap"><div class="bar-fill"><div class="bar-inner" style="height:0%" id="b2"></div></div><div class="bar-label">COM</div></div>
                        <div class="bar-wrap"><div class="bar-fill"><div class="bar-inner" style="height:0%" id="b3"></div></div><div class="bar-label">BEH</div></div>
                        <div class="bar-wrap"><div class="bar-fill"><div class="bar-inner" style="height:0%" id="b4"></div></div><div class="bar-label">DIG</div></div>
                    </div>
                </div>
            `;
            setTimeout(() => {
                const scoreEl = document.getElementById('final-score');
                if(!scoreEl) return;
                let c = 0;
                let int = setInterval(()=>{
                    c += 24;
                    if(c >= 742) { clearInterval(int); scoreEl.innerText = '742'; }
                    else scoreEl.innerText = c;
                }, 30);
                
                document.getElementById('b1').style.height = "96%";
                document.getElementById('b2').style.height = "82%";
                document.getElementById('b3').style.height = "89%";
                document.getElementById('b4').style.height = "64%";
            }, 300);
        }
    },
    {
        id: 10,
        title: "Certificate Printing",
        time: "10 secs",
        desc: "The built-in thermal printer produces a physical certificate with a tamper-proof QR code, authorizing her profile for partner lenders.",
        tech: [
            "Encrypted profile ID generated.",
            "QR payload contains digital signature anti-tampering.",
            "Thermal printing requires zero ink logistics."
        ],
        hwModule: "hw-printer",
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-print">
                    <i class="fa-solid fa-print fa-4x text-primary mb-4" style="animation: pulse-border 1.5s infinite;"></i>
                    <h2 class="hindi-text mb-4 text-xl">${t.printWait[appLang]}</h2>
                    <div class="status-text text-muted text-sm">${t.printDispense[appLang]}</div>
                </div>
            `;
            setTimeout(() => {
                document.querySelector('.certificate-output').classList.add('printing');
            }, 500);
        }
    },
    {
        id: 11,
        title: "Lender Verification & Loan",
        time: "Same Day",
        desc: "Priya takes her certificate to a partner lender. They scan the QR code to verify her profile instantly. She receives her affordable loan and buys her sewing machine.",
        tech: [
            "Lender portal unlocks full verified data payload.",
            "Bridge between 190M unbanked Indians and formal finance.",
            "Repayments feed back into TrustScore."
        ],
        hwModule: null,
        kioskScript: (container) => {
            container.innerHTML = `
                <div class="kiosk-welcome" style="background:#07090e;">
                    <i class="fa-solid fa-hands-holding-circle fa-4x mb-4 text-accent"></i>
                    <h2 class="hindi-text mb-2 text-accent">${t.endThanks[appLang]}</h2>
                    <p class="text-white text-lg mt-2">${t.endMsg[appLang]}</p>
                </div>
            `;
        }
    }
];

let currentStageIndex = 0;

function renderStage(index) {
    const stage = stages[index];
    
    // Update Indicators
    document.getElementById('stage-number').innerText = `Stage ${index + 1} of ${stages.length}`;
    document.getElementById('progress-bar').style.width = `${((index + 1) / stages.length) * 100}%`;
    
    // Narrative Content
    document.getElementById('stage-title').innerText = stage.title;
    document.getElementById('stage-time').innerText = stage.time;
    document.getElementById('stage-description').innerText = stage.desc;
    
    // Tech List
    const techList = document.getElementById('tech-list');
    techList.innerHTML = '';
    stage.tech.forEach(t => {
        const li = document.createElement('li');
        li.innerText = t;
        techList.appendChild(li);
    });
    
    // Reset Hardware Modules
    document.querySelectorAll('.hw-module').forEach(m => m.classList.remove('active', 'success'));
    if(stage.hwModule) {
        document.getElementById(stage.hwModule).classList.add('active');
    }
    
    // Reset printer output if not on printing stage
    if (stage.title !== "Certificate Printing" && stage.title !== "Lender Verification & Loan") {
        document.querySelector('.certificate-output').classList.remove('printing');
    }
    
    // Render Kiosk Screen
    const kioskScreen = document.getElementById('kiosk-screen');
    kioskScreen.innerHTML = '';
    if (stage.kioskScript) {
        stage.kioskScript(kioskScreen);
    }
    
    // Buttons
    document.getElementById('btn-prev').disabled = index === 0;
    
    const btnNext = document.getElementById('btn-next');
    if (index === stages.length - 1) {
        btnNext.innerHTML = 'Restart Demo <i class="fa-solid fa-rotate-right"></i>';
    } else {
        btnNext.innerHTML = 'Next Stage <i class="fa-solid fa-arrow-right"></i>';
    }
}

document.getElementById('btn-next').addEventListener('click', () => {
    if (currentStageIndex < stages.length - 1) {
        currentStageIndex++;
        renderStage(currentStageIndex);
    } else {
        currentStageIndex = 0; // Restart
        renderStage(currentStageIndex);
    }
});

document.getElementById('btn-prev').addEventListener('click', () => {
    if (currentStageIndex > 0) {
        currentStageIndex--;
        renderStage(currentStageIndex);
    }
});

// Init
window.onload = () => {
    renderStage(0);

    // Certificate Zoom Logic
    const certPaper = document.querySelector('.cert-paper');
    const certOutput = document.getElementById('certificate-output');
    const certOverlay = document.getElementById('cert-overlay');

    if(certPaper && certOutput && certOverlay) {
        const certBackBtn = document.getElementById('cert-back-btn');
        const certCloseX = document.getElementById('cert-close-x');

        certPaper.addEventListener('click', (e) => {
            if (certOutput.classList.contains('printing')) {
                certOutput.classList.add('cert-fullscreen');
                certOverlay.classList.add('active');
                document.body.classList.add('cert-active-body');
                e.stopPropagation(); // Prevent immediate closing if clicking paper
            }
        });

        const closeCert = (e) => {
            if(e) e.stopPropagation();
            certOutput.classList.remove('cert-fullscreen');
            certOverlay.classList.remove('active');
            document.body.classList.remove('cert-active-body');
        };

        certOverlay.addEventListener('click', closeCert);
        if(certBackBtn) certBackBtn.addEventListener('click', closeCert);
        if(certCloseX) certCloseX.addEventListener('click', closeCert);
    }
};
