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
    loadLanguage(lang);
    updateLanguageButtons();
    updateBookLang()
    loadStaff(lang)
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

    loadLanguage(savedLang);
    updateLanguageButtons();
    updateBookLang()
    loadStaff(savedLang)
});

