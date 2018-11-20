console.log('Ты на ' +window.location);

const Colored = document.get('.colored');
console.log(Colored);


console.log(Colored.style);
let quest = prompt('Цвет');
Colored.style.backgroundColor = quest;
