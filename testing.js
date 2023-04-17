//1.
let food ="eating"

function reversed(food){
   let food1= food.split('').reverse().join();
console.log(food1)
}
reversed(food)

//2 Write a function that takes in the following array and consoles the target if it is found else
//null
function merge(left, right) {
    let sortedArr = []
        while (left.length && right.length){
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr,...left, ...right]
  }
  //splitting
  function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right);
     console.log( merge(left, right));
  }
  let arr = [2,8,0,23,5,45,76]
  console.log(mergeSort(arr));
  
  function binary(arr, target){
    let leftIndex= 0;
    let rightIndex = arr.length-1;
    while(leftIndex <= rightIndex){
        let middle = Math.floor((leftIndex+rightIndex)/2);
        if (arr[middle] === target){
            return middle;
        }
        else if(arr[middle]>target){
            rightIndex = middle-1;
        }
        else{
            leftIndex=middle+1;
        }
    }
    return null;
  }
  
  let target = 23;
  console.log(binary(arr,target));

//3. Given years between 2000 and 2023, console all the leap years in the following
function years(){
    for(i=1800;i<=2023;i++){
        if(i%4==0){
            console.log(i + "is a leap year")
            
        }
        else{
            console.log(i + "is not a leap year")
        }
    }
     }
     years(2009)

    //4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function numDivisible(){
    for(i=0;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if (i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
        }
    else{
        console.log(i)
     }
       }
    }

    
//5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]

function doubles(num){
   return num.map(item => item*4)
}
console.log(doubles(numArray));

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
let nums =["10","24","45","56","67"]
function stringed(){
  return  nums.map(num=>+num)


}
console.log(stringed(nums));
