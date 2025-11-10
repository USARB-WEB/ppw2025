document.body.style.backgroundColor = "lightblue";
document.getElementById("demo").innerHTML = "Hello JavaScript DOM! 123";

const colors = ["red", "green", "blue", "yellow", "purple"];
let i = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[i];
    if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
}, 1000);


let counter = 10;
setInterval(() => {
    document.getElementById("demo").innerHTML = `Counter: ${counter}`;
    counter--;

    if (counter < 0) {
        document.body.innerHTML = 'END';
    }
}, 1000);





