
/* ============================== THEME / DATA ============================== */
const C = {
  primary:"#2C3E66", primaryDark:"#1D2A46", primaryLight:"#DDE3EF",
  success:"#4B7355", amber:"#B5822A", saffron:"#B5822A", red:"#A8452C",
  ink:"#22271F", slate:"#55584C", border:"#CFC9B4"
};

const TABS = [
  {id:"today", label:"Today"},
  {id:"food", label:"AI Food Snap"},
  {id:"lab", label:"Lab Decoder"},
  {id:"radar", label:"Radar"},
  {id:"report", label:"Health Report"},
];

const sleepWeek=[6.1,6.8,7.2,6.4,7.0,7.6,7.3];
const stepsWeek=[4200,5100,6800,5900,7200,8400,6100];
const hydrationWeek=[1.6,1.8,2.0,1.9,2.1,2.3,2.1];
const wellnessWeek=[71,74,78,76,80,83,84];
const glycemicWeek=[62,58,54,57,49,45,47];
const habitCompWeek=[2,3,3,4,3,5,4];
const DAYS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const DEMO_MEALS = {
  "North Indian Thali": {foods:[["2 × Wheat Roti",160,"30g carbs"],["1 × Moong Dal",140,"9g protein"],["1 × Mixed Salad",35,"High fibre"],["1 × Paneer Sabzi",210,"12g protein"]], calories:545, carbs:58, protein:26, fat:18, fiber:9, gl:34, impact:"MODERATE", insight:"A well-rounded thali with fibre and protein slowing carb absorption. Eating the salad and dal before the roti may further flatten the glucose curve."},
  "South Indian Breakfast": {foods:[["2 × Idli",140,"28g carbs"],["Sambar, 1 bowl",90,"6g protein"],["Coconut Chutney",70,"Healthy fats"]], calories:300, carbs:45, protein:9, fat:10, fiber:5, gl:28, impact:"LOW", insight:"Steamed idli with sambar keeps this meal light. Adding a spoon of extra dal to the sambar would boost protein further."},
  "Biryani": {foods:[["1.5 cups Biryani Rice",420,"68g carbs"],["Chicken Pieces (3)",260,"24g protein"],["Raita, 1 bowl",60,"Cooling curd"]], calories:740, carbs:82, protein:28, fat:26, fiber:3, gl:58, impact:"HIGH", insight:"Rice-heavy and low in fibre — this meal spikes glucose faster. Pair with a side salad and consider a post-meal walk to blunt the spike."},
  "Roti-Sabzi": {foods:[["3 × Roti",240,"45g carbs"],["Mixed Veg Sabzi",120,"High fibre"],["Curd, 1 bowl",60,"Probiotic"]], calories:420, carbs:52, protein:12, fat:14, fiber:8, gl:30, impact:"LOW", insight:"Good fibre-to-carb ratio from the mixed vegetables. This is a steady, blood-sugar-friendly plate."},
  "Idli-Dosa": {foods:[["1 × Plain Dosa",168,"26g carbs"],["2 × Idli",140,"28g carbs"],["Sambar",90,"6g protein"]], calories:398, carbs:58, protein:11, fat:9, fiber:4, gl:33, impact:"MODERATE", insight:"Fermented batter is easier to digest, but this combo leans carb-heavy. A smaller portion of dosa with extra sambar balances it out."},
  "Chai-Samosa": {foods:[["1 × Samosa",260,"24g carbs"],["1 cup Sweet Chai",90,"12g sugar"]], calories:350, carbs:40, protein:6, fat:18, fiber:2, gl:41, impact:"HIGH", insight:"Fried pastry plus sugary chai is a fast glucose spike with little fibre. Try the Smart Chai Swap nudge and a baked snack alternative."},
  "Dal Bowl": {foods:[["1.5 cups Mixed Dal",260,"18g protein"],["1 × Brown Rice",150,"30g carbs"],["Cucumber Salad",25,"High fibre"]], calories:435, carbs:48, protein:22, fat:8, fiber:11, gl:24, impact:"LOW", insight:"High protein and fibre with brown rice keeps this a strong blood-sugar-friendly bowl. One of your best logged meals this week."},
};

const recommendations = [
  {cat:"Sleep", priority:"High", obs:"Your recorded sleep is consistently below your personal target of 7.5 hours.", rec:"Maintain a consistent sleep and wake time, even on weekends.", action:"Set a bedtime alarm for 10:30 PM for the next 7 days."},
  {cat:"Hydration", priority:"Medium", obs:"Water intake dips on days with back-to-back meetings.", rec:"Keep a bottle visible at your desk as a passive cue.", action:"Log 500ml after every meeting block."},
  {cat:"Steps", priority:"On Track", obs:"Average daily steps have risen 22% over two weeks.", rec:"Keep the current walking routine — it's working.", action:"Maintain the post-lunch walk habit."},
];

const plan7day = [
  {day:"Monday", task:"10-minute post-meal walk", cat:"Activity", priority:"High", reason:"Blunts post-meal glucose rise"},
  {day:"Tuesday", task:"Reduce sugary chai", cat:"Nutrition", priority:"Medium", reason:"Lowers added sugar intake"},
  {day:"Wednesday", task:"30-minute physical activity", cat:"Activity", priority:"High", reason:"Improves insulin sensitivity"},
  {day:"Thursday", task:"Sleep before 10:30 PM", cat:"Sleep", priority:"High", reason:"Sleep is below your personal baseline"},
  {day:"Friday", task:"High-fibre breakfast", cat:"Nutrition", priority:"Medium", reason:"Supports steadier morning glucose"},
  {day:"Saturday", task:"8,000-step target", cat:"Activity", priority:"On Track", reason:"You're close to this most days"},
  {day:"Sunday", task:"Weekly wellness review", cat:"Reflection", priority:"On Track", reason:"Reinforces consistency"},
];

const labReports = [
  {id:"hba1c", name:"HbA1c", value:"6.3%", status:"Pre-diabetic range", tone:"amber", explain:"Your HbA1c reflects your average blood glucose level over the previous few months.", action:"Consider regular physical activity and discuss this result with a qualified healthcare professional."},
  {id:"ldl", name:"LDL Cholesterol", value:"132 mg/dL", status:"Borderline", tone:"amber", explain:"LDL is often called 'bad cholesterol' — higher levels are linked to increased cardiovascular risk over time.", action:"A fibre-rich diet and regular activity can help. Share this reading with your doctor."},
  {id:"fbs", name:"Fasting Blood Sugar", value:"104 mg/dL", status:"Slightly elevated", tone:"amber", explain:"This measures blood glucose after an overnight fast — a key marker for prediabetes screening.", action:"Track post-meal patterns using AI Food Snap and revisit this trend in 4–6 weeks."},
  {id:"hdl", name:"HDL Cholesterol", value:"48 mg/dL", status:"Within range", tone:"success", explain:"HDL is the 'good' cholesterol that helps clear excess cholesterol from the bloodstream.", action:"Keep up your current activity level — it's supporting this healthy reading."},
];

const communityWard = {ward:"Ward 12", area:"South Delhi", reports:[
  "Viral fever reports +34% this week","Mosquito protection recommended","Air quality moderate — sensitive groups take care outdoors"
]};

const samplePrompts = ["2 methi parathe aur 1 cup chai","30 minute walk subah","6 ghante ki neend","aaj 2 litre paani piya","thoda stress tha office mein"];

function parseHabitText(text){
  const t = text.toLowerCase();
  const results = [];
  const waterMatch = t.match(/(\d+(\.\d+)?)\s*(litre|liter|l\b|glass|glasses)/);
  if(waterMatch || /paani|water|hydrat/.test(t)){
    const amt = waterMatch ? waterMatch[1] : "1";
    const unit = waterMatch && /glass/.test(waterMatch[3]) ? "glasses" : "L";
    results.push({type:"Hydration", color:"#0EA5E9", detail:`${amt} ${unit} logged`});
  }
  const sleepMatch = t.match(/(\d+(\.\d+)?)\s*(ghante|hour|hr)/);
  if(sleepMatch || /neend|sleep|slept/.test(t)){
    const amt = sleepMatch ? sleepMatch[1] : "7";
    results.push({type:"Sleep", color:"#6366F1", detail:`${amt} hours logged`});
  }
  const walkMatch = t.match(/(\d+)\s*(minute|min)/);
  if(walkMatch || /walk|walked|dauda|running|gym|exercise|jog/.test(t)){
    const amt = walkMatch ? walkMatch[1] : "20";
    const kind = /run|jog|dauda/.test(t) ? "Running" : /gym|exercise/.test(t) ? "Exercise" : "Walking";
    results.push({type:"Activity", color:C.primary, detail:`${kind}, ${amt} minutes`});
  }
  if(/stress|tension|pareshan|anxious/.test(t)){
    results.push({type:"Stress", color:C.red, detail:"Mild stress noted"});
  }
  const foodWords=["roti","parathe","paratha","dal","chai","rice","chawal","sabzi","idli","dosa","biryani","khana","food","ate","had"];
  if(foodWords.some(w=>t.includes(w))){
    const items = t.match(/(\d+)?\s*(roti|parathe|paratha|dal|chai|rice|chawal|sabzi|idli|dosa|biryani)/g) || [];
    results.push({type:"Food", color:C.saffron, detail: items.length ? items.join(", ") : "Meal logged"});
  }
  if(results.length===0) results.push({type:"General", color:C.slate, detail:"Logged as a general lifestyle note"});
  return results;
}

/* ============================== STATE ============================== */
const state = {
  tab:"today",
  habits:[
    {id:"h1", title:"Post-Lunch 10-Min Walk", sub:"Blood Sugar Shield", color:C.primary, done:false},
    {id:"h2", title:"Hydration Boost — 500ml", sub:"Post-meeting", color:"#0EA5E9", done:false},
    {id:"h3", title:"Sleep Wind-Down — 10:30 PM", sub:"Recovery Mode", color:"#6366F1", done:false},
  ],
  nudges:[
    {id:"n1", title:"Shatapadi", desc:"Take approximately 100 steps after your meal.", done:false},
    {id:"n2", title:"Smart Chai Swap", desc:"Try reducing added sugar and using whole spices for flavour.", done:false},
    {id:"n3", title:"Meal Order", desc:"Start with salad/fibre-rich foods, then protein, then carbohydrates.", done:false},
  ],
  projected:false,
  selectedMeal:null, analyzing:false, loggedMeals:[],
  chatLog:[],
  age:45, waist:50, activityLevel:40, familyHistory:true,
  planChecked:{},
  symptomResult:null,
  coachMsgs:[{role:"bot", text:"Hi David — I'm your AegisHabit coach. Ask me about your score, sleep, meals, or risk trends."}],
  listening:false,
};

/* ============================== HELPERS ============================== */
function esc(s){ return String(s).replace(/"/g,"&quot;"); }
function riskLevel(v){ if(v<34) return {label:"Low", tone:"success"}; if(v<67) return {label:"Moderate", tone:"amber"}; return {label:"High", tone:"red"}; }
function toneColor(tone){ return tone==="success"?C.success: tone==="amber"?C.amber: tone==="red"?C.red: C.primary; }
function badge(text, tone){ return `<span class="badge badge-${tone}">${text}</span>`; }

function computeRisks(){
  const {age, waist, activityLevel, familyHistory} = state;
  let d = (age>=50?30:age>=35?20:10) + waist + (100-activityLevel)*0.3 + (familyHistory?20:0);
  let cv = (age>=50?25:age>=35?15:8) + waist*0.8 + (100-activityLevel)*0.35 + (familyHistory?15:0);
  const diabetesRisk = Math.max(4, Math.min(96, Math.round(d/2.5)));
  const cvRisk = Math.max(4, Math.min(96, Math.round(cv/2.3)));
  const wellnessScore = Math.max(20, Math.min(98, Math.round(100 - Math.round((diabetesRisk+cvRisk)/2)*0.35)));
  return {diabetesRisk, cvRisk, wellnessScore};
}

function ring(value, size, stroke, color, big, label){
  const r=(size-stroke)/2, c=2*Math.PI*r, off=c-(value/100)*c;
  return `<div class="ring-wrap" style="width:${size}px;height:${size}px;">
    <svg width="${size}" height="${size}" style="transform:rotate(-90deg)">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" stroke="#EEF2F1" stroke-width="${stroke}" fill="none"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" stroke="${color}" stroke-width="${stroke}" fill="none"
        stroke-dasharray="${c}" stroke-dashoffset="${off}" stroke-linecap="round" style="transition:stroke-dashoffset .6s"/>
    </svg>
    <div class="ring-txt"><b style="${big?'font-size:22px':''}">${value}%</b>${label?`<span>${label}</span>`:""}</div>
  </div>`;
}

function toggleHtml(id, checked, onclick){
  return `<button class="toggle" style="background:${checked?C.primary:'#CBD5E1'}" onclick="${onclick}">
    <span class="knob" style="left:${checked?21:3}px"></span></button>`;
}

/* Simple inline SVG line/bar charts */
function sparkline(data, color, w=280, h=70){
  const max=Math.max(...data), min=Math.min(...data);
  const pts = data.map((v,i)=>{
    const x = (i/(data.length-1))*(w-10)+5;
    const y = h-6 - ((v-min)/((max-min)||1))*(h-16);
    return `${x},${y}`;
  }).join(" ");
  const last = pts.split(" ").pop();
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${last.split(',')[0]}" cy="${last.split(',')[1]}" r="3.5" fill="${color}"/>
  </svg>`;
}
function barsChart(data, color, w=280, h=70){
  const max=Math.max(...data);
  const bw = (w/data.length)*0.55, gap=(w/data.length);
  const bars = data.map((v,i)=>{
    const bh = (v/max)*(h-14);
    const x = i*gap + (gap-bw)/2;
    const y = h-4-bh;
    return `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="3" fill="${color}"/>`;
  }).join("");
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">${bars}</svg>`;
}
function areaChart(data, color, w=280, h=70){
  const max=Math.max(...data), min=Math.min(...data);
  const pts = data.map((v,i)=>{
    const x=(i/(data.length-1))*(w-10)+5;
    const y=h-6-((v-min)/((max-min)||1))*(h-16);
    return [x,y];
  });
  const line = pts.map(p=>p.join(",")).join(" ");
  const area = `M${pts[0][0]},${h} L`+pts.map(p=>p.join(",")).join(" L")+` L${pts[pts.length-1][0]},${h} Z`;
  const gid = "g"+Math.random().toString(36).slice(2,8);
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">
    <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.35"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${area}" fill="url(#${gid})"/>
    <polyline points="${line}" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

/* ============================== APP CONTROLLER ============================== */
const App = {

  render(){
    document.getElementById("navTabs").innerHTML = TABS.map(t=>`
      <button class="nav-tab ${state.tab===t.id?'active':''}" onclick="App.setTab('${t.id}')">
        <span class="label">${t.label}</span>
      </button>`).join("");

    let html = "";
    if(state.tab==="today") html = TodayTab();
    else if(state.tab==="food") html = FoodTab();
    else if(state.tab==="lab") html = LabTab();
    else if(state.tab==="radar") html = RadarTab();
    else if(state.tab==="report") html = ReportTab();
    document.getElementById("page").innerHTML = `<div class="anim">${html}</div>`;
  },

  setTab(id){ state.tab = id; window.scrollTo({top:0, behavior:"smooth"}); this.render(); },

  toggleHabit(id){
    const h = state.habits.find(x=>x.id===id);
    h.done = !h.done;
    if(h.done) App.pushToast(`"${h.title}" marked complete`);
    this.render();
  },
  toggleNudge(id){ const n = state.nudges.find(x=>x.id===id); n.done=!n.done; this.render(); },
  toggleProjected(){ state.projected = !state.projected; this.render(); },

  runAnalysis(key){
    state.selectedMeal = key; state.analyzing = true; this.render();
    setTimeout(()=>{ state.analyzing=false; this.render(); }, 550);
  },
  randomMeal(){
    const keys = Object.keys(DEMO_MEALS);
    this.runAnalysis(keys[Math.floor(Math.random()*keys.length)]);
  },
  logMeal(){
    if(!state.selectedMeal) return;
    state.loggedMeals.push(state.selectedMeal);
    App.pushToast(`${state.selectedMeal} logged to Daily Habit Engine`);
    this.render();
  },

  submitChat(fromText){
    const el = document.getElementById("chatInput");
    const val = (fromText!==undefined ? fromText : (el?el.value:"")).trim();
    if(!val) return;
    state.chatLog.unshift({text:val, parsed:parseHabitText(val), id:Date.now()});
    if(el) el.value="";
    App.pushToast("Entry parsed and logged");
    this.render();
  },
  startListening(){
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SR){ App.pushToast("Voice input isn't supported in this browser"); return; }
    const rec = new SR();
    rec.lang = "en-IN"; rec.interimResults = false;
    rec.onresult = (e)=>{ const text = e.results[0][0].transcript; const el=document.getElementById("chatInput"); if(el) el.value=text; };
    rec.onerror = ()=>{}; rec.start();
  },

  onSlider(key, val){
    state[key] = Number(val);
    this.patchRadar();
  },
  toggleFamilyHistory(){ state.familyHistory = !state.familyHistory; this.render(); },
  patchRadar(){
    const {diabetesRisk, cvRisk, wellnessScore} = computeRisks();
    const dRisk = riskLevel(diabetesRisk), cRisk = riskLevel(cvRisk);
    ["age","waist","activityLevel"].forEach(k=>{
      const lab = document.getElementById("val-"+k);
      if(lab) lab.textContent = state[k] + (k==="age"?" yrs":"");
    });
    const map = [["d",diabetesRisk,dRisk],["cv",cvRisk,cRisk],["w",wellnessScore,{tone:"primary"}]];
    map.forEach(([key,val,risk])=>{
      const size = key==="w"?90:90, stroke=9, r=(size-stroke)/2, circ=2*Math.PI*r, off=circ-(val/100)*circ;
      const circleEl = document.getElementById("ringcircle-"+key);
      const txtEl = document.getElementById("ringtxt-"+key);
      const badgeEl = document.getElementById("badge-"+key);
      const color = toneColor(risk.tone);
      if(circleEl){ circleEl.setAttribute("stroke-dashoffset", off); circleEl.setAttribute("stroke", color); }
      if(txtEl) txtEl.textContent = val + "%";
      if(badgeEl && risk.label){ badgeEl.textContent = risk.label + " Risk"; badgeEl.className = "badge badge-"+risk.tone; }
    });
  },

  togglePlan(day){ state.planChecked[day] = !state.planChecked[day]; this.render(); },

  checkSymptoms(){
    const t = (document.getElementById("symptomInput").value||"").toLowerCase();
    let level="green", label="Monitor", advice="Rest, stay hydrated, and track your temperature. Symptoms like this are often mild and self-limiting.";
    if(/chest pain|breath|faint|severe|blue lips|unconscious/.test(t)){ level="red"; label="Seek urgent care"; advice="These symptoms may need urgent attention. Please contact emergency services or go to the nearest hospital."; }
    else if(/fever|joint pain|vomit|rash|persistent|3 days|weakness/.test(t)){ level="yellow"; label="Consider medical advice"; advice="Symptoms like this are worth discussing with a doctor, especially if they persist beyond 2–3 days."; }
    state.symptomResult = {level, label, advice};
    this.render();
  },

  openLabDetail(id){
    const r = labReports.find(x=>x.id===id);
    App.openModal(`${r.name}`, `
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:12px;">
        <span style="font-size:30px;font-weight:600;">${r.value}</span>
        ${badge(r.status, r.tone)}
      </div>
      <p style="font-size:13px;color:var(--slate);line-height:1.6;margin-bottom:12px;">${r.explain}</p>
      <div style="background:var(--primary-light);border-radius:6px;padding:14px;font-size:13px;color:var(--primary-dark);line-height:1.6;">
        <b>Suggested wellness action: </b>${r.action}
      </div>
      <p style="font-size:11px;color:var(--muted);margin-top:16px;">For wellness education and lifestyle guidance only. Not a substitute for professional medical advice, diagnosis, or treatment.</p>
    `);
  },
  openSOS(){
    App.openModal("Red-Flag SOS", `
      <div style="text-align:center;padding:6px 0;">
        <div style="width:64px;height:64px;border-radius:50%;background:#FEF2F2;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:28px;color:${C.red};font-weight:600;">!</div>
        <p style="font-size:14px;color:var(--slate);margin-bottom:16px;line-height:1.6;">If this is a medical emergency, please call your local emergency number immediately or go to the nearest hospital.</p>
        <div style="background:#FEF2F2;border-radius:6px;padding:12px;font-size:13px;color:#991B1B;font-weight:500;margin-bottom:8px;">India Emergency: 112</div>
        <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;font-size:12.5px;color:var(--slate);">This app cannot dispatch emergency services. It provides general wellness information only.</div>
      </div>
    `);
  },
  openNudgeInfo(){
    App.openModal("Cultural Micro-Nudges", `<p style="font-size:13px;color:var(--slate);line-height:1.6;">These are small, culturally familiar actions — rooted in everyday Indian routines — that compound into meaningful lifestyle change over time. Mark them complete as you go.</p>`);
  },

  openCoach(){
    App.openModal("AI Wellness Coach", CoachChatHtml(), true);
  },
  askCoach(preset){
    const el = document.getElementById("coachInput");
    const q = (preset!==undefined ? preset : (el?el.value:"")).trim();
    if(!q) return;
    state.coachMsgs.push({role:"user", text:q});
    if(el) el.value="";
    document.getElementById("modalBox").innerHTML = CoachChatHtml();
    App.scrollCoach();
    const t = q.toLowerCase();
    let reply = "Based on your logged data, staying consistent with your current habits should keep your trends moving in the right direction.";
    if(t.includes("score") && t.includes("low")) reply = "Your Activity (62) and Screen Time (58) sub-scores are pulling your wellness score down. A 20-minute walk after dinner is the fastest lever right now.";
    else if(t.includes("eat")) reply = "Try a fibre-first plate today — start with the mixed salad, then dal, then roti. It's your best-scoring meal pattern this week.";
    else if(t.includes("sleep")) reply = "Your sleep has averaged 6.8h this week, below your 7.5h target. Try the 10:30 PM wind-down nudge tonight — it's linked to your best mornings.";
    else if(t.includes("risk") && t.includes("increase")) reply = "Your risk radar moved with the waist/BMI and activity sliders — lower activity days this week nudged it up slightly. It's a lifestyle estimate, not a diagnosis.";
    else if(t.includes("screen")) reply = "Try setting a 9:30 PM screen wind-down — pairing it with your Sleep Wind-Down habit tends to work well for you.";
    setTimeout(()=>{
      state.coachMsgs.push({role:"bot", text:reply});
      if(document.getElementById("modalRoot").classList.contains("open")){
        document.getElementById("modalBox").innerHTML = CoachChatHtml();
        App.scrollCoach();
      }
    }, 500);
  },
  scrollCoach(){ const box=document.getElementById("coachScroll"); if(box) box.scrollTop = box.scrollHeight; },

  openModal(title, bodyHtml){
    document.getElementById("modalBox").innerHTML = `
      <div class="modal-head"><h3>${title}</h3><button class="modal-close" onclick="App.closeModal()">✕</button></div>
      <div class="modal-body">${bodyHtml}</div>`;
    document.getElementById("modalRoot").classList.add("open");
    App.scrollCoach();
  },
  closeModal(){ document.getElementById("modalRoot").classList.remove("open"); },

  pushToast(msg){
    const id = "t"+Date.now()+Math.random().toString(36).slice(2,6);
    const el = document.createElement("div");
    el.className="toast"; el.id=id; el.innerHTML = `<span>${msg}</span>`;
    document.getElementById("toastContainer").appendChild(el);
    setTimeout(()=>{ const n=document.getElementById(id); if(n) n.remove(); }, 2800);
  },

  print(){ window.print(); },
};

/* ============================== COACH CHAT ============================== */
function CoachChatHtml(){
  const suggestions = ["Why is my wellness score low?","What should I eat today?","How can I improve my sleep?","Why did my risk score increase?"];
  return `
    <div id="coachScroll" style="max-height:300px;overflow-y:auto;margin-bottom:12px;display:flex;flex-direction:column;gap:10px;padding-right:4px;">
      ${state.coachMsgs.map(m=>`
        <div style="display:flex;justify-content:${m.role==='user'?'flex-end':'flex-start'};">
          <div style="max-width:80%;padding:10px 14px;border-radius:6px;font-size:12.5px;line-height:1.5;
            ${m.role==='user'?`background:${C.primary};color:#fff;border-bottom-right-radius:4px;`:`background:#F1F5F9;color:${C.ink};border-bottom-left-radius:4px;`}">
            ${m.text}
          </div>
        </div>`).join("")}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
      ${suggestions.map(s=>`<button class="pill-btn" style="background:${C.primaryLight};color:${C.primaryDark};" onclick="App.askCoach('${esc(s)}')">${s}</button>`).join("")}
    </div>
    <div style="display:flex;gap:8px;">
      <input id="coachInput" class="input" placeholder="Ask your coach…" onkeydown="if(event.key==='Enter')App.askCoach()"/>
      <button class="btn btn-primary" style="padding:10px 16px;" onclick="App.askCoach()">Send</button>
    </div>
    <p class="footer-note">Practical, action-oriented guidance only. Never a diagnosis or prescription.</p>
  `;
}

/* ============================== TAB: TODAY ============================== */
function TodayTab(){
  const {diabetesRisk, cvRisk, wellnessScore} = computeRisks();
  const dRisk = riskLevel(diabetesRisk), cRisk = riskLevel(cvRisk);

  return `
  <div class="hero">
    <div style="flex:1; min-width:220px;">
      <h1>Good to see you, David</h1>
      <p class="hero-sub">Your lifestyle patterns from the last 7 days are driving today's recommendations. Readiness is optimal.</p>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><b>84%</b><span>Readiness</span></div>
      <div class="hero-stat"><b>${wellnessScore}</b><span>Wellness score</span></div>
      <div class="hero-stat" style="border-right:none;"><b>3</b><span>Habits pending</span></div>
    </div>
  </div>

  <div class="grid-2col">
    <div class="col-stack">

      <div class="card">
        <div class="section-title"><h3>Biological Risk Radar</h3><span class="hint">Prototype estimate</span></div>
        <div class="cards-grid cols-3" style="margin-bottom:14px;">
          <div style="text-align:center;">${ring(diabetesRisk,78,8,toneColor(dRisk.tone))}<div style="margin-top:8px;">${badge(dRisk.label+" Risk", dRisk.tone)}</div><div style="font-size:11px;color:var(--muted);margin-top:4px;font-weight:600;">Diabetes</div></div>
          <div style="text-align:center;">${ring(cvRisk,78,8,toneColor(cRisk.tone))}<div style="margin-top:8px;">${badge(cRisk.label+" Risk", cRisk.tone)}</div><div style="font-size:11px;color:var(--muted);margin-top:4px;font-weight:600;">CV Stress</div></div>
          <div style="text-align:center;">${ring(wellnessScore,78,8,C.primary)}<div style="margin-top:8px;">${badge("Score","primary")}</div><div style="font-size:11px;color:var(--muted);margin-top:4px;font-weight:600;">Wellness</div></div>
        </div>
        <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;font-size:12px;color:var(--slate);margin-bottom:12px;">
          <b style="color:var(--ink);">Prediabetes Risk: Moderate.</b> HbA1c reference: 6.2%
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:var(--primary-light);border-radius:6px;padding:12px;">
          <div><p style="font-size:12px;font-weight:500;color:var(--primary-dark);margin:0;">Projected 30-Day Improvement</p><p style="font-size:11px;color:var(--primary-dark);opacity:.8;margin:2px 0 0;">${state.projected?"-18% with current plan":"Toggle to preview impact"}</p></div>
          ${toggleHtml("projected", state.projected, "App.toggleProjected()")}
        </div>
        <p class="footer-note" style="text-align:left;margin-top:10px;">These are wellness/risk estimates for lifestyle guidance, not a medical diagnosis.</p>
      </div>

      <div class="card">
        <div class="section-title"><h3>Micro-Habits</h3></div>
        ${state.habits.map(h=>`
          <div class="row-item">
            <div class="icon-badge" style="background:${h.color};"></div>
            <div style="flex:1;min-width:0;">
              <div class="row-title ${h.done?'done':''}">${h.title}</div>
              <div class="row-sub">${h.sub}</div>
            </div>
            <button class="check-btn ${h.done?'checked':''}" onclick="App.toggleHabit('${h.id}')"></button>
          </div>`).join("")}
      </div>

      <div class="card">
        <div class="section-title"><h3>What Changed? This Week vs Last</h3></div>
        ${[["Sleep","6h 10m","7h 05m"],["Steps","4,200","6,100"],["Hydration","1.6L","2.1L"],["Screen Time","7h 40m","6h 20m"]].map(([label,from,to])=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;">
            <span style="font-size:13px;font-weight:600;color:var(--slate);width:110px;">${label}</span>
            <div style="display:flex;align-items:center;gap:6px;font-size:12.5px;">
              <span style="color:var(--muted);">${from}</span><span style="color:var(--border);">to</span>
              <span style="font-weight:600;color:var(--ink);">${to}</span>
            </div>
          </div>`).join("")}
        <div style="background:var(--primary-light);border-radius:6px;padding:12px;font-size:12.5px;color:var(--primary-dark);line-height:1.6;margin-top:8px;">
          <b>AI Insight: </b>Your sleep and hydration improved this week. Increasing daily activity could be your next highest-impact improvement.
        </div>
      </div>

    </div>

    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Real-Time Vitals</h3><span class="chip badge-success">Synced Passively</span></div>
        <div class="cards-grid">
          <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;"><div style="font-size:11px;color:var(--muted);font-weight:500;">Heart Rate</div><div style="font-size:17px;font-weight:600;margin-top:2px;">72 <span style="font-size:11px;color:var(--muted);font-weight:600;">BPM</span></div></div>
          <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;"><div style="font-size:11px;color:var(--muted);font-weight:500;">Sleep</div><div style="font-size:17px;font-weight:600;margin-top:2px;">7h <span style="font-size:11px;color:var(--muted);font-weight:600;">20m</span></div></div>
          <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;grid-column:span 2;">
            <div style="font-size:11px;color:var(--muted);font-weight:500;">Steps</div>
            <div style="font-size:17px;font-weight:600;margin:2px 0 6px;">4,820 <span style="font-size:11px;color:var(--muted);font-weight:600;">/ 8,000</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:60%;background:${C.primary};"></div></div>
          </div>
          <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;grid-column:span 2;"><div style="font-size:11px;color:var(--muted);font-weight:500;">Hydration</div><div style="font-size:17px;font-weight:600;margin-top:2px;">1.4L <span style="font-size:11px;color:var(--muted);font-weight:600;">/ 2.5L</span></div></div>
        </div>
      </div>

      <div class="card">
        <div class="section-title"><h3>Cultural Micro-Nudges</h3><button onclick="App.openNudgeInfo()" style="color:var(--muted);font-weight:600;">i</button></div>
        ${state.nudges.map(n=>`
          <div class="row-item">
            <div class="icon-badge" style="background:${C.saffron};"></div>
            <div style="flex:1;min-width:0;">
              <div class="row-title">${n.title}</div>
              <div class="row-sub">${n.desc}</div>
            </div>
            <button class="check-btn ${n.done?'checked':''}" onclick="App.toggleNudge('${n.id}')"></button>
          </div>`).join("")}
      </div>
    </div>
  </div>
  `;
}

/* ============================== TAB: AI FOOD SNAP ============================== */
function FoodTab(){
  const meal = state.selectedMeal ? DEMO_MEALS[state.selectedMeal] : null;
  const impactTone = meal ? (meal.impact==="LOW"?"success":meal.impact==="MODERATE"?"amber":"red") : "success";

  return `
  <div class="grid-2col">
    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Snap & Know — Indian Meal Analyzer</h3></div>
        <div style="border:2px dashed var(--border);border-radius:6px;padding:26px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;margin-bottom:14px;">
          <p style="font-size:13px;font-weight:500;color:var(--slate);margin:2px 0 0;">Snap, upload or drag & drop your plate</p>
          <p style="font-size:11px;color:var(--muted);">Or try a demo meal below</p>
          <label class="btn btn-primary" style="margin-top:6px;cursor:pointer;">Upload Photo
            <input type="file" accept="image/*" style="display:none;" onchange="App.randomMeal()"/>
          </label>
        </div>
        <div class="cards-grid">
          ${["North Indian Thali","South Indian Breakfast","Chai-Samosa","Dal Bowl"].map(m=>`
            <button class="meal-btn ${state.selectedMeal===m?'selected':''}" onclick="App.runAnalysis('${esc(m)}')">
              ${m}
            </button>`).join("")}
        </div>
        <div class="cards-grid cols-3" style="margin-top:10px;">
          ${["Biryani","Roti-Sabzi","Idli-Dosa"].map(m=>`
            <button class="meal-btn ${state.selectedMeal===m?'selected':''}" style="justify-content:center;" onclick="App.runAnalysis('${esc(m)}')">
              ${m}
            </button>`).join("")}
        </div>
      </div>

      ${state.analyzing ? `<div class="card" style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:30px;"><div class="spinner"></div><p style="font-size:12px;color:var(--muted);font-weight:600;">Analyzing meal composition…</p></div>` : ""}

      ${meal && !state.analyzing ? `
      <div class="card">
        <div class="section-title"><h3>Detected Foods</h3></div>
        ${meal.foods.map(f=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border);">
            <span style="font-size:13px;font-weight:600;color:var(--slate);">${f[0]}</span>
            <div style="text-align:right;"><div style="font-size:12.5px;font-weight:600;">${f[1]} kcal</div><div style="font-size:10.5px;color:var(--muted);">${f[2]}</div></div>
          </div>`).join("")}
      </div>

      <div class="card">
        <div class="section-title"><h3>Nutrition Analysis</h3></div>
        <div class="cards-grid cols-4" style="margin-bottom:12px;">
          ${[["Calories",meal.calories],["Carbs",meal.carbs+"g"],["Protein",meal.protein+"g"],["Fat",meal.fat+"g"]].map(([l,v])=>`
            <div style="text-align:center;background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px 6px;"><div style="font-size:15px;font-weight:600;">${v}</div><div style="font-size:9.5px;color:var(--muted);font-weight:500;">${l}</div></div>`).join("")}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12.5px;color:var(--slate);margin-bottom:12px;">
          <span>Fibre: <b style="color:var(--ink);">${meal.fiber}g</b></span><span>Est. Glycemic Load: <b style="color:var(--ink);">${meal.gl}</b></span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;border-radius:6px;padding:12px;margin-bottom:10px;background:${impactTone==='success'?'#ECFDF5':impactTone==='amber'?'#FFFBEB':'#FEF2F2'};">
          <span style="font-size:12.5px;font-weight:500;color:${impactTone==='success'?'#065F46':impactTone==='amber'?'#92400E':'#991B1B'};">Blood Sugar Impact</span>
          ${badge(meal.impact, impactTone)}
        </div>
        <div style="display:flex;gap:8px;background:#FFFBEB;border-radius:6px;padding:12px;margin-bottom:10px;">
          <p style="font-size:12px;color:#92400E;line-height:1.6;margin:0;"><b>Insulin Spike Alert: </b>${meal.impact==="HIGH"?"Elevated estimated glucose impact — consider a smaller portion or a post-meal walk.":"Low to moderate estimated glucose impact due to fibre and protein balance."}</p>
        </div>
        <div style="display:flex;gap:8px;background:var(--primary-light);border-radius:6px;padding:12px;margin-bottom:14px;">
          <p style="font-size:12px;color:var(--primary-dark);line-height:1.6;margin:0;"><b>AI Insight: </b>${meal.insight}</p>
        </div>
        <button class="btn btn-primary btn-block" onclick="App.logMeal()">Log to Daily Habit Engine</button>
        ${state.loggedMeals.includes(state.selectedMeal)?`<p style="text-align:center;font-size:11px;color:${C.success};font-weight:500;margin-top:8px;">Logged ${state.loggedMeals.filter(m=>m===state.selectedMeal).length}× today</p>`:""}
      </div>` : ""}
    </div>

    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Talk to AegisHabit</h3></div>
        <p style="font-size:11.5px;color:var(--muted);margin:-8px 0 12px;">Works in Hindi, Hinglish or English — say it naturally.</p>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <input id="chatInput" class="input" placeholder="e.g. 2 methi parathe aur 1 cup chai" onkeydown="if(event.key==='Enter')App.submitChat()"/>
          <button class="btn btn-soft" style="padding:10px 14px;" onclick="App.startListening()">Voice</button>
          <button class="btn btn-primary" style="padding:10px 14px;" onclick="App.submitChat()">Send</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
          ${samplePrompts.map(p=>`<button class="pill-btn" onclick="App.submitChat('${esc(p)}')">${p}</button>`).join("")}
        </div>
        <div>
          ${state.chatLog.map(c=>`
            <div style="background:transparent;border:1px solid var(--border);border-radius:6px;padding:12px;margin-bottom:10px;">
              <p style="font-size:12.5px;font-weight:500;color:var(--ink);margin:0 0 8px;">"${c.text}"</p>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                ${c.parsed.map(p=>`<span class="chip" style="border:1px solid ${p.color};color:${p.color};">${p.type}: ${p.detail}</span>`).join("")}
              </div>
            </div>`).join("")}
          ${state.chatLog.length===0?`<p style="text-align:center;font-size:11.5px;color:var(--muted);padding:14px 0;">Your parsed entries will appear here</p>`:""}
        </div>
      </div>
    </div>
  </div>
  `;
}

/* ============================== TAB: LAB DECODER ============================== */
function LabTab(){
  return `
  <div class="grid-2col">
    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Lab Report Decoder</h3></div>
        <div style="display:flex;gap:10px;margin-bottom:8px;">
          <label style="flex:1;border:2px dashed var(--border);border-radius:6px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
            <span style="font-size:11px;font-weight:500;color:var(--slate);">Upload PDF</span>
            <input type="file" accept="application/pdf" style="display:none;"/>
          </label>
          <label style="flex:1;border:2px dashed var(--border);border-radius:6px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
            <span style="font-size:11px;font-weight:500;color:var(--slate);">Upload Image</span>
            <input type="file" accept="image/*" style="display:none;"/>
          </label>
        </div>
        <p style="font-size:10.5px;color:var(--muted);">Showing sample decoded data for this prototype.</p>
      </div>

      <div class="cards-grid">
        ${labReports.map(r=>`
          <div class="card tight">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:4px;">
              <div><p style="font-size:12px;font-weight:500;color:var(--muted);margin:0;">${r.name}</p><p style="font-size:19px;font-weight:600;margin:2px 0 0;">${r.value}</p></div>
              ${badge(r.status, r.tone)}
            </div>
            <p style="font-size:11.5px;color:var(--muted);line-height:1.5;margin:8px 0;">${r.explain}</p>
            <button style="font-size:12px;font-weight:600;color:${C.primary};text-decoration:underline;text-underline-offset:3px;" onclick="App.openLabDetail('${r.id}')">View details</button>
          </div>`).join("")}
      </div>
    </div>

    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Symptom Check</h3>
          <button onclick="App.openSOS()" class="chip badge-red" style="cursor:pointer;">SOS</button>
        </div>
        <textarea id="symptomInput" class="input" rows="3" placeholder="e.g. I have mild fever and joint pain" style="resize:none;margin-bottom:10px;"></textarea>
        <button class="btn btn-dark btn-block" onclick="App.checkSymptoms()">Get Guidance</button>
        ${state.symptomResult ? `
          <div style="display:flex;gap:10px;border-radius:6px;padding:14px;margin-top:12px;background:${state.symptomResult.level==='green'?'#ECFDF5':state.symptomResult.level==='yellow'?'#FFFBEB':'#FEF2F2'};">
            <div style="width:10px;height:10px;border-radius:50%;margin-top:5px;flex-shrink:0;background:${state.symptomResult.level==='green'?C.success:state.symptomResult.level==='yellow'?C.amber:C.red};"></div>
            <div><p style="font-size:12.5px;font-weight:600;margin:0;color:${state.symptomResult.level==='green'?'#065F46':state.symptomResult.level==='yellow'?'#92400E':'#991B1B'};">${state.symptomResult.label}</p>
            <p style="font-size:12px;color:var(--slate);line-height:1.6;margin:4px 0 0;">${state.symptomResult.advice}</p></div>
          </div>` : ""}
      </div>

      <div class="card">
        <div class="section-title"><h3>Community Health Map</h3></div>
        <div style="border:1px solid var(--border);border-radius:6px;height:100px;margin-bottom:12px;background:var(--primary-light);"></div>
        <p style="font-size:13px;font-weight:600;margin:0;">${communityWard.ward} <span style="font-weight:500;color:var(--muted);">, ${communityWard.area}</span></p>
        <div style="margin-top:8px;">
          ${communityWard.reports.map(text=>`<div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--slate);padding:4px 0;">${text}</div>`).join("")}
        </div>
        <div style="margin-top:8px;">${badge("Demo / simulated community data","slate")}</div>
      </div>
    </div>
  </div>
  `;
}

/* ============================== TAB: RADAR ============================== */
function RadarTab(){
  const {diabetesRisk, cvRisk, wellnessScore} = computeRisks();
  const dRisk = riskLevel(diabetesRisk), cRisk = riskLevel(cvRisk);
  const wellnessBreakdown = [["Sleep",78],["Activity",62],["Hydration",84],["Nutrition",80],["Screen Time",58],["Stress",70]];

  return `
  <div class="grid-2col">
    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Interactive Risk Controls</h3></div>
        <div style="margin-bottom:16px;">
          <div class="slider-label"><span>Age</span><b id="val-age">${state.age} yrs</b></div>
          <input type="range" min="18" max="75" value="${state.age}" oninput="App.onSlider('age', this.value)"/>
        </div>
        <div style="margin-bottom:16px;">
          <div class="slider-label"><span>Waist / BMI Factor</span><b id="val-waist">${state.waist}</b></div>
          <input type="range" min="0" max="100" value="${state.waist}" oninput="App.onSlider('waist', this.value)"/>
        </div>
        <div style="margin-bottom:16px;">
          <div class="slider-label"><span>Physical Activity Level</span><b id="val-activityLevel">${state.activityLevel}</b></div>
          <input type="range" min="0" max="100" value="${state.activityLevel}" oninput="App.onSlider('activityLevel', this.value)"/>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-size:13px;font-weight:600;color:var(--slate);">Family History of Diabetes/CVD</span>
          ${toggleHtml("familyHistory", state.familyHistory, "App.toggleFamilyHistory()")}
        </div>
      </div>

      <div class="cards-grid">
        <div class="card">
          <div class="section-title"><h3>Type 2 Diabetes Risk</h3></div>
          <div style="display:flex;align-items:center;gap:16px;">
            <div id="ring-d">${ringInteractive(diabetesRisk,90,9,toneColor(dRisk.tone),"d")}</div>
            <div><span id="badge-d" class="badge badge-${dRisk.tone}">${dRisk.label} Risk</span><p style="font-size:11px;color:var(--muted);margin-top:8px;line-height:1.5;">ICMR-IDRS inspired prototype estimate — not diagnostic.</p></div>
          </div>
        </div>
        <div class="card">
          <div class="section-title"><h3>CV Lifestyle Stress</h3></div>
          <div style="display:flex;align-items:center;gap:16px;">
            <div id="ring-cv">${ringInteractive(cvRisk,90,9,toneColor(cRisk.tone),"cv")}</div>
            <div><span id="badge-cv" class="badge badge-${cRisk.tone}">${cRisk.label} Risk</span><p style="font-size:11px;color:var(--muted);margin-top:8px;line-height:1.5;">Reflects cumulative lifestyle stress, not blood pressure readings.</p></div>
          </div>
        </div>
      </div>

      <div class="card" style="display:flex;gap:10px;background:#F8FAFC;">
        <p style="font-size:11.5px;color:var(--slate);line-height:1.6;margin:0;">This tool provides general wellness information and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
      </div>

      <div class="card">
        <div class="section-title"><h3>Lifestyle Wellness Score</h3></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
          <div id="ring-w">${ringInteractive(wellnessScore,90,9,C.primary,"w")}</div>
          <div><p style="font-size:24px;font-weight:600;margin:0;">${wellnessScore}<span style="font-size:13px;color:var(--muted);font-weight:500;"> / 100</span></p><p style="font-size:11px;color:var(--muted);">Wellness score for lifestyle guidance — not a medical score.</p></div>
        </div>
        ${wellnessBreakdown.map(([label,value])=>`
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:9px;">
            <span style="font-size:12px;font-weight:600;color:var(--slate);width:78px;">${label}</span>
            <div class="progress-track" style="flex:1;"><div class="progress-fill" style="width:${value}%;background:${value>=70?C.success:value>=50?C.amber:C.red};"></div></div>
            <span style="font-size:11.5px;font-weight:600;width:26px;text-align:right;">${value}</span>
          </div>`).join("")}
      </div>
    </div>

    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Personalized Recommendations</h3></div>
        ${recommendations.map(r=>`
          <div style="border:1px solid var(--border);border-radius:6px;padding:14px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <span style="font-size:13px;font-weight:600;">${r.cat}</span>${priorityBadge(r.priority)}
            </div>
            <p style="font-size:11.5px;color:var(--muted);line-height:1.6;margin:0 0 6px;"><b style="color:var(--slate);">Observation: </b>${r.obs}</p>
            <p style="font-size:11.5px;color:var(--muted);line-height:1.6;margin:0 0 8px;"><b style="color:var(--slate);">Recommendation: </b>${r.rec}</p>
            <div style="font-size:12px;font-weight:600;color:${C.primaryDark};border-left:2px solid ${C.primaryDark};padding-left:8px;">${r.action}</div>
          </div>`).join("")}
      </div>

      <div class="card tight">
        <div class="section-title" style="padding:4px 6px 0;"><h3>7-Day Wellness Plan</h3></div>
        ${plan7day.map(p=>`
          <div class="plan-row">
            <button class="check-btn ${state.planChecked[p.day]?'checked':''}" onclick="App.togglePlan('${p.day}')"></button>
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="font-size:10px;font-weight:600;color:var(--muted);font-family:'IBM Plex Mono',monospace;">${p.day.slice(0,3)}</span>${badge(p.cat,"slate")}
              </div>
              <p style="font-size:13px;font-weight:500;margin:3px 0 0;${state.planChecked[p.day]?'color:var(--muted);text-decoration:line-through;':''}">${p.task}</p>
              <p style="font-size:10.5px;color:var(--muted);margin:2px 0 0;">${p.reason}</p>
            </div>
            ${priorityBadge(p.priority)}
          </div>`).join("")}
      </div>

      <div class="card">
        <div class="section-title"><h3>7-Day Trends</h3></div>
        <div class="cards-grid">
          <div><div class="chart-label">Sleep (hrs)</div>${areaChart(sleepWeek,"#6366F1")}</div>
          <div><div class="chart-label">Steps</div>${barsChart(stepsWeek,C.primary)}</div>
          <div><div class="chart-label">Hydration (L)</div>${areaChart(hydrationWeek,"#0EA5E9")}</div>
          <div><div class="chart-label">Wellness Score</div>${sparkline(wellnessWeek,C.primaryDark)}</div>
          <div><div class="chart-label">Glycemic Trend</div>${sparkline(glycemicWeek,C.amber)}</div>
          <div><div class="chart-label">Habits Completed</div>${barsChart(habitCompWeek,C.success)}</div>
        </div>
      </div>
    </div>
  </div>
  `;
}
function ringInteractive(value,size,stroke,color,key){
  const r=(size-stroke)/2, c=2*Math.PI*r, off=c-(value/100)*c;
  return `<div class="ring-wrap" style="width:${size}px;height:${size}px;">
    <svg width="${size}" height="${size}" style="transform:rotate(-90deg)">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" stroke="#EEF2F1" stroke-width="${stroke}" fill="none"/>
      <circle id="ringcircle-${key}" cx="${size/2}" cy="${size/2}" r="${r}" stroke="${color}" stroke-width="${stroke}" fill="none"
        stroke-dasharray="${c}" stroke-dashoffset="${off}" stroke-linecap="round" style="transition:stroke-dashoffset .3s"/>
    </svg>
    <div class="ring-txt"><b id="ringtxt-${key}" style="font-size:20px;">${value}%</b></div>
  </div>`;
}
function priorityBadge(p){
  if(p==="High") return badge("High Priority","red");
  if(p==="Medium") return badge("Medium Priority","amber");
  return badge("On Track","success");
}

/* ============================== TAB: HEALTH REPORT ============================== */
function ReportTab(){
  const {diabetesRisk, cvRisk, wellnessScore} = computeRisks();
  const doneCount = state.habits.filter(h=>h.done).length;
  const today = new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});

  return `
  <div class="grid-2col">
    <div class="col-stack">
      <div class="card" style="border-left:3px solid ${C.primaryDark};">
        <p style="font-size:11.5px;font-weight:600;color:${C.primaryDark};margin:0 0 6px;">Prepared for doctor or ASHA worker consultation</p>
        <h2 style="font-family:'IBM Plex Serif',serif;font-size:19px;font-weight:600;margin:0;">AegisHabit health and lifestyle summary</h2>
        <p style="font-size:11.5px;color:var(--muted);margin-top:6px;font-family:'IBM Plex Mono',monospace;">David, age group 45–50, generated ${today}</p>
      </div>

      <div class="card">
        <div class="section-title"><h3>Score Overview</h3></div>
        <div class="cards-grid cols-3">
          <div style="text-align:center;background:transparent;border:1px solid var(--border);border-radius:6px;padding:14px 4px;"><p style="font-size:18px;font-weight:600;margin:0;">${wellnessScore}</p><p style="font-size:10px;color:var(--muted);font-weight:500;margin:2px 0 0;">Wellness Score</p></div>
          <div style="text-align:center;background:transparent;border:1px solid var(--border);border-radius:6px;padding:14px 4px;"><p style="font-size:18px;font-weight:600;margin:0;">${diabetesRisk}%</p><p style="font-size:10px;color:var(--muted);font-weight:500;margin:2px 0 0;">Diabetes Risk</p></div>
          <div style="text-align:center;background:transparent;border:1px solid var(--border);border-radius:6px;padding:14px 4px;"><p style="font-size:18px;font-weight:600;margin:0;">${cvRisk}%</p><p style="font-size:10px;color:var(--muted);font-weight:500;margin:2px 0 0;">CV Stress</p></div>
        </div>
      </div>

      <div class="card">
        <div class="section-title"><h3>Lifestyle Trends</h3></div>
        <div class="cards-grid">
          <div><div class="chart-label">Sleep</div>${areaChart(sleepWeek,"#6366F1")}</div>
          <div><div class="chart-label">Activity</div>${barsChart(stepsWeek,C.primary)}</div>
          <div><div class="chart-label">Hydration</div>${areaChart(hydrationWeek,"#0EA5E9")}</div>
          <div><div class="chart-label">Glycemic Trend</div>${sparkline(glycemicWeek,C.amber)}</div>
        </div>
      </div>

      <div class="card">
        <div class="section-title"><h3>Nutrition Summary</h3></div>
        <p style="font-size:12.5px;color:var(--slate);line-height:1.7;margin:0;">Average logged meals lean moderate glycemic load with adequate fibre from dal and salad-based dishes. Fried snack items (samosa, sweet chai) appear 2–3×/week and are flagged as a discussion point.</p>
      </div>
    </div>

    <div class="col-stack">
      <div class="card">
        <div class="section-title"><h3>Risk Factors Noted</h3></div>
        ${["Family history of diabetes/CVD","Waist circumference above target range","Activity level below recommended baseline"].map(r=>`
          <div style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--slate);padding:5px 0;"><span style="width:6px;height:6px;border-radius:50%;background:${C.amber};flex-shrink:0;"></span>${r}</div>`).join("")}
      </div>

      <div class="card">
        <div class="section-title"><h3>Recent Recommendations</h3></div>
        ${recommendations.map(r=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;font-size:12.5px;"><span style="font-weight:500;">${r.cat}</span>${priorityBadge(r.priority)}</div>`).join("")}
      </div>

      <div class="card">
        <div class="section-title"><h3>Habits Completed Today</h3></div>
        <p style="font-size:13px;color:var(--slate);margin:0;"><span style="font-size:22px;font-weight:600;color:var(--ink);">${doneCount}</span> / ${state.habits.length} micro-habits completed</p>
      </div>

      <div class="no-print" style="display:flex;gap:10px;">
        <button class="btn btn-dark btn-block" onclick="App.print()">Print Report</button>
        <button class="btn btn-outline btn-block" onclick="App.print()">Save as PDF</button>
      </div>
      <p class="footer-note">This report is a lifestyle-support summary generated from self-logged data. It does not replace clinical evaluation, diagnosis, or treatment by a qualified healthcare professional.</p>
    </div>
  </div>
  `;
}

/* ============================== INIT ============================== */
App.render();
