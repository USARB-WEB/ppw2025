const person = [
    "Vladislav",
    "Gorea",
    2006,
    7,
    20,
    "+37369999999",
    1015.00,
    "34654465436353469",
    null
]

console.log(person);

console.log("First Name: " + person[0]);
console.log("Last Name: " + person[1]);

const currentYear = new Date().getFullYear();
const age = currentYear - person[2];
console.log("Age: " + age);

person[6] += 500;
console.log("Updated balance: " + person[6]);

const personObject = {
    firstName: "Vladislav",
    lastName: "Gorea",
    birthYear: 2006,
    birthMonth: 7,
    birthDay: 20,
    phoneNumber: "+37369999999",
    balance: 1015.00,
    cardNumber: "34654465436353469",
    address: null
};

console.log(personObject);
console.log("First Name: " + personObject.firstName);
console.log("Last Name: " + personObject.lastName);

const ageObject = currentYear - personObject.birthYear;
console.log("Age: " + ageObject);

personObject.balance += 500;
console.log("Updated balance: " + personObject.balance);

for (const key in personObject) {
    if (!Object.hasOwn(personObject, key)) continue;

    console.log(key + ": " + personObject[key]);
}

for (const value of Object.values(personObject)) {
    console.log(value);
}