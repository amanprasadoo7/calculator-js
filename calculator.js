

// 3. Checking the values after click
function buttonClick(value) {
    if(isNaN(parseInt(value))) { // checking symbol
        // console.log(value);
        handleSymbol(value);
    }else{
        // console.log(value);  numerical values
        handleNumber(value);
    }
  }


//   4. handeling Numbers
function handleNumber(value) { 
    // console.log("Number ",value);
    
 }


 //   5. handeling Symbol
function handleSymbol(value) { 
    // console.log("Symbol ",value);
 }


// 1. Initilise function
function init() {
    document
      .querySelector(".calc-buttons") //select section
      .addEventListener("click", function (event) { //check clicks
        buttonClick(event.target.innerText); //send inner text to function
      });
  }
  
  init(); // 2. invoking the function