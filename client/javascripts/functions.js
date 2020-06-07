// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

/*let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = "";
   if(n % 3 == 0 ){
     result = `${result}Bit`;
   }
   else if(n % 5 == 0){
     result = `${result}Bat`;
   }
   else if(n % 7 == 0){
     result = `${result}Bot`;
   }
   else if(n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0){
        result = `${result}Not`;
   }
   return result;
};

*/

let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = "";
   if(n % 3 == 0 ){
     result = "Bit";
   }
   else if(n % 5 == 0){
     result = "Bat";
   }
   else if(n % 7 == 0){
    result = "Bot";
   }
   else if(n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0){
     result = "Not";
   }
   return result;
};






















let findAllbitBatBotOrNots1 = (arr) => {
  let result = arr.map(bitBatBotOrNot,arr);
  return result;
};




let findAllbitBatBotOrNots2 = (arr) => {

let result = [];
for (i=0;i < arr.length; i++){
  result.push(findAllbitBatBotOrNots1(arr));
}
return result;
};




let findAllbitBatBotOrNots3 = (arr) => {
let result = [];
for (var value of arr){
  result.push(findAllbitBatBotOrNots1(arr));
}
   return result;
   //use for..of statement
};

let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   let result = [];
   arr.forEach(element => result.push(findAllbitBatBotOrNots1));
   //use forEach method
   return result;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
