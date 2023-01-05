var visor = window.document.querySelector('div.visor')
var num1 = ''
var num2 = ''
var op = ''
var first = 0
var last = ''
var equal = 0

document.querySelectorAll('input').forEach(el => {
    el.addEventListener('click', () => {
        digit_pressed(el.value);
    });
});

function digit_pressed(digit) {
    if((digit == 'CE' || digit == 'DEL') && (num1 != ''))
    {
        if(num1 == '')
        {
            visor.innerHTML = '';
        }
        erase()
    }
    else if (digit == '=' && equal == 0)  
    {
        visor.innerHTML = "";
        switch(op) 
            {
            case '+':
                visor.innerHTML += 'number2: ' + num2;
                visor.innerHTML = Number(num1) + Number(num2);
                break;
            case '-':
                visor.innerHTML = Number(num1) - Number(num2);
                break;
            case '/':
                visor.innerHTML = Number(num1) / Number(num2);
                break;
            case '*':
                visor.innerHTML = Number(num1) * Number(num2);
            default:
                visor.innerHTML = num1;
            }
        first = 0;
        num1 = '';
        num2 = '';
        equal = 1;
        
    }
    else if (digit == 'C') {
        visor.innerHTML = "";
        first = 0;
        num1 = ''
        num2 = ''
        equal = 0;
        
    }
    else if ((digit == '/' || digit == 'x' || (digit == '-' && num1 != '' )|| digit == '+'))
    {
        if(first == 0 && num1 != '')
        {
            first = 1
            op = digit;
            last = digit
            visor.innerHTML += digit;
        }
    }
    else if ((digit != 'CE' && digit != 'DEL') && (equal == 0)) {
        if (first == 0)
        {
            num1 += digit;
        }
        else
        {
            num2 += digit;
        }
        last = digit
        visor.innerHTML += digit;
    }
}

function erase()
{
    if (last == '/' || last == 'x' || (last == '-' && num1 != '' )|| last == '+')
    {
        first = 0
        op = '';
        visor.innerHTML = visor.innerHTML.slice(0, -1);

    }
    else {
        if (first == 0)
        {
            num1 = visor.innerHTML.slice(0, -1);
        }
        else
        {
            var size = num1.length;
            num2 = visor.innerHTML.slice(size, -1);
        }
        visor.innerHTML = visor.innerHTML.slice(0, -1);
    }
}