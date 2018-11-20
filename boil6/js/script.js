console.log('Ты на ' +window.location);

var numeric = prompt('Введите число');
numeric = parseFloat(numeric);
 
(numeric > 0) ? console.log(numeric) : console.log(-numeric);