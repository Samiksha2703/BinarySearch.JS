let BinarySearch = require('./BinarySearchBussinessLogic.js');
let readline = require('readline-sync');
let binary = new BinarySearch();
let array = new Array();
let arraySize = readline.question("Enter the array size : ");

//function to create an array
function addArrayElement(){
while(arraySize > 0){
let arrayElement = readline.question("\nEnter the array element : ");
array.push(arrayElement);
arraySize -= 1;
}
return 
}

addArrayElement();
let search = readline.question("\nEnter the element to search : ");
binary.binarySearch(array, search);
