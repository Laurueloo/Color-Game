// alert('Hello World');

function generateColor() {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return [red, green, blue]
}
// console.log(generateColor());

let colorChangerVariable = document.getElementById("colorChanger");
console.log(colorChangerVariable);
let starterColor = generateColor(); // [123,231,231]
colorChangerVariable.innerHTML = `You're color: (${starterColor}).` // RGB(123,231,231)

let position = Math.floor(Math.random() * 6) + 1;

for (let i = 1; i <= 6; i++){
    let newButton = document.getElementById(`button${i}`);
    newButton.style.backgroundColor = `rgb(${generateColor()})`
    newButton.addEventListener('click', function() { 
        if (i === position){
            alert("YOU ARE SO AMAZING, TALENTED AND SMART IM REALLY PROUD OF YOU :) <3");
            window.location.reload();
        } else {
            alert("Haha loser, try again.");
        }
    });
}

let answerButton = document.getElementById(`button${position}`);
answerButton.style.backgroundColor = `rgb(${starterColor})`;