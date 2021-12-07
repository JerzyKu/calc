
const dispCurrent = document.querySelector('.display-current')
const dispPrev = document.querySelector('.display-prev')
const numbers = document.querySelectorAll('.digit')
const bs = document.querySelector('.bs')
const ac = document.querySelector('.ac')
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')

numbers.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.innerHTML);
        // console.log(dispCurrent.innerHTML);
        if (item.innerHTML == '•') {
            if (dispCurrent.innerHTML.includes('.')) {
                return
            }
            dispCurrent.innerHTML += '.'
            return
        }
        if (item.innerHTML == '0' && dispCurrent.innerHTML == '') {
            return
        }
        dispCurrent.innerHTML += item.innerHTML
    })
})

bs.addEventListener('click', () => {
    dispCurrent.innerHTML = dispCurrent.innerHTML.slice(0, dispCurrent.innerHTML.length - 1)
})

ac.addEventListener('click', () => {
    dispCurrent.innerHTML = ''
    dispPrev.innerHTML = ''
})

operator.forEach((item) => {
    item.addEventListener('click', () => {
        if (dispPrev.innerHTML == dispCurrent.innerHTML && dispPrev.innerHTML == '') {
            console.log('operator 1 if ');
            return
        }
        if (dispCurrent.innerHTML == '') {
            dispPrev.innerHTML = dispPrev.innerHTML.slice(0, dispPrev.innerHTML.length - 1) + item.innerHTML
            console.log('operator 2 if ');
            return
        }
        if (dispCurrent != '') {
            equal.click()
        }
        dispPrev.innerHTML = dispCurrent.innerHTML
        dispPrev.innerHTML += item.innerHTML
        dispCurrent.innerHTML = ''
    })
})

equal.addEventListener('click', () => {
    currenValue = dispCurrent.innerHTML
    prevValue = dispPrev.innerHTML

    if (prevValue == '' || currenValue == '') {
        console.log('return');
        return
    }

    let valueA = parseFloat(prevValue)
    let operant = prevValue[prevValue.length - 1]
    let valueB = parseFloat(currenValue)
    console.log(valueA, operant, valueB);
    let result
    switch (operant) {
        case '+':
            result = valueA + valueB
            break;
        case '÷':
            result = valueA / valueB
            break;
        case '-':
            result = valueA - valueB
            break;
        case '*':
            result = valueA * valueB
            break;
        case '^':
            result = Math.pow(valueA, valueB)
            break;
        case 'g':
            result = Math.log(valueB) / Math.log(valueA)
            break;
        case '√':
            result = Math.pow(valueB, 1 / valueA)
            break;
        case '%':
            result = valueB * 100 / valueA
            break;

        default:
            result = 'Error :/'
            break;
    }

    dispPrev.innerHTML = ''
    dispCurrent.innerHTML = result.toString()
})


document.addEventListener('keydown', event => {
    console.log('ket: ', event.key);

    switch (event.key) {
        case '1':
            document.querySelector('.digit-1').click()
            break;
        case '2':
            document.querySelector('.digit-2').click()
            break;
        case '3':
            document.querySelector('.digit-3').click()
            break;
        case '4':
            document.querySelector('.digit-4').click()
            break;
        case '5':
            document.querySelector('.digit-5').click()
            break;
        case '6':
            document.querySelector('.digit-6').click()
            break;
        case '7':
            document.querySelector('.digit-7').click()
            break;
        case '8':
            document.querySelector('.digit-8').click()
            break;
        case '9':
            document.querySelector('.digit-9').click()
            break;
        case '0':
            document.querySelector('.digit-0').click()
            break;

        case 'Backspace':
            document.querySelector('.bs').click()
            break;
        case 'Escape':
            document.querySelector('.ac').click()
            break;
        case 'Enter':
        case '=':
            document.querySelector('.equal').click()
            break;

        case '+':
            document.querySelector('.operator-sum').click()
            break;
        case '-':
            document.querySelector('.operator-subtraction').click()
            break;
        case '/':
            document.querySelector('.operator-division').click()
            break;
        case '*':
            document.querySelector('.operator-multiplication').click()
            break;
        default:
            result = 'Error :/'
            break;
    }
})