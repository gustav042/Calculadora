var visor = window.document.querySelector('div.visor')
var num1
var num2
var first = 0


document.querySelectorAll('input').forEach(el => {
    el.addEventListener('click', () => {
        digit_pressed(el.value);
    });
});
function digit_pressed(digit) {
    if (digit == '=') {
        visor.innerHTML = "";
        visor.innerHTML = Number(num1) + Number(num2);
    }
    else if (digit == 'DEL') {
        visor.innerHTML = "";
        first = 0;
    }
    else if (digit == '/' || digit == 'x' || digit == '-' || digit == '+')
    {
        first = 1
        visor.innerHTML += digit;

    }
    else {
        if (first == 0)
        {
            num1 += digit;
        }
        else
        {
            num2 += digit;
        }
        visor.innerHTML += digit;

    }
}