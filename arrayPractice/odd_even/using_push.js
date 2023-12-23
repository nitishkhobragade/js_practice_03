//Write a program in which we have a array of different positive numbers , you have to display
//how many odd and even numbers
//sum of odd numbers
//sum of even numbers
//sum of all numbers
//display odd numbers
//display even numbers

//Note without using any advance method do this with basic loop and conditional statement 

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let odd=0;
let even=0;
let oddArray = [];
let evenArray =[];
let evenSum = 0;
let oddSum = 0;

for(let i=0;i<numbers.length;i++){
if(numbers[i] % 2==0){
    even++;
    evenArray.push(numbers[i]);
    evenSum += numbers[i] ;


}else{
    odd++;
    oddArray.push(numbers[i]);
    oddSum += numbers[i];
}

}
let result= even+odd;

console.log("Total Even numbers :",even);
console.log("Total Odd numbers :",odd);

console.log(" Total Number of Even + Odd :",result);
console.log("Even Numbers Are :",evenArray);
console.log("Odd Numbers Are :",oddArray);
console.log("Sum of Odd Numbers :",oddSum);
console.log("Sum of Odd Numbers  :",evenSum);
console.log("Sum of All Numbers  :",evenSum + oddSum);