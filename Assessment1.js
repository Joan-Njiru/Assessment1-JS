//Write a function that takes in a string and returns it when reversed
let food ="eating"

function reversed(food){
    let food1=[];
    for(f of food){
      return food1.push(food.pop());
    }
console.log(food1)
}
reversed(food)

//2. Write a function that takes in the following array and consoles the target if it is found else
//null
let num = [2,8,0,23,5,45,76]
Target = 23

function mergeSort(){
    let emptyArr = []
    while(left.length&&right.length){
        if(left[0]<=right[0]){
          emptyArr.push(left.shift())  
        }
        else{
            emptyArr.push(right.shift())
        }
        return[...emptyArr,...left,...right]
    }
}
function splitting(num){
    if(num.length<=1){
        return num
    }
    else{
        let midIndex = Math.floor(num.length/2)
        let left=num(0,midIndex)
        let right=num(midIndex,0) 
    }
    return splitting(left),splitting(right)
}
function binary(num,target){
    let leftIndex=0;
    let rightIndex = num.length-1;
    while(left[0]<right[0]){
        midIndex =Math.floor(left+right)/2;
        if(target===num[midIndex]){
            return midIndex;
        }
        if(target<=num[midIndex]){
            rightIndex=midIndex-1;
        }
        if(target>=num[midIndex]){
            leftIndex=middleIndex+1;

        }
        else{
            return null;
        }
    }

}

//3. Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
 function years(){
for(i=2000;i<=2023;1++){
    if(i%4==0){
        console.log(i.toString()+"is a leap year")
    }
    else{
        console.log(i.toString() +"is not a leap year")
    }
}
 }
 years(2020)



//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
 
//5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]

function doubles(numArray){
    let arr =[]
    for(element of numArray){
        return arr.push(element*4)
    }
    console.log(arr)
}
doubles(numArray)

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
let nums =["10","24","45","56","67"]
function stringed(){
let numbers =[]
for(n of nums){
    return numbers.push(n.split(" "))
}
console.log(numbers)
}
stringed(nums)


