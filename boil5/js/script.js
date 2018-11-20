console.log('Ты на ' +window.location);

var numeric = prompt('Введите число');
numeric = parseFloat(numeric);
 
if (numeric>0) {
    console.log(numeric);
} else {
    console.log(-numeric);
}