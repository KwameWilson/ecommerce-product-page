const left = document.querySelector('.left');
const heroImg = document.querySelector('.hero-img');
// const link = document.querySelector()


const getPath = e => {

    if (e.target.tagName === 'IMG') {
        const path = e.target.getAttribute('src')
        const smallImg = path.split('/')[1];
        console.log(smallImg);
    }
}

left.addEventListener("click", getPath);