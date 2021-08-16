const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const value = document.getElementById('value');
const button = document.querySelector('#btn');

button.addEventListener("click", function() {
    let hexValue = '#';
    for(let i=0; i<6; i++){
        hexValue += colors[getRandom()];
    }
    document.body.style.backgroundColor = hexValue;
    value.textContent = hexValue;
});

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}