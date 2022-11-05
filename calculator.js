// to refresh and update values
let buffer = "0";

// 5. to target the screen
const screen = document.querySelector('.screen');

// 3. Checking the values after click
function buttonClick(value) {
    if(isNaN(parseInt(value))) { // checking symbol
        // console.log(value);
        handleSymbol(value);
    }else{
        // console.log(value);  numerical values
        handleNumber(value);
    }
    // 7. to update buffer
    rerender(); 
 }


// 4. handeling Numbers
function handleNumber(number) { 
    // console.log("Number ",number);
    if(buffer === "0"){
      buffer = number; // Edge cases
    }else{
      buffer += number; //to update buffer
    }
    // console.log(buffer);
 }

//  9. Handle Math Function
function handleMath(symbol) {

}

// 8. handeling Symbol
function handleSymbol(symbol) { 
  // console.log("Symbol ",symbol);
  switch (symbol) {
    case "C":
      buffer = "0"
      // console.log("cancel");
      break;
    case "←":
      // console.log("backspace");
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
        // console.log(buffer);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
    case "=":
      handleMath(symbol);
      // console.log('Symbol',symbol );
      break;
    }
 }

// 1. Initilise function
function init() {
    document
      .querySelector(".calc-buttons") //select section
      .addEventListener("click", function (event) { //check clicks
        buttonClick(event.target.innerText); //send inner text to function
      });
  }
  
// 6. to update the buffer
function rerender(){
  screen.innerText = buffer;
}

// 2. invoking the function
init(); 