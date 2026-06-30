async function loadBooks() {

    try {

        const response = await fetch('/templates/Book-catalog/books.json');

        const books = await response.json();

        renderBooks(books);

        initPagination()

        updateBookLang()

    } catch (error) {

        console.error('Ошибка загрузки:', error);

    }

}

function renderBooks(books) {

    const catalog = document.querySelector('.bookCatalog');

    catalog.innerHTML = '';

    books.forEach(book => {

        const card_RU = document.createElement('div');
        const card_KY = document.createElement('div');

        card_RU.className = 'elBook elBlock RU';
        card_KY.className = 'elBook elBlock KY';

        card_RU.innerHTML = `
            <img
                src="books/book-${book.id}/cover.jpg"
                alt="${book.title}"
            >

            <div class="elBookInfo">

                <span class="elBookTitle">
                    Название:
                    <span style="color:#000;">
                        ${book.title}
                    </span>
                </span>

                <span class="elBookAuthor">
                    Автор:
                    <span style="color:#000;">
                        ${book.author}
                    </span>
                </span>

                <br>

                <p class="elBookDesc">
                    Описание:
                    <span style="color:#000;" >
                        ${book.description_RU}
                    </span>
                </p>

                <a
                    href="books/book-${book.id}/book.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Открыть книгу
                </a>

            </div>
        `;

        card_KY.innerHTML = `
            <img
                src="books/book-${book.id}/cover.jpg"
                alt="${book.title}"
            >

            <div class="elBookInfo">

                <span class="elBookTitle">
                    Аталышы:
                    <span style="color:#000;">
                        ${book.title}
                    </span>
                </span>

                <span class="elBookAuthor">
                    Автору:
                    <span style="color:#000;">
                        ${book.author}
                    </span>
                </span>

                <br>

                <p class="elBookDesc">
                    Баяндоо:
                    <span style="color:#000;" >
                        ${book.description_KY}
                    </span>
                </p>

                <a
                    href="books/book-${book.id}/book.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Китеп ачуу
                </a>

            </div>
        `;

        catalog.appendChild(card_RU);
        catalog.appendChild(card_KY);

    });

}



document.addEventListener('DOMContentLoaded', loadBooks);