//Question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Ages:", ages);

//Subtract first element from last element
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge:", minusAge); //output: 90

//Add a new age to the array
ages.push(45);
console.log("Ages after pushing new value", ages);

//Recalculatte with new age
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("Updated with new age:", minusAgePush); //Output: 42

//Calculate average age using a loop
let totalAges = 0;
    for(let i = 0; i < ages.length; i++) {
        totalAges += ages[i];
    }
console.log ("Total Sum", totalAges); //Output: 275
let average = totalAges / ages.length
console.log("Average", average); //output: 30.55 repeating

//Question 2: Creat an array called names.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;

//Calculate average letters per name
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
    console.log("index:", i, "name", names[i], "totalLetters:", totalLetters) 
}
let averageName = totalLetters / names.length;
console.log("Average letters per name:", averageName); //Output: 3.833 repeating

//Concatenate names with spaces
let concatNames = "";
for (let i = 0; i < names.length; i++){
    concatNames = concatNames.concat(names[i]) + " ";
    console.log(i, "Names concatenated", concatNames); //See code for output.
}
//Question 3 access last element of an array
console.log("Last element of ages in array:", ages[ages.length - 1]); //Output: 45

//Question 4 access first element of an array
console.log("First element in an array:", ages[0]); //Output: 3

//Question 5 add names to names array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); 
    console.log("Name lengths array:", nameLengths);
}

//Question 6 loop to iterate over nameLengths array and calculate the sum of all elements
let charsTotal = 0;
for(let i = 0; i < nameLengths.length; i++) {
    charsTotal += nameLengths[i];
    console.log("CharsTotal:", charsTotal);
}

//Question 7 write a function that takes two parameters as arguments and returns the word concatenated to itself n number of times.
function concatWords(word, n) {
    console.log("Word Par:", word, "n Par:", n);
    let concat = word.repeat(n)
    console.log(concat);
}
concatWords("Hello", 3); //Returns: HelloHelloHello

//Question 8 write a a function that takes parameters firstName and lastName and returns a full name with a space.
function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName)
}
fullName("Freddy", "Krueger"); //Returns: Freddy Krueger

//Question 9 write a function that takes an array of numbers and returns true if the sum of all numbers in the array is greater than 100.
function isSumGreaterThan(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100; //Used a similar function to one that is used in engineering classes.
}
console.log(isSumGreaterThan([50, 30, 25])); //true
console.log(isSumGreaterThan([10, 20, 30])); //false to make sure it is really working

//Question 10 write a function that takes an array of numbers and returns the average of all elements.
let numbers = [10, 20, 30, 40, 50]; //Define numbers array

function calculateNumbersAverage(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length
    console.log("Average of Numbers:", average);
    return average;
}
calculateNumbersAverage(numbers);//output: 30

//Question 11 write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average in the second
function compareAverage(arr1, arr2) {
    const avg1 = arr1.reduce((sum, num) => sum + num, 0) / arr1.length;
    const avg2 = arr2.reduce((sum, num) => sum + num, 0) / arr2.length;
    return avg1 > avg2;
}
console.log(compareAverage([10, 20, 30], [5, 15, 25])); // true
console.log(compareAverage([1, 2, 3], [4, 5, 6])); // false again to check if it works

//Question 12 write a function called willBuyDrink that takes a boolean isHotOutside and a number moneyInPocket and returns true if it is hot outside and moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
   console.log("Parameters", isHotOutside, moneyInPocket);
   let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
   console.log("Buy a drink?", buyDrink);
   return buyDrink;
}
willBuyDrink(true, 11);//Output true
willBuyDrink(true, 8);//ran again to check for return false which it did

//Question 13 write a function of your own that solves a problem.
function suggestShoes(weather, occasion) { //function to determine which shoes to wear based on weather and occassion. Tried to cover all basis and combos.
    if (weather === "sunny") {
      if (occasion === "formal") {
        return "Wear dress shoes or sandals.";
      } else if (occasion === "casual") {
        return "Wear sneakers or sandals.";
      } 
    } else if (weather === "rainy") {
      if (occasion === "formal") {
        return "Wear waterproof dress shoes.";
      } else if (occasion === "casual") {
        return "Wear rain boots or waterproof sneakers.";
      } 
    } else if (weather === "snowy") {
      return "Wear snow boots.";
    } else if (weather === "cloudy") {
       if (occasion === "formal") {
        return "Wear dress shoes.";
      } else if (occasion === "casual") {
        return "Wear sneakers.";
      } 
    } else {
      return "Invalid weather condition.";
    }
  }
  let shoesToWear = suggestShoes("sunny", "casual");
  console.log(shoesToWear); //Return: Wear sneackers or sandals
