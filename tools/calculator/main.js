/* First of all, I need to get all of the HTML elements into JavaScript.
   After that, I'm changing the total to the value of whatever number is pressed.
   To access all of the buttons in the NodeList, JavaScript provides the forEach function. */

   const digits = document.querySelectorAll('button[data-calc="numbers"]');
   const total = document.querySelector('#total');
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
   let maths = "";
   let part = 0;
   let result = 0;
   
   /* Creating these if blocks, so you can't put double zeros at the beginning,
      as it makes no sense mathematically. Also, you need to put a comma/dot to
      proceed with a zero. */
   
   digits.forEach((item) => {
       item.addEventListener("click", () => {
           if (item.textContent === "0" && total.placeholder === "0") {
               // Do nothing
           } else if (total.placeholder !== "0" || total.placeholder.slice(-1) === ".") {
               total.placeholder += item.textContent;
   
           } else if (item.textContent === ".") {
               total.placeholder += item.textContent;
           } else {
               total.placeholder = item.textContent;
           }
       });
   });
   
   /* Now, that the numbers are correctly displaying in the output, I need to
      program the basic math functions. I could either create an object to have all
      the functions in one place or use if blocks. Either way, we need to have
      an event listener first. */
   
   addition.addEventListener("click", () => {
       if (total.placeholder !== "") {
           part = parseFloat(total.placeholder);
           total.placeholder = "";
           maths = "+";
           history.textContent = part + " +";
       }
   });
   
   subtract.addEventListener("click", () => {
       if (total.placeholder !== "") {
           part = parseFloat(total.placeholder);
           total.placeholder = "";
           maths = "-";
           history.textContent = part + " -";
       } else if (total.placeholder === "") {
           total.placeholder = "-";
       }
   });
   
   multiply.addEventListener("click", () => {
       if (total.placeholder !== "") {
           part = parseFloat(total.placeholder);
           total.placeholder = "";
           maths = "*";
           history.textContent = part + " *";
       }
   });
   
   divide.addEventListener("click", () => {
       if (total.placeholder !== "") {
           part = parseFloat(total.placeholder);
           total.placeholder = "";
           maths = "/";
           history.textContent = part + " /";
       }
   });
   
   equals.addEventListener("click", () => {
       if (maths === "+") {
           result = part + parseFloat(total.placeholder);
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       } else if (maths === "-") {
           result = part - parseFloat(total.placeholder);
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       } else if (maths === "*") {
           result = part * parseFloat(total.placeholder);
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       } else if (maths === "/") {
           result = part / parseFloat(total.placeholder);
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       } else if (maths === "%") {
           result = (parseFloat(total.placeholder) / 100) * part;
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       } else if (maths === "superscript") {
           result = Math.pow(part, parseFloat(total.placeholder));
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       } else if (maths === "squareroot") {
           result = Math.sqrt(parseFloat(total.placeholder));
           total.placeholder = result.toFixed(2); // Adjust decimal places as needed
       }
       maths = "";
       history.textContent = "";
   });
   
   /* Now I need to add all the other mathematical functions and clear buttons */
   
   clearLine.addEventListener("click", () => {
       total.placeholder = "";
   });
   
   clearAll.addEventListener("click", () => {
       total.placeholder = "";
       part = 0;
       maths = "";
       result = 0;
       history.textContent = "";
   });
   
   deleteLeft.addEventListener("click", () => {
       total.placeholder = total.placeholder.slice(0, -1);
   });
   
   percentage.addEventListener("click", () => {
       part = parseFloat(total.placeholder);
       total.placeholder = "";
       maths = "%";
       history.textContent = part + "%";
   });
   
   superscript.addEventListener("click", () => {
       part = parseFloat(total.placeholder);
       total.placeholder = "";
       maths = "superscript";
       history.textContent = part + "(^)";
   });
   
   squareRoot.addEventListener("click", () => {
       history.textContent = "√";
       maths = "squareroot";
   });
   
   plusminus.addEventListener("click", () => {
       if (total.placeholder > 0) {
           total.placeholder = "-" + total.placeholder;
       } else if (total.placeholder < 0) {
           total.placeholder = total.placeholder.slice(1);
       }
   });
   

/* Problems ive encountered, and how i fixed them

1. Some calculations were inaccurate
    -> Changing the maths variable's initial value from 0 to an empty string "" to correctly identify the math operation.
    -> Parsing the numeric input using parseFloat when performing calculations.
    -> Resetting the maths variable to an empty string after performing calculations.
    -> Adding an additional else condition in the number button event listener to handle setting the value of 
       total.placeholder when it's not 0 or a decimal point.
    -> In the equals event listener, I added .toFixed(2) to the result variable before assigning it to total.placeholder. 
       This ensures that the result is rounded to 2 decimal places
*/