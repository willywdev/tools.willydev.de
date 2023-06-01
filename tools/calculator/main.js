/*  First of All, i need to get all of the HTML Elements into JavaScript.
    After that, im changing the total to the value of whatever number is pressed. 
    To access all of the Buttons in the NodeList, JavaScript provides the forEach 
    Function    */

const digits = document.querySelectorAll('button[data-calc="numbers"]');
const total = document.querySelector('#total')
const addition = document.querySelector('#addition');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const history = document.querySelector('#history');
const clearLine = document.querySelector('#clear');
const clearAll = document.querySelector('#clearAll');
const deleteLeft = document.querySelector('#delete');
const percentage = document.querySelector('#percentage');
const superscript = document.querySelector('#superscript');
const squareRoot = document.querySelector('#square-root');
const plusminus = document.querySelector('#plusminus');
let maths = 0;
let part = 0;
let result = 0;


/*  Creating these if Blocks, so you cant put double Zeros at the beginning, 
    as it makes no sense mathematically. Also you need to put a comma/dot to 
    proceed with a Zero. */

digits.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.textContent == "0" && total.placeholder == "0") {
            // Do nothing
        } else if(total.placeholder != "0" || total.placeholder.slice(-1) == ".") {
            total.placeholder += item.textContent;

        } else if(item.textContent == ".") {
            total.placeholder += item.textContent;
        }
    })
})

/*  Now, that the numbers are correctly displaying in the output, i need to
    program the basic math functions. I could either create an object to have all
    the functions in one place, or use if blocks. Either way we need to have
    an EventListener first. */

addition.addEventListener("click", () => {
    if (total.placeholder != "") {
        part = total.placeholder;
        total.placeholder = "";
        maths = "+";
        history.textContent = part + " +";   
    } 
})
subtract.addEventListener("click", () => {
    if (total.placeholder != "") {
        part = total.placeholder;
        total.placeholder = "";
        maths = "-";
        history.textContent = part + " -";   
    } else if (total.placeholder == "") {
        total.placeholder = "-";
    }
})
multiply.addEventListener("click", () => {
    if (total.placeholder != "") {
        part = total.placeholder;
        total.placeholder = "";
        maths = "*";    
        history.textContent = part + " *";   

    } 
})
divide.addEventListener("click", () => {
    if (total.placeholder != "") {
        part = total.placeholder;
        total.placeholder = "";
        maths = "/";
        history.textContent = part + " /";   

    } 
})

equals.addEventListener("click", () => {
    if (maths == "+") {
        result = +part + +total.placeholder; 
        total.placeholder = result;
    } else if (maths == "-") {
        result = +part - +total.placeholder;
        total.placeholder = result;
    } else if (maths == "*") {
        result = +part * +total.placeholder;
        total.placeholder = result;
    } else if (maths == "/") {
        result = +part / +total.placeholder;
        total.placeholder = result;
    } else if (maths == "%") {
         result = (+total.placeholder/100) * +part;
         total.placeholder = result;
    } else if (maths == "superscript") {
        result = Math.pow(+part, +total.placeholder);
        total.placeholder = result;
    } else if (maths == "squareroot") {
        result = Math.sqrt(+total.placeholder);
        total.placeholder = result;
    }
    maths = 0;
    history.textContent = "";
})

/* Now i need to add all the other mathematical functions and clear buttons */

clearLine.addEventListener("click", () => {
    total.placeholder = "";
})

clearAll.addEventListener("click", () => {
    total.placeholder = "";
    part = 0;
    maths = 0;
    result = 0;
    history.textContent = "";
})

deleteLeft.addEventListener("click", () => {
    total.placeholder = total.placeholder.slice(0,-1);
})

percentage.addEventListener("click", () => {
    part = total.placeholder;
    total.placeholder = "";
    maths = "%";
    history.textContent = part + "%";
})

superscript.addEventListener("click", () => {
    part = total.placeholder;
    total.placeholder = "";
    maths = "superscript";
    history.textContent = part + "(^)";
})

squareRoot.addEventListener("click", () => {
    history.textContent = "√";
    maths = "squareroot";
})

plusminus.addEventListener("click", () => {
    if (total.placeholder > 0) {
        total.placeholder = "-" + total.placeholder;
    } else if (total.placeholder < 0) {
        total.placeholder = total.placeholder.slice(1);
    }
})