console.log("Welcome to the main module")


// Exercise #1 - Nov 19, 2020
// Functions can return a value that we can capture:
// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
// Execute the function in a way that captures the returned value in a variable.
// Console.log the string "When it comes to pets," plus the returned value of the function.

const favoritePet = (petString) => {
    if (petString) {
        return `My favorite dog breed is ${petString}`
    }
    else {
        return "I like cats"
    }

}

const preferDog = favoritePet("rottweiler")
const preferCat = favoritePet()

console.log("When it comes to pets," + ${preferDog});
console.log("When it comes to pets," + ${preferCat});





// Exercise #2