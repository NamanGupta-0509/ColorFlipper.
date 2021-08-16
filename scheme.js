const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const value1 = document.getElementById('value-1');
const value2 = document.getElementById('value-2');
const value3 = document.getElementById('value-3');
const value4 = document.getElementById('value-4');

const buttonAll = document.querySelector('.btn-all');

const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');
const button3 = document.querySelector('.btn-3');
const button4 = document.querySelector('.btn-4');

const div1 = document.querySelector('.color-1');
const div2 = document.querySelector('.color-2');
const div3 = document.querySelector('.color-3');
const div4 = document.querySelector('.color-4');


button1.addEventListener("click", function() {
    div1.style.backgroundColor = getHex();
    value1.textContent = getHex();
});
button2.addEventListener("click", function() {
    div2.style.backgroundColor = getHex();
    value2.textContent = getHex();
});
button3.addEventListener("click", function() {
    div3.style.backgroundColor = getHex();
    value3.textContent = getHex();
});
button4.addEventListener("click", function() {
    div4.style.backgroundColor = getHex();
    value4.textContent = getHex();
});

buttonAll.addEventListener("click", function() {
    div1.style.backgroundColor = getHex();
    value1.textContent = getHex();
    div2.style.backgroundColor = getHex();
    value2.textContent = getHex();
    div3.style.backgroundColor = getHex();
    value3.textContent = getHex();
    div4.style.backgroundColor = getHex();
    value4.textContent = getHex();
})

function getHex() {
    let hexValue = '#';
    for(let i=0; i<6; i++){
        hexValue += colors[Math.floor(Math.random() * colors.length)];
    }
    return hexValue;
}


////////// Code to copy text on click ///////////
const copy1 = document.querySelector('#copy-1');

value1.addEventListener("click", function() {
    showCopied(value1);
});

value2.addEventListener("click", function() {
    showCopied(value2);
});

value3.addEventListener("click", function() {
    showCopied(value3);
});

value4.addEventListener("click", function() {
    showCopied(value4);
});


function showCopied(value) {
    let textToCopy = value.innerText;
    function listener(e) {
        e.clipboardData.setData('text/plain', textToCopy.slice(1));
        e.preventDefault();
      }
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    setTimeout(() => {
        value.innerText = 'Copied!';
        value.style.transform = "scale(0.9)";
        value.style.transition = "transform 0.2s";
    }, 0);
    setTimeout(() => {
        value.style.transform = "scale(1)";
        value.style.transition = "transform 0.2s";
    }, 200);
    setTimeout(() => {
        value.innerText = textToCopy;
        value.style.transform = "";
        value.style.transition = "";
    }, 1000);
}