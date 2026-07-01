let items = []
const itemsPerPage = 20

const pageLeft = document.getElementById('pageLeft')
const pageRight = document.getElementById('pageRight')

const pageButtons = [
	document.getElementById('pageBtn-1'),
	document.getElementById('pageBtn-2'),
	document.getElementById('pageBtn-3'),
	document.getElementById('pageBtn-4'),
	document.getElementById('pageBtn-5')
]

let totalPages = 0

let currentPage = getPageFromUrl()

function initPagination() {

    items = document.querySelectorAll('.elBlock')

    totalPages = Math.ceil(items.length / itemsPerPage)

    currentPage = getPageFromUrl()

    if (totalPages > 0) {
        showPage(currentPage)
    }
}

function getPageFromUrl() {
	const params = new URLSearchParams(window.location.search)
	const page = Number(params.get('page'))

	if (!page || page < 1) {
		return 1
	}

	if (page > totalPages) {
		return totalPages
	}
		return page
}
function setPageToUrl(page) {
	const params = new URLSearchParams(window.location.search)
	params.set('page', page)
	const newUrl = `${window.location.pathname}?${params.toString()}`
	history.pushState(null, '', newUrl)
}

function showPage(page) {
	currentPage = page
	const start = (page - 1) * itemsPerPage
	const end = start + itemsPerPage
	items.forEach((item, index) => {
		if (index >= start && index < end) {
			item.style.display = ''
		} else {
			item.style.display = 'none'
		}
	})
	updatePaginationButtons()
	setPageToUrl(page)
}

function updatePaginationButtons() {
	pageLeft.classList.toggle('disabled', currentPage === 1)
	pageRight.classList.toggle('disabled', currentPage === totalPages)
	let startPage = currentPage - 2

	if (startPage < 1) {
		startPage = 1
	}

	if (startPage + 4 > totalPages) {
		startPage = totalPages - 4
	}
	if (startPage < 1) {
		startPage = 1
	}
	pageButtons.forEach((button, index) => {
		const pageNumber = startPage + index
		if (pageNumber > totalPages) {
			button.style.display = 'none'
			return
		}
		button.style.display = ''
		button.textContent = pageNumber
		button.classList.toggle('active', pageNumber === currentPage)
		button.onclick = function() {
			showPage(pageNumber)
		}
	})
}

pageLeft.addEventListener('click', function() {
	if (currentPage > 1) {
		showPage(currentPage - 1)
	}
})

pageRight.addEventListener('click', function() {
	if (currentPage < totalPages) {
		showPage(currentPage + 1)
	}
})

window.addEventListener('popstate', function() {
	currentPage = getPageFromUrl()
	showPage(currentPage)
})

