const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;


console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);


// Create an array with the numbers above
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 1) {
        console.log(numbers[i]);
    }
}

const persons = ["Ion Creanga", "Mihai Eminescu", "George Cosbuc"];

console.log(persons[2]);

console.log(persons);
//persons[0] = "Vasile Alecsandri";
persons.splice(1, 0, "Alexandru Ioan Cuza");
console.log(persons);

console.log(persons.splice(-1, 1));

persons.forEach(function(person, index) {
    console.log(index + ": " + person);
})


for (const key in persons) {
    if (!Object.hasOwn(persons, key)) continue;
    
    console.log(key + ": " + persons[key]);
}

for (const person of persons) {
    console.log(person);
}


console.log(numbers.map((n) => n ** 2));

const sentence = "Azi este o zi frumoasa";
const words = sentence.split(" ");
console.log(words);

console.log(words.join("-"));

const randomNumbers = [5, 3, 8, 1, 4, -1, 5, 0, -50, 23];

console.log(randomNumbers.filter(n => n > 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0));





