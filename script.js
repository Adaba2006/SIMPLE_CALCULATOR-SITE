let display = document.getElementById('display');
let isOn = true;

function aper(number) {
    if (!isOn) return;
    if (display.value === '0' || display.value === 'Error') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function adop(operator) {
    if (!isOn || display.value === '') return;
    const lastChar = display.value[display.value.length - 1];
    if ('+-*/'.includes(lastChar) && operator !== '(') {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function clearup(){
    if (!isOn) return;
    display.value = '0';
}

function deleteb() {
    if (!isOn) return;
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function cal() {
    if (!isOn) return;
    try {
        display.value = eval(display.value.replace(/x/g, '*'));
    } catch {
        display.value = 'Error';
    }
}

function tOff() {
    isOn = false;
    display.value = '';
}

function tOn() {
    isOn = true;
    display.value = '0';
}
