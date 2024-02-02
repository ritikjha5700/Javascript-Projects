let currentDisplay = '';
var display = document.querySelector('#display');
var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        handleButtonClick(this.textContent);
    });
}

function handleButtonClick(value) {
    if (value === 'C') {
        currentDisplay = '';
    } else if (value === '=') {
        let result = eval(currentDisplay);
        console.log(result);
        currentDisplay = result;
    } else if (value === 'x') {
        currentDisplay = currentDisplay.slice(0, -1);
    } else {
        currentDisplay += value;
    }

    display.value = currentDisplay;
}
