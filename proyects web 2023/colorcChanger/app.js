/*const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener("click", function (){
    const randomColor = getRandomColor();
    console.log(randomColor);
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}*/

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let colorHex = "#";
    for(let i = 0; i < 6; i++){
        colorHex += hex[getRandomColor()];
    }

    color.textContent = colorHex;
    document.body.style.backgroundColor = colorHex;
});

function getRandomColor(){
    return Math.floor(Math.random() * hex.length);
}