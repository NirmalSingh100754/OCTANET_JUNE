const images = [
    'nr1.png',
    'c3.jpg',
    'bk1.jpeg','mv1.jpeg'
];
let currentIndex = 0;
const imageElement = document.querySelector('.text .images');
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.style.backgroundImage = `url(${images[currentIndex]})`;
}
setInterval(changeImage, 3000);
imageElement.style.backgroundImage = `url(${images[currentIndex]})`;
