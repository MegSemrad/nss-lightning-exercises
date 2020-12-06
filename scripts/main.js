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





/*Exercise #4

1. Add a <section> element with an id of family to your index.html
2. Use a good old for loop to iterate over this array of objects to pull out the names of the 
   family members and represent them as HTML by wrapping each in an <h3> tag. Append them to the DOM.
3. Achieve the same result using .map()
 */


/* Instructor Examples
const familyEl = document.querySelector("#family")
let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]

const familyNames = []

for ( let i=0; i < family.length; i++) {
  familyNames.push(`<h3>${family[i].name}</h3>`)
}
familyEl.innerHTML += familyNames.join("")
*/
// ----------------------------------------------------------------



// ----------------------------------------------------------------


// Mine - DID NOT FINISH IN TIME - is not right
/*  import { useFamily } from './family.js'
 const contentTarget = document.querySelector("#family");

const familyNames = () => {
  const familyNamesArray = useFamily();
    for (name of familyNamesArray) {
      name.map(familyObject => {
        const selectedName = familyObject.name
        return `<h3>${selectedName}</h3>`
      })
    }
  }
}
familyNames(family);
*/

// ----------------------------------------------------------------
/*
If want to look over entire Array and select certain one according to certain criteria
*/
let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]
// Takes an argument of a function
// Beneath condition that must be met for familyMember to be added to new Array called adults

const adults = family.filter( (familyMember) => {
  if (familyMember.age >= 18) {
    return true 
  }
} ) 
//  Can use below line as alternative if do not want to use if statement 
// const adults = family.filter( (familyMember) => familyMember.age >= 18)
// Could also put .map() on the end of the above line and put it into DOM
// or could simply put adults.map()

console.log('grownUp?', adults);


//  ------------------------------------

// .find - only finds single thing and creates an array with it inside 
// parent below is a newly created array
// If will find the first thing in the family array that meets that requirement and returns it then stops 

let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]

const parent = family.find( (familyMember) => familyMember.title === "parent")
console.log("parent", parent);