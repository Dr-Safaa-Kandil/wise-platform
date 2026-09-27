// تبديل تبويبات الواجهات
function switchTab(lang) {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(btn => btn.classList.remove('active'));
    panes.forEach(pane => pane.classList.remove('active'));

    if (lang === 'ar') {
        document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('tab-ar').classList.add('active');
    } else {
        document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
        document.getElementById('tab-en').classList.add('active');
    }
}

// التحكم بالأقسام التشويقية
function showTeaser(sectionId, event) {
    const btns = document.querySelectorAll('.teaser-btn');
    const panes = document.querySelectorAll('.teaser-pane');

    btns.forEach(b => b.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
}

// محاكاة اختيار الصلاحيات
function selectRole(role) {
    const roles = {
        'explorer': 'مستكشف (Explorer)',
        'buyer': 'مستفيد / مشترٍ (Beneficiary / Buyer)',
        'trainee': 'متدرب (Trainee)'
    };
    alert('تم اعتماد صلاحية الدخول بنجاح كـ: ' + roles[role]);
}

// إظهار وإخفاء دليل الاستخدام السريع (Tour)
function toggleTour() {
    const modal = document.getElementById('tourModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// محاكاة البحث السريع في عناصر الصفحة
function performQuickSearch() {
    let input = document.getElementById('quickSearchInput').value.toLowerCase();
    let items = document.querySelectorAll('.searchable-item, .role-card');
    
    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(input) || input === '') {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}