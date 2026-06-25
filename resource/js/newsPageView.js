const mainImg = document.querySelector('.mainImg');

document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index + 1;
        // body.style.overflow = 'hidden';
        mainImg.src = item.src;
    });
});

