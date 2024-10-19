//........ If Else Condition___________

// const burger = 400;
// if (burger >= 500) {
//     console.log("Free Coke")
// }
// else{
//     console.log("Otherwise Buy the coke for 30tk")
// }

// const weight = 56;
// const height = 1.5;
// const bmi = weight / (height * height)
// console.log(bmi)
// if (bmi <= 18.5) {
//     console.log("You Are Underweight")
// }
// else if(bmi >= 18.5 && bmi <= 24.9){
//     console.log("You are Normal")
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log("You are Overweight")
// }
// else{
//     console.log("Otherwise, You are obese")
// }

// const food = 800;
// const age = 61;

// if(age <= 10){
//     console.log("Children food free")
// }
// else if(age >= 60){
//     const discount = food * 50 /100
//     const foodPrice = food - discount
//     console.log("Food Price: " , foodPrice)
// }
// else if(age >= 40 && age <= 50){
//     const discount = food * 20 /100
//     const foodPrice = food - discount
//     console.log("Food Price:", foodPrice)
// }
// else{
//     console.log("Regular Food Price: ", food)
// }

//........ Looping Task ______________

// let msg = 0;
// while (msg <= 30) {
//     console.log(msg, "Shek Hasina Palay na")
//     msg++
// }

// let odd = 0;
// while(odd <= 40){
//     if(odd % 2 == 1){
//         console.log("Odd Number", odd)
//     }
//     odd++
// }

// let even = 0
// while(even <= 50){
//     if(even % 2 == 0){
//         console.log("Even Number ", even)
//     }
//     even++
// }

// let odd = 81;
// let sum = 0
// while(odd <= 131){
//     if(odd % 2 == 1){
//         console.log("Odd Number", odd)
//         sum = sum + odd
//         console.log("Total sum:",sum)
//     }
//     odd++
// }

// let even = 206;
// let sum1 = 0;

// while(even <= 311){
//     if(even % 2 == 0){
//         console.log("Even Number", even)
//         sum1 = sum1 + even;
//         console.log("Sum Number",sum1)
//     }
//     even++
// }

// let sum = 0
// for(let even = 206; even <= 311; even++){
//     if(even % 2 == 0){
//         console.log("This even Number", even)
//     }
//     sum = sum + even;
// }
// console.log("Even number total", sum)

// let multiply = 1;
// let sum = 45;
// while(multiply <= 10){
//     let multi = sum + "X" + multiply + "=" + (multiply * sum);
//     console.log(multi)
//     multiply++
// }

// let sum3 = 36;
// for(let multiply = 1; multiply <= 10; multiply++){
//     let sum = sum3 + "X" + multiply + "=" + (multiply * sum3)
//     console.log(sum)
// }

// let countDown = 21;
// while(countDown >= 10){
//     console.log("Baby Come down :", countDown)
//     countDown--
// }

// for (let countDown = 21; countDown >= 10 ; countDown--) {
//     console.log("Count Down", countDown)
// }

//................. Function ___________________

// function square(number) {
//     console.log(number)
//     const borgo = number * number;
//     console.log(borgo)
// }
// square(6)
// square(54)
// square(69)

// function add(num1, num2){
//     const sum = num1 + num2;
//     console.log(sum)
// }
// add(40, 60)

// function doubleIt(number){
//     const sum = (number * 2)
//     console.log(sum)
// }
// doubleIt(56);
// const money = 600;
// doubleIt(money)

// function different(num1, num2){
//     const diff = num1 - num2;
//     console.log("Different is:", diff)
// }
// const fatherAge = 50;
// const myAge = 20
// different(fatherAge, myAge)

// function burgerPrice(price){
//     const totalPrice = price * 2;
//     return totalPrice;
// }

// burgerPrice(600)

// const price = burgerPrice(600);
// console.log(price)

// function bill(price1, price2){
//     const total = price1 + price2;
//     return total;
// }

// const output = bill(30, 60)
// console.log(output)

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2;
  return result;
}

// const newResult = doMath(76, 65)
// console.log(newResult)

//......Conditional function ___________

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// const output1 = isEven(5)
// const output2 = isEven(160)
// console.log(output1, output2)

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// const total = isOdd(7)
// const total1 = isOdd(4)
// console.log(total, total1)

function stringSize(str) {
  const size = str.length;
  console.log(size);
  if (size % 2 === 1) {
    console.log("Odd size");
    return true;
  } else {
    console.log("Even size");
    return false;
  }
}

// const output = stringSize("Dhaka")
// console.log(output)
// const output1= stringSize("Faka")
// console.log(output1)

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// const result = doubleOrTriple(40, true);
// const result1 = doubleOrTriple(40, false);
// console.log(result, result1)

function array(number) {
  const len = number.length;
  return len;
}
// const output = array([30, 50, 60, 30, 40, 20, 34, 56])
// console.log(output)

function getAge(person) {
  const age = person.name;
  return age;
}
const person = getAge({
  name: "Imam",
  age: 24,
  height: 5.1,
  weight: 80,
});

// console.log(person)

function sumOfNumber(numbers) {
    let sum = 0
  for (number of numbers) {
    console.log(number)
    sum = number + sum
  }
  return sum
}
// const numbs = [30, 50, 34, 56, 77, 98];
// const result = sumOfNumber(numbs)
// console.log("Total Array Sum: ",result)


function evenNumberOnly(numbers){
    const evens = []
    let sum = 0
    for(number of numbers){
        if(number % 2 === 0){
            evens.push(number)
            sum = number + sum
        }
    }
    return sum
}

// const even = [8, 45,32, 24, 70, 88, 33, 21, 96];
// const evenNumber = evenNumberOnly(even);
// console.log(evenNumber);


function oddNumberOnly(numbers){
    const odds = []
    for(number of numbers){
        if(number % 2 === 1){
            odds.push(number)
        }
    }
    return odds;
}

// const odd = [8, 45,32, 24, 70, 88, 33,55, 21, 96]
// const oddNumber = oddNumberOnly(odd)
// console.log(oddNumber)


//.........Practice task Function__________

//......Task 1______

function multiply(num1, num2, num3, num4){
    const multi = num1 * num2 * num3 * num4
    return multi;
}

// const result = multiply(23, 53, 65, 76)
// console.log(result)

//........Task 2________

function checkOdd(numbers){
    if(numbers % 2 === 1){
        const sum = numbers * 2
        return sum
    }
    else{
        const sum = numbers / 2
        return sum
    }
}

// const result = checkOdd(48)
// console.log(result)

//......... Task 3 ____________

function makeAvg(numbers){
    let sum = 0
    for(number of numbers){
        sum += number
    }
    return sum / numbers.length
    
}

// const arrays = [20, 32, 34, 12, 56, 43, 23, 19]
// const result = makeAvg(arrays)
// console.log("THis is array of avg:",result)

//........Task 4__________

function countZero(binary){
    let countOfZero = 0;
    let countOfOne = 0;
    for(let i = 0; i < binary.length; i++){
        if(binary[i] === "0"){
            countOfZero++
        }
        else{
            countOfOne++
        }
    }
    return countOfOne
}
// const numbs = "011011";
// const output = countZero(numbs)
// console.log(output)


//.....Task 5__________

function oddOfEven(integer){
    if(integer.length % 2 === 0){
        return "The value is even"
    }
    else{
        return "The value is Odd"
    }
}

// const valueName = "Imam "
// const output = oddOfEven(valueName)
// console.log(output)


//....Problem solve________________

//...inch to feet_________

function inchToFeet(inch){
    const feetToInch = inch / 12
    const feetNumber = parseInt(feetToInch)
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch "
    return result
}

const imamHight = inchToFeet(70)
console.log(imamHight)

//....Feet To Inch
function feetToInch(feet){
    const feetNumber = feet * 0.0833333
    return feetNumber
}

const imamInch = feetToInch(79)
console.log(imamInch)









