const output = document.querySelector('.result');
const reset = document.querySelector('.clear');
const percentage = document.querySelector('.percent');
const decimal = document.querySelector('.decimal');
let first = [];
let second = [];
let operation = [];
let percent = '';

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

/* max output length: 14 */

output.textContent = 0;


for (let num in nums) {
    nums[num].addEventListener('click', () => {
        if (operation.length == 0){
        first.push(nums[num].textContent);
        output.textContent = first.join('');
        } else {
            second.push(nums[num].textContent);
            output.textContent = second.join('');
        };
    });
}

for (let ops in operators) {
    operators[ops].addEventListener('click', () => {
        if (operation.length == 0) {
            operation.push(operators[ops].textContent);
            output.textContent = operation;
        } else {
            operation.length = 0;
            operation.push(operators[ops].textContent);
            output.textContent = operation;
        };
    })
}

reset.addEventListener('click', () => { 
    output.textContent = 0;
    first.length = 0;
    operation.length = 0;
    second.length = 0;

})

percentage.addEventListener('click', () => {
    percent = first.join('');
    first.length = 0;
    first.push(percent/100);
    output.textContent = first;
})

decimal.addEventListener('click', () => {
    if (output.textContent[0] == 0 && output.textContent[1] != '.' && operation.length == 0) {
        output.textContent += decimal.textContent;
    } 
})
