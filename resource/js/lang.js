async function loadLanguage(lang) {
    try {
        localStorage.setItem('language', lang);
        
        const response = await fetch(`/resource/lang/${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.dataset.lang;

            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });

    } catch (error) {
        console.error('Ошибка загрузки языка:', error);
    }

}

function setLanguage(lang) {
    if (typeof loadLanguage === 'function') {
        loadLanguage(lang);
    }

    if (typeof updateLanguageButtons === 'function') {
        updateLanguageButtons();
    }

    if (typeof updateBookLang === 'function') {
        updateBookLang();
    }

    if (typeof changeLang === 'function') {
        changeLang(lang);
    }

    if (typeof loadStaff === 'function') {
        loadStaff(lang);
    }
}

function updateLanguageButtons() {
    document.querySelector('.RU').classList.toggle(
        'active',
        localStorage.getItem('language') === 'RU'
    );

    document.querySelector('.KY').classList.toggle(
        'active',
        localStorage.getItem('language') === 'KY'
    );
}

function updateBookLang(page){
    let blockElements_RU = document.querySelectorAll('.elBlock.RU')
    let blockElements_KY = document.querySelectorAll('.elBlock.KY')

    if (localStorage.getItem('language') === "RU") {
        blockElements_RU.forEach((item, index) => {
            item.classList.remove('hidden')
        })
        blockElements_KY.forEach((item, index) => {
            item.classList.add('hidden')
        })
    } else if (localStorage.getItem('language') === "KY") {
        blockElements_KY.forEach((item, index) => {
            item.classList.remove('hidden')
        })
        blockElements_RU.forEach((item, index) => {
            item.classList.add('hidden')
        })
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'RU';

    if (typeof loadLanguage === 'function') {
        loadLanguage(savedLang);
    }

    if (typeof updateLanguageButtons === 'function') {
        updateLanguageButtons();
    }

    if (typeof updateBookLang === 'function') {
        updateBookLang();
    }

    if (typeof changeLang === 'function') {
        changeLang(savedLang);
    }

    if (typeof loadStaff === 'function') {
        loadStaff(savedLang);
    }
});

