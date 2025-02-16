//Question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Ages:", ages);

//Subtract first element from last element programmatically
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

//Question 2
