const output = document.querySelector('.result');
const reset = document.querySelector('.clear');
const percentage = document.querySelector('.percent');

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
    'mulitply': document.querySelector('.multiply'),
    'add': document.querySelector('.plus'),
    'subtract': document.querySelector('.subtract'),
    'divide': document.querySelector('.divide'),
}

/* max output length: 14 */

output.textContent = 0;


for (let num in nums) {
    nums[num].addEventListener('click', () => {
        output.textContent = nums[num].textContent;
    });
}

reset.addEventListener('click', () => { output.textContent = 0})

percentage.addEventListener('click', () => { output.textContent = Number(output.textContent)/100})
