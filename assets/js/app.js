// تنظيف شريط العنوان من بارامترات التتبع مثل utm_source فور تحميل المنصة
window.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    if (url.searchParams.has('utm_source')) {
        url.searchParams.delete('utm_source');
        window.history.replaceState({}, document.title, url.pathname + url.search);
    }
});

// تبديل تبويبات الواجهات (عربي / إنجليزي)
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

// التحكم بالأقسام التشويقية المتسلسلة
function showTeaser(sectionId, event) {
    const btns = document.querySelectorAll('.teaser-btn');
    const panes = document.querySelectorAll('.teaser-pane');

    btns.forEach(b => b.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
}

// محاكاة اختيار الصلاحيات وتأكيدها للمستخدم
function selectRole(role) {
    const roles = {
        'explorer': 'مستكشف (Explorer)',
        'buyer': 'مستفيد / مشترٍ (Beneficiary / Buyer)',
        'trainee': 'متدرب (Trainee)'
    };
    alert('تم اعتماد صلاحية الدخول بنجاح كـ: ' + roles[role]);
}

// إظهار وإخفاء نافذة دليل الاستخدام السريع (Tour Modal)
function toggleTour() {
    const modal = document.getElementById('tourModal');
    if (!modal) return;
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// محاكاة البحث السريع في عناصر الصفحة ديناميكياً
function performQuickSearch() {
    let inputField = document.getElementById('quickSearchInput');
    if (!inputField) return;
    
    let input = inputField.value.toLowerCase().trim();
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

// التحكم بعرض وإخفاء إجابات الأسئلة الشائعة (FAQ)
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    if (answer) {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    }
}