alert("Hello, World!");

const name = prompt("What is your name?");
alert(`Welcome, ${name}!`);

const age = prompt("How old are you?");
if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}

if (confirm("Do you like programming?")) {
    alert("That's great to hear!");
} else {
    alert("Oh no! Maybe give it another try.");
}