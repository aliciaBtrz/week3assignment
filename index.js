//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
 let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
	//Do not use numbers to reference the last element, find it programmatically, 
	//ages[7] – ages[0] is not allowed!
let firstElement = ages[0];
let lastElement = ages[ages.length-1];
console.log(lastElement - firstElement)
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(2)
console.log(ages)
//1c.	Use a loop to iterate through the array and calculate the average age. 
let sum1 = 0
for(var number of ages){
	sum1 += number;
}
average = sum1/ages.length
console.log(average)
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var sum = 0
for(let i = 0;i<names.length; i++){
sum = sum + names[i].length
}
var average1 = sum / names.length
console.log(average1)
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
for(let i = 0;i<names.length; i++){
	}
	var added = names[0] + " " + names[1]+ " " + names[2] + " " + names[3] + " " + names[4] + " " + names[5] 
	console.log(added)
//3.	How do you access the last element of any array?
//      .pop()
//4.	How do you access the first element of any array?
//       .splice()
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each 
//name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.
function fullName(firstName,lastName){
console.log( firstName + ' '+ lastName)
}fullName('sara','batrez');
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.
