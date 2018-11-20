console.log('Ты на ' +window.location);

let haveEnough = function(money, apple_count, bread_count, apple, bread) {
    if (money>=apple_count*apple+bread_count*bread)
        return alert('Хватает денег)))');
    else 
        return alert('Не хватает денег(((');

}

haveEnough (1743, 40,3,50,30);