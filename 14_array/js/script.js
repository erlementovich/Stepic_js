let people = ['vasa','peta','kola'];
console.log(people);

console.log(people[1]);
people[1] = 'yura';
console.log(people[1]);
console.log(people.length);

let bigArray = [
    [1,2,3],
    [true,false],
    ['a','b','c']
]

console.log(bigArray[0][2]);

let bigObject = {
    names: ['vasa','peta','kola'],
    grades: [
        {
            intern: 1,
            junior: 2
        },
        {
            middle: 3,
            senior: 2
        }
    ]
}

console.log(bigObject.names[1]);
console.log(bigObject.grades[1].middle);
