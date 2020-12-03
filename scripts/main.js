console.log("Welcome to the main module");


// Exercise #1 - Nov 19, 2020
/* Functions can return a value that we can capture:
Write a function that takes a string of a dog breed as an argument (like 'border collie')
Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
Execute the function in a way that captures the returned value in a variable.
Console.log the string "When it comes to pets," plus the returned value of the function.
*/

const favoritePet = (petString) => {
    if (petString) {
        return `my favorite dog breed is ${petString}`
    }
    else {
        return "I like cats"
    }

}

const preferDog = favoritePet("rottweiler");
const preferCat = favoritePet();

console.log("When it comes to pets, " + preferDog);
console.log("When it comes to pets, " + preferCat);





// Exercise #2 - Nov 23, 2020
/*
  1. Add an action that the painter can perform ( a property whose value is a function ).
  2. Have her take that action by execucting the method you created.
  */

let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true, 
    sendInvoice: () => "faxed"
  };

  console.log('function', painter.sendInvoice());
  


  // Exercise #3 - Dec 3, 2020
/*
  1. Commented out are class notes 

  ------------------------------------------------------------------
  const btn = document.querySelector("btn__fun")

  btn.addEventListener("click", () => {
    console.log("btn clicked")
  })
  ------------------------------------------------------------------

  ------------------------------------------------------------------
  go to css - .alert {background-color:red}  
  
 
  btn.addEventListener("mouseenter", () => {
    btn.classList.toggle("alert")
  })
  ------------------------------------------------------------------

  ------------------------------------------------------------------
  btn.addEventListener("click", (theEvent) => {
    console.log("btn clicked", clickEvent)
  })


------------------------------------------------------------------

------------------------------------------------------------------
- console.log is to check if working
- function describes action want it to take when event takes place - so anonymous function 
  because called on our behalf when event happens
- event - response to a change in the state

------------------------------------------------------------------

------------------------------------------------------------------

index.html
add a div under button tag
<div id="messageBox"></div>

btn.addEventListener("click", (theEvent) => {
    console.log("btn clicked", clickEvent)
    const box = document.querySelector("#mesageBox")
    box.innerHTML = "Hello"
})
------------------------------------------------------------------

------------------------------------------------------------------
*/

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    console.log("btn was clicked")
});