async function loadBooks() {

    try {

        const response = await fetch('/templates/News/news.json');

        const books = await response.json();

        renderBooks(books);

        initPagination()

        updateBookLang()

    } catch (error) {

        console.error('Ошибка загрузки:', error);

    }

}

function renderBooks(books) {

    const catalog = document.querySelector('.newsBlock');

    catalog.innerHTML = '';

    books.forEach(book => {

        const card_RU = document.createElement('div');
        const card_KY = document.createElement('div');

        card_RU.className = 'newsBox elBlock RU';
        card_KY.className = 'newsBox elBlock KY';

        card_RU.innerHTML = `
            <img src="news/news-${book.id}/cover.jpg" alt="">
            <div class="newsBoxInfo">
            <a href="News-page.html" class="newsBoxTitle">${book.title_RU}</a>
                <p class="newsBoxDesc">${book.description_RU}</p>
                <span class="newsBoxDate">${book.date}</span>
            </div>
        `;

        card_KY.innerHTML = `
            <img src="news/news-${book.id}/cover.jpg" alt="">
            <div class="newsBoxInfo">
            <a href="News-page.html" class="newsBoxTitle">${book.title_KY}</a>
                <p class="newsBoxDesc">${book.description_KY}</p>
                <span class="newsBoxDate">${book.date}</span>
            </div>
        `;

        catalog.appendChild(card_RU);
        catalog.appendChild(card_KY);

    });

}



document.addEventListener('DOMContentLoaded', loadBooks);