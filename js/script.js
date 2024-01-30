const left = document.querySelector('.left');
const heroImg = document.querySelector('.hero-img');
const thumbnails = document.querySelectorAll('.thumb')
// const link = document.querySelector()


thumbnails.forEach(e => {
    e.addEventListener('click', () => {
        heroImg.setAttribute('src', e.getAttribute('data-url'))
    })
})