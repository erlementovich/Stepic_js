console.log('u r at' +window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer); //выделяем число

if(answer<18) {
    Image.style.backgroundImage = "url(img/school.png)";
} else if (answer<=25) {
    Image.style.backgroundImage = "url(img/Party.jpg)";
}else if (answer<=55) {
    Image.style.backgroundImage = "url(img/pub.jpg)";
} else {
    Image.style.backgroundImage = "url(img/home.png)";

}