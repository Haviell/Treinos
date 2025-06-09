const workouts = {
    Gabriel: {
        days: [1, 2, 4, 5],
        plans: {
            A: [{n:"Supino reto barra",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Crossover polia baixa",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Peck deck",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Puxada aberta",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Puxada triângulo",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Remada curvada",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Elevação lateral polia",s:2,r:"6-8",t:"1-2 min",l:0}],
            B: [{n:"Panturrilha leg press",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Cadeira extensora",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Agachamento hack",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Leg press",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Mesa flexora",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Stiff",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Flexão de punho",s:2,r:"6-8",t:"1-2 min",l:0}],
            C: [{n:"Rosca direta barra",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Rosca scott",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Rosca banco 45°",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Triceps francês",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Tríceps testa",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Elevação lateral halter",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Desenvolvimento halter",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Crucifixo inverso",s:2,r:"6-8",t:"1-2 min",l:0}],
            D: [{n:"Levantamento terra",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Banco solear",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Mesa flexora",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Flexora em pé",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Cadeira flexora",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Agachamento livre",s:3,r:"8-10",t:"1-2 min",l:1}]
        }
    },
    Rhuan: {
        days: [1, 2, 3, 4, 5],
        plans: {
            A: [{n:"Supino reto halter",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Supino inclinado halter",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Peck deck",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Triceps francês",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Triceps testa",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Elev lateral halter",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Desenvolvimento",s:2,r:"6-8",t:"1-2 min",l:0}],
            B: [{n:"Puxada aberta",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Puxada triângulo",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Remada baixa",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Rosca halter uni",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Rosca scott",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Rosca martelo",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Crucifixo inverso",s:2,r:"6-8",t:"1-2 min",l:0}],
            C: [{n:"Cadeira flexora",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Agachamento hack",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Leg press",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Panturrilha leg press",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Mesa flexora",s:3,r:"8-10",t:"1-2 min",l:1},{n:"Levantamento terra",s:3,r:"8-10",t:"1-2 min",l:1}],
            D: [{n:"Encolhimento de ombro halter",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Desenvolvimento halter",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Elevação lateral polia",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Crucifixo inverso",s:2,r:"6-8",t:"1-2 min",l:0},{n:"Flexão de punho",s:2,r:"6-8",t:"1-2 min",l:0}]
        }
    }
};

const users = { Gabriel: "gab123", Rhuan: "rhu123" };

const els = {
    login: document.getElementById('login'),
    main: document.getElementById('main'),
    user: document.getElementById('user'),
    password: document.getElementById('password'),
    loginBtn: document.getElementById('login-btn'),
    loginError: document.getElementById('login-error'),
    welcome: document.getElementById('welcome'),
    workout: document.getElementById('workout'),
    workoutList: document.getElementById('workout-list'),
    noWorkout: document.getElementById('no-workout'),
    finalizeWorkout: document.getElementById('finalize-workout'),
    schedule: document.getElementById('schedule'),
    scheduleBtn: document.getElementById('schedule-btn'),
    scheduleList: document.getElementById('schedule-list'),
    stats: document.getElementById('stats'),
    statsBtn: document.getElementById('stats-btn'),
    abWorkout: document.getElementById('ab-workout'),
    abBtn: document.getElementById('ab-btn'),
    logoutBtn: document.getElementById('logout-btn'),
    calendar: document.getElementById('calendar'),
    weeklyChart: document.getElementById('weekly-chart'),
    abChart: document.getElementById('ab-chart'),
    backWorkout: document.getElementById('back-workout'),
    backSchedule: document.getElementById('back-schedule'),
    backAb: document.getElementById('back-ab'),
    startPlank: document.getElementById('start-plank'),
    plankTimer: document.getElementById('plank-timer'),
    crunches: document.getElementById('crunches'),
    finalizeAb: document.getElementById('finalize-ab'),
    nav: document.querySelectorAll('.nav-btn')
};

let user = null, weeklyChart = null, abChart = null;

const utils = {
    loadData: u => JSON.parse(localStorage.getItem(`t_${u}`)) || {w:[],a:[]},
    saveData: (u, d) => localStorage.setItem(`t_${u}`, JSON.stringify(d)),
    getDay: () => { const d = new Date().getDay(); return d === 0 ? 7 : d; },
    getDate: () => new Date().toISOString().split('T')[0],
    isTrainingDay: u => workouts[u].days.includes(utils.getDay()),
    getWorkout: (u, day) => {
        const i = workouts[u].days.indexOf(day || utils.getDay());
        return i === -1 ? null : workouts[u].plans[Object.keys(workouts[u].plans)[i % 4]];
    }
};

const ui = {
    toggleSection: (show, hide) => {
        hide.forEach(s => s.classList.add('hidden'));
        show.classList.remove('hidden');
        els.nav.forEach(btn => btn.classList.remove('active'));
        els[`${show.id}-btn`]?.classList.add('active');
    },
    showWorkout: () => {
        els.workoutList.innerHTML = '';
        const w = utils.getWorkout(user);
        if (!w || !utils.isTrainingDay(user)) {
            els.noWorkout.classList.remove('hidden');
            els.finalizeWorkout.classList.add('hidden');
            if (w) els.workoutList.innerHTML = w.map((e, i) => `
                <div class="mb-2 flex items-center">
                    <input type="checkbox" id="ex-${i}" disabled>
                    <label for="ex-${i}">${e.n} - ${e.s}s ${e.r}, ${e.t}</label>
                </div>
            `).join('');
            return;
        }
        els.noWorkout.classList.add('hidden');
        els.workoutList.innerHTML = w.map((e, i) => `
            <div class="mb-2 flex items-center">
                <input type="checkbox" id="ex-${i}">
                <label for="ex-${i}">${e.n} - ${e.s}s ${e.r}, ${e.t}</label>
            </div>
        `).join('');
        els.finalizeWorkout.classList.remove('hidden');
        ui.checkCompletion(els.workoutList, els.finalizeWorkout);
    },
    showSchedule: () => {
        els.scheduleList.innerHTML = '';
        const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
        days.forEach((day, i) => {
            const d = i + 1, w = utils.getWorkout(user, d);
            if (w) {
                const plan = Object.keys(workouts[user].plans).find(k => workouts[user].plans[k] === w);
                els.scheduleList.innerHTML += `
                    <div class="day-plan">
                        <h4>${day} - Treino ${plan}</h4>
                        <ul>${w.map(e => `<li>${e.n} - ${e.s} séries de ${e.r}, descanso ${e.t}</li>`).join('')}</ul>
                    </div>
                `;
            } else {
                els.scheduleList.innerHTML += `
                    <div class="day-plan">
                        <h4>${day} - Sem treino</h4>
                    </div>
                `;
            }
        });
    },
    checkCompletion: (container, btn) => {
        const cbs = container.querySelectorAll('input[type="checkbox"]:not([disabled])');
        btn.disabled = !Array.from(cbs).every(cb => cb.checked);
    },
    showCalendar: () => {
        els.calendar.innerHTML = '';
        const t = new Date(), s = new Date(t);
        s.setDate(t.getDate() - t.getDay() + 1);
        const d = utils.loadData(user);
        for (let i = 0; i < 7; i++) {
            const day = new Date(s);
            day.setDate(s.getDate() + i);
            const ds = day.toISOString().split('T')[0], c = d.w.includes(ds), isT = ds === utils.getDate();
            els.calendar.innerHTML += `<div class="calendar-day ${c ? 'completed' : ''} ${isT ? 'today' : ''}">${day.toLocaleDateString('pt-BR', {weekday:'short',day:'numeric'})}</div>`;
        }
    },
    updateCharts: () => {
        const d = utils.loadData(user), td = workouts[user].days.length;
        const cw = d.w.filter(date => new Date(date) >= new Date(new Date().setDate(new Date().getDate() - 6))).length;
        const wp = (cw / td) * 100;
        if (weeklyChart) weeklyChart.destroy();
        weeklyChart = new Chart(els.weeklyChart, {
            type: 'doughnut',
            data: { datasets: [{ data: [wp, 100 - wp], backgroundColor: ['#2563EB', '#4B5563'], borderWidth: 0 }], labels: ['Concluído', 'Restante'] },
            options: { cutout: '70%', plugins: { legend: { display: false }, title: { display: true, text: `${wp.toFixed(1)}%`, color: '#93C5FD' } } }
        });
        const ca = d.a.filter(date => new Date(date) >= new Date(new Date().setDate(new Date().getDate() - 6))).length;
        const ap = (ca / 7) * 100;
        if (abChart) abChart.destroy();
        abChart = new Chart(els.abChart, {
            type: 'doughnut',
            data: { datasets: [{ data: [ap, 100 - ap], backgroundColor: ['#2563EB', '#4B5563'], borderWidth: 0 }], labels: ['Concluído', 'Restante'] },
            options: { cutout: '70%', plugins: { legend: { display: false }, title: { display: true, text: `${ap.toFixed(1)}%`, color: '#93C5FD' } } }
        });
    }
};

let plankInterval = null;
els.startPlank.addEventListener('click', () => {
    let t = 60;
    els.plankTimer.textContent = `01:00`;
    els.startPlank.disabled = true;
    plankInterval = setInterval(() => {
        t--;
        els.plankTimer.textContent = `${Math.floor(t / 60).toString().padStart(2, '0')}:${(t % 60).toString().padStart(2, '0')}`;
        if (t <= 0) {
            clearInterval(plankInterval);
            els.startPlank.disabled = false;
            ui.checkCompletion(els.abWorkout, els.finalizeAb);
        }
    }, 1000);
});

els.finalizeWorkout.addEventListener('click', () => {
    if (!utils.isTrainingDay(user)) return;
    const d = utils.loadData(user), t = utils.getDate();
    if (!d.w.includes(t)) {
        d.w.push(t);
        utils.saveData(user, d);
        alert('Treino concluído!');
    }
    ui.showWorkout();
});

els.finalizeAb.addEventListener('click', () => {
    const d = utils.loadData(user), t = utils.getDate();
    if (!d.a.includes(t)) {
        d.a.push(t);
        utils.saveData(user, d);
        alert('Treino de abdômen concluído!');
    }
    els.crunches.checked = false;
    els.plankTimer.textContent = '01:00';
    els.finalizeAb.classList.add('hidden');
});

els.loginBtn.addEventListener('click', () => {
    const u = els.user.value, p = els.password.value;
    if (u && users[u] === p) {
        user = u;
        els.login.classList.add('hidden');
        els.main.classList.remove('hidden');
        els.welcome.textContent = `Bem-vindo, ${user}!`;
        ui.toggleSection(els.workout, [els.schedule, els.stats, els.abWorkout]);
        ui.showWorkout();
    } else {
        els.loginError.classList.remove('hidden');
    }
});

els.logoutBtn.addEventListener('click', () => {
    user = null;
    els.login.classList.remove('hidden');
    els.main.classList.add('hidden');
    els.password.value = '';
    els.user.value = '';
});

els.scheduleBtn.addEventListener('click', () => {
    ui.toggleSection(els.schedule, [els.workout, els.stats, els.abWorkout]);
    ui.showSchedule();
});

els.statsBtn.addEventListener('click', () => {
    ui.toggleSection(els.stats, [els.workout, els.schedule, els.abWorkout]);
    ui.showCalendar();
    ui.updateCharts();
});

els.backWorkout.addEventListener('click', () => {
    ui.toggleSection(els.workout, [els.schedule, els.stats, els.abWorkout]);
    ui.showWorkout();
});

els.backSchedule.addEventListener('click', () => {
    ui.toggleSection(els.workout, [els.schedule, els.stats, els.abWorkout]);
    ui.showWorkout();
});

els.abBtn.addEventListener('click', () => {
    ui.toggleSection(els.abWorkout, [els.workout, els.schedule, els.stats]);
    ui.checkCompletion(els.abWorkout, els.finalizeAb);
});

els.backAb.addEventListener('click', () => {
    ui.toggleSection(els.workout, [els.schedule, els.stats, els.abWorkout]);
    ui.showWorkout();
});

els.workoutList.addEventListener('change', () => ui.checkCompletion(els.workoutList, els.finalizeWorkout));
els.crunches.addEventListener('change', () => ui.checkCompletion(els.abWorkout, els.finalizeAb));