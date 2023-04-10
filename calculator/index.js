//access the html elements (DOM)
let buttons = document.querySelectorAll('.btn');
let textBox = document.querySelector("input");

//variable to store and concatinate the user input
let input = "";

//stacks for storing and handling precedence
let numbers = [];
let operators = [];


let number = 0.0;
let currentOperator = null;

// flag to check if their is a continuing number from previous calculation
let fromPrevious = false;

//this for loop adds an event listner on our button
//and it calls certain function based on the buttons that are touched
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

//this function is called when ever a "number button" is pressed
// it hundles the number that the user enters
function hundleInput(clicked){
    input += clicked;
    textBox.value = input;

    number = parseFloat(input);
}

// called when "clear" button is touched
// it clears all the neccessary variables
function clearTextBox(){
    textBox.value = "";
    numbers.length = 0;
    operators.length = 0;
    number = 0.0;
    input = "";
    fromPrevious = false;
}

// called when an "operator" is entered
// handles the operator storage and the precedence
function hundleOperation(operand){
    if(!fromPrevious){
        numbers.push(number);
    }
    number = 0.0;
    input = "";
    textBox.value = operand;
    operators.push(operand);
    fromPrevious = false;
}

// called when user enters "equal sign"
// performs all the calculation based on the operaror and numbers stack
function calculate(){
    let result = numbers[0];
    let num;
    numbers.push(number);

    for(let i=0; i<operators.length; i++){
        currentOperator = operators[i];
        num = numbers[i+1];
        
        switch(currentOperator){
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                result /= num;
                break;
        }
    }
    clearTextBox();
    
    // stores the final result in the numbers array, incase the user wants to use it (in the immediate next calculation)
    numbers.push(result);
    fromPrevious = true;
    textBox.value = result.toString();
}



