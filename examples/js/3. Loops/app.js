console.log("No loop");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("Using FOR");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Using WHILE");
let i = 1;
while ( i <= 5) {
    console.log(i);
    i++
}

console.log("Using DO WHILE");
let j = 1;
do {
    console.log(j);
    j++
}while ( j <= 5)


let number;

do{
    number = parseInt(prompt("Enter a number (0 to stop): "));
    console.log("You entered: " + number);
} while(number !== 0)