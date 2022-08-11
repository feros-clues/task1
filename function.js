console.log("functions");

//1.function without parameter

//I)print javascript 

function js() {
    console.log("javascript is event based programming language")
}
js();


//II) sum of first n natural numbers

function firstNSum(){
       let sum=0;
    for (let i=1; i<10; i++) {
        sum = sum+i;
        
    }
    console.log(sum);

}
firstNSum();

//III)square of number

function numberSquare(){
    let x=10;
    console.log(`square of number ${x} is: ${x*x}`);
}

numberSquare();



//funtions with parameters

//I)even number or odd number

function numberType(number){
    if (number%2 == 0) 
        console.log(`given number ${number} is even number`)
    
    else 
        console.log(`given number ${number} is odd number`)
        console.log("hello")
    
}

numberType(25)

//II)positive or negative number

function signOfNumber(number){
    if (number<0) 
        console.log(`given number ${number} is negative number`)
    
    else 
        console.log(`given number ${number} is positive number`)
    
}

signOfNumber(-1)


//III)addition of given first n numbers

function numberSum(number){
    let sum=0;
 for (let i=1; i<=number; i++) {
     sum = sum+i;
     
 }
 console.log(`sum of first ${number} natural numbers is ${sum}`);
}

numberSum(9)

//3.default parameters

function defParam(num1,num2,num3=0){
    console.log(`addition with default param values is ${num1+num2+num3}`)//output will be nan if we dont pass arguements and dont set default paramete values manually

}

defParam(10,2)


//4.function with return value

//I)calculate area of circle

function areaOfCircle(radius) {
    return radius*radius*3.14
}


let area =areaOfCircle(5);
console.log(`area of circle for given radius is ${area}`)
console.log(`area of circle for given radius is ${areaOfCircle(5)}`)



// arrow function ,function without function name
let javascript=()=>
{
    console.log("javascript is  is object oriented ,multiparadigm programming language")
    
}
    javascript()


// arrow function without parenthesis and curly braces

let square= number =>
console.log(`sqaure of given number ${number} is ${number*number}`)

 square(2);



//iief immediately invoked expression function
(
    () => {
        console.log("immediately invoked function")
    }
)()



