//1)Object Destructuring 1
//What does the following code return/print?

console.log(numPlanets) //8 
console.log(yearNeptuneDiscovered) //1846 

//2)Object Destructuring 2
//What does the following code return/print?



console.log(discoveryYears); //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
   

//3)Object Destructuring 3
//What does the following code return/print?


getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
getUserData({}) // Your name is undefined and you like green


//1) Array Destructuring 1
//What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//2) Array Destructuring 2
//What does the following code return/print?

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//3) Array Destructuring 3
//What does the following code return/print?

console.log(numbers) // [10,30,20]


//ES2015 Refactoring
//In this exercise, you’ll refactor some ES5 code into ES2015.
/* Write an ES2015 Version */

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers


//ES5 Array Swap
/* Write an ES2015 Version */
[arr[0], arr[1]] = [arr[1], arr[0]]





//raceResults()
//Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
