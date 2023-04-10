
let buttons = document.querySelectorAll('.btn');
let textBox = document.querySelector("input");
let input = "";

let numbers = [];
let operators = [];
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
    operators.length = 0;
    number = 0.0;
    input = "";
}

function hundleOperation(operand){
    numbers.push(number);
    number = 0.0;
    input = "";
    textBox.value = operand;
    // currentOperator = operand;
    operators.push(operand);
}

function calculate(){
    console.log("calculating");
    let result = numbers[0];
    numbers.push(number);

    for(let i=0; i<operators.length; i++){
        currentOperator = operators[i];
        number = numbers[i+1];
        
        switch(currentOperator){
            case '+':
                result += number;
                break;
            case '-':
                result -= number;
                break;
            case '*':
                result *= number;
                break;
            case '/':
                result /= number;
                break;
        }
    }
    // clearTextBox();
    
    input = "";
    textBox.value = "";
    numbers.length = 0;
    operators.length = 0;

    numbers.push(result);
    textBox.value = result.toString();
    result = numbers[0];
}



