console.log('Ты на ' +window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Ваш выбор: 0 - камень, 1 - ножницы, 2 - бумага'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);


if (player == computer) {
console.log('Повторить');
} else if (player == rock && computer == scissors) {
console.log('player win');
} else if (player == rock && computer == paper) {
console.log('computer win');
} else if (player == scissors && computer == rock) {
console.log('computer win');
} else if (player == scissors && computer == paper) {
console.log('player win');
} else if (player == paper && computer == rock) {
console.log('player win');
} else if (player == paper && computer == scissors) {
console.log('computer win');
}


console.log('player = ' +player);
console.log('computer = ' +computer);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'