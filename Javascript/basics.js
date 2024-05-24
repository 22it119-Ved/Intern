let person = {
    name: 'xyz',
    age: 30
};

person.name = 'abc';

console.log(person.name);

let colors = ['red', 'blue'];
colors[2]=1;
console.log(colors);
console.log(colors[1]);

function greet( firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}

greet('Abc', 'def');
greet('xyz');

function square(number) {
    return number * number;
}

console.log(square(2));0