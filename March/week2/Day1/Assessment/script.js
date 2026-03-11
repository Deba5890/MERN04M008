//1.Write a function to print a greeting message.
function greeting() {
    console.log("Hello Welcome To the JavaScript Programming.");
}
greeting();

//2.Write a function that takes a name as a parameter and prints ?
function fun1(name){  //name is parameter
  console.log("Hii" + name);
}
fun1("Debasmita");

//3.Write a function that takes two numbers and returns their sum.
function sum(a,b){
    return(a+b);

}
sum(20,30);

//4.Write a function that returns the square of a number.
function sqr(a){
    console.log(a*a);
}
sqr(5);

//5.Write a function to find the largest of two numbers.
function large(a,b){
    if (a>b){
        console.log("a is largest number");
    }
    else {
         console.log("b is largest number");
    }
}
large(30,70);

//6.Write a function that returns the factorial of a number.
 function fact(n){
    let f = 1;
    for(let i = 1; i <= n; i++){
        f = f * i;
    }
    return f;
}

console.log(fact(3));

//7.Write a function that returns the reverse of a string.
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Debasmita"));

//9.Write a function that checks if a string is a palindrome.
function palindrome(str){
    let rev = str.split("").reverse().join("");
    return str === rev;
}

console.log(palindrome("debasmita"));