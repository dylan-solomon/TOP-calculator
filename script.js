const output = document.querySelector('.result');
const reset = document.querySelector('.clear');
const percentage = document.querySelector('.percent');
const decimal = document.querySelector('.decimal');
const solve = document.querySelector('.equals');
let first = [];
let second = [];
let operation = [];

const nums = {
    1: document.getElementById('one'),
    2: document.getElementById('two'),
    3: document.getElementById('three'),
    4: document.getElementById('four'),
    5: document.getElementById('five'),
    6: document.getElementById('six'),
    7: document.getElementById('seven'),
    8: document.getElementById('eight'),
    9: document.getElementById('nine'),
    0: document.getElementById('zero'),
}

const operators = {
    'multiply': document.querySelector('.multiply'),
    'add': document.querySelector('.plus'),
    'subtract': document.querySelector('.subtract'),
    'divide': document.querySelector('.divide'),
}

const myLocale = {
    maximumFractionDigits: '7',
    minimumFractionDigits: '2',
    maximumSignificantDigits: '11',
}

for (let num in nums) {
    nums[num].addEventListener('click', () => {
        let localeNumber;
        if (operation.length == 0){
            reset.textContent = 'C'
            sizeLimit(first.push(nums[num].textContent));
            localeNumber = Number(first.join('')).toLocaleString('en-US', myLocale);
            output.textContent = localeNumber;
        } else {
            sizeLimit(second.push(nums[num].textContent));
            localeNumber = Number(second.join('')).toLocaleString('en-US', myLocale);
            output.textContent = localeNumber;
        };
    });
}

for (let ops in operators) {
    operators[ops].addEventListener('click', () => {
        operation.length = 0;
        second.length = 0;
        operation.push(operators[ops].textContent);
        output.textContent = operation;
    });
}

/* CLEAR BUTTON */

reset.addEventListener('click', () => { 
    output.textContent = 0;
    if (second.length>0) {
        second.length = 0;
    } else {
        first.length = 0;
        reset.textContent = 'AC'
        operation.length = 0;
        second.length = 0;
    };
})

/* PERCENT BUTTON */

percentage.addEventListener('click', () => {
    let localeNumber;
    let percent = first.join('');
    first.length = 0;
    first.push(percent/100);
    localeNumber = Number(first).toLocaleString('en-US', myLocale);
    output.textContent = localeNumber;
})

/* DECIMAL BUTTON */

decimal.addEventListener('click', () => {
    let localeNumber;
    if (output.textContent[0] == 0 && output.textContent[1] != decimal.textContent && operation.length == 0) {
        first.push(0, '.');
        output.textContent = first.join('');
    } else if (first.length> 0 && !first.includes('.') && operation.length == 0) {
        sizeLimit(first.push(decimal.textContent));
        localeNumber = first.join('').toLocaleString('en-US', myLocale);
        output.textContent = localeNumber;
    } else if (operation.length> 0 && second.length == 0) {
        second.push(decimal.textContent);
        output.textContent = `0` + `${decimal.textContent}`;
    } else if (second.length > 0 && !second.includes('.')) {
        sizeLimit(second.push(decimal.textContent));
        localeNumber = second.join('').toLocaleString('en-US', myLocale);
        output.textContent = localeNumber;
    };
})

/* EQUALS BUTTON */

solve.addEventListener('click', doMath);

/* MATH OPERATIONS */

function multiply(a,b){
    if (b.length>0) {
        let result = Number(a.join('')) * Number(b.join(''));
        second.length = 0;
        first.length = 0;
        first.push(result);
        output.textContent = result.toLocaleString('en-US', myLocale);
    };
}

function subtract(a,b){
    if (b.length>0) {
        let result = Number(a.join('')) - Number(b.join(''));
        second.length = 0;
        first.length = 0;
        first.push(result);
        output.textContent = result.toLocaleString('en-US', myLocale);
    };
}

function divide(a,b){
    if (b.length>0) {
        if (b == 0) {
            output.textContent = 'Error'
        } else {
        let result = Number(a.join('')) / Number(b.join(''));
        second.length = 0;
        first.length = 0;
        first.push(result)
        output.textContent = result.toLocaleString('en-US', myLocale);
        }
    };
}

function add(a,b){
    if (b.length>0) {
        let result = Number(a.join('')) + Number(b.join(''));
        second.length = 0;
        first.length = 0;
        first.push(result);
        output.textContent = result.toLocaleString('en-US', myLocale);
    };
}

/* DO THE MATH FUNCTION */

function doMath() {
    if (operation.includes('x')) {
        multiply(first, second);
    } else if (operation.includes('-')) {
        subtract(first,second);
    } else if (operation.includes('+')) {
        add(first,second);
    } else if (operation.includes('÷')) {
        divide(first,second);
    }
}   

function sizeLimit (count) {
    if (first.length > 11 && second.length > 11) {
        first.length = 11;
        second.length = 11;
    } else if (first.length > 11) {
        first.length = 11;
    } else if (second.length > 11) {
        second.length = 11;
    }
}