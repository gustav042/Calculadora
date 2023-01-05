var visor = window.document.querySelector('div.visor')
var num1 = ''
var num2 = ''
var op = ''
var first = 0


document.querySelectorAll('input').forEach(el => {
    el.addEventListener('click', () => {
        digit_pressed(el.value);
    });
});

function digit_pressed(digit) {
    if (digit == '=') {
        visor.innerHTML = "";
        switch(op) {
            case '+':
                visor.innerHTML = Number(num1) + Number(num2);
                break;
            case '-':
                visor.innerHTML = Number(num1) - Number(num2);
                break;
            case '/':
                visor.innerHTML = Number(num1) / Number(num2);
                break;
            default:
                visor.innerHTML = Number(num1) * Number(num2);
          }
        num1 = ''
        num2 = ''
    }
    else if (digit == 'DEL') {
        visor.innerHTML = "";
        first = 0;
        num1 = ''
        num2 = ''
        
    }
    else if (digit == '/' || digit == 'x' || (digit == '-' && num1 != '' )|| digit == '+')
    {
        first = 1
        op = digit;
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