console.log('Ты на '+window.location);
const image = document.querySelector('img');

image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));

console.log(image.getAttribute('src'));
image.setAttribute('src','img/yandex.png')
console.log(image.getAttribute('src'));