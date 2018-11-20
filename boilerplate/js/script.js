console.log('Ты на ' +window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byID = document.getElementById('myId');

console.log(byTag,byClass,byID);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

const quest = prompt('Что хотите написать на странице?')

byID.innerHTML = quest;