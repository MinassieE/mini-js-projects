// alert("hello");
let buttons = document.querySelectorAll('.btn');
let textBox = document.querySelector("input");
let input = "";

let numbers = [];
let number = 0.0;

let currentOperator = null;

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        let clicked = this.innerText;

        if(this.classList.contains('num')){
            hundleInput(clicked);
        }
        else if(this.classList.contains('clear')){
            clearTextBox();
        }
        else if (this.classList.contains('equals')){
            calculate();
        }
        else if(this.classList.contains('operation')){
            hundleOperation(clicked);
        }
    })
}

function hundleInput(clicked){
    input += clicked;
    textBox.value = input;

    number = parseFloat(input);
}

function clearTextBox(){
    textBox.value = "";
    numbers.length = 0;
    number = 0.0;
    input = "";
}

function hundleOperation(operand){
    numbers.push(number);
    number = 0.0;
    input = "";
    textBox.value = operand;
    currentOperator = operand;
}

function calculate(){
    console.log("calculating");
    let result = 0;
    numbers.push(number);
    switch(currentOperator){
        case '+':
            result = numbers[0] + numbers[1];
            break;
        case '-':
            result = numbers[0] - numbers[1];
            break;
        case '*':
            result = numbers[0] * numbers[1];
            break;
        case '/':
            result = numbers[0] / numbers[1];
            break;
    }
    clearTextBox();
    textBox.value = result.toString();
    console.log(result);
}



