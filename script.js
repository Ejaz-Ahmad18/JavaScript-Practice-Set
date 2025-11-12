//Practice Question 1
//    const abc = "hello my name is ejaz ahmad"
//    console.log(abc)

////Practice Question 2
//    document.querySelectorAll('h1')
//    alert("hello")

////Practice Question 3
//  const abc= document.querySelector('h1')
//  abc.style.color="darkblue"

//  const abcd= document.querySelector('body')
//   abcd.style.background="lightseagreen"

//Practice Question Array Method
 // // Array Method
// // 1-Push
// // 2-Pop
// // 3-shift
// // 4-unshift
// // 5-filter
// // 6-find

// // 1-Push

// let ejaz=["apple","banana","mango","orange",1,2,3]
// console.log(ejaz,"print")
// ejaz.push("manzar")
// console.log(ejaz,"after push")

// // 2-pop

// ejaz.pop()
// console.log(ejaz,"after pop")

// // 3-Shift

// ejaz.shift()
// console.log(ejaz,"after shift")

// // 3-UnShift

// ejaz.unshift("grapes")
// console.log(ejaz,"after unshift")

// // 4-filter
// let delhi=[1,2,3,"manzar","dilsahd","dilsahd", "nisar","dilsahd"]

// let one = delhi.filter(ejaz=> ejaz=="dilsahd")
// console.log(one ,"print")


//Practice Question Function
// function Nisar(goldflake, indimint) {
//   debugger;
//   let ejaz = goldflake;
//   let dilshad = indimint;
//   let total = ejaz + dilshad;
//   console.log(total);
// }
// Nisar(15, 10);

// function Nisar(a, b) {
//   let ejaz = Number(prompt("Enter first number:"));
//   let dilsahd = Number(prompt("Enter second number:"));
//   let total = ejaz + dilsahd;
//   document.getElementById("nisarkah1").innerHTML = total;
// }
// Nisar();

//Practice More
// function cigrette(classic, indimint) {
//   let afroz = classic;
//   let ejaz = indimint;
//   let total = afroz - ejaz;
//   console.log(total);
// }
// cigrette(20, 10);

//Practice All
// let sami =12;
// sami=28
// console.log(sami)

// var a=12;
// a=25
// var b=12;
// console.log(a,b)

// let a =12;
// let b = 12;
// console.log(a,b)

// const sami=50;
// sami=25;
// console.log(sami)

// let arry =[10,20.20,30,"sami"]
// console.log(arry[2],"print")

// {
//   name="sami",
//   age=20,
//   adress="delhi"
// }

//Practice Question 
//.1  Ask user’s age and check if eligible to vote
//If age >= 18 → “Eligible”, else → “Not eligible”

// let num=prompt("vote de saktte hai")
// if(let i=1; i>=18; i++){
//     console.log("haan vote de sakte hai")
// }else{
//     console.log("nhi to vote nhi de saktte")
// }

//QUESTION voter age avalibe 

// let age = prompt("Apni age likho:");
// if (age >= 18) {
//   console.log("Haan, aap vote de sakte ho!");
// } else {
//   console.log("Nahi, aap abhi vote nahi de sakte.");
// }

// QUESTION user se password

// let sahipass="ejaz";
// let first=prompt("sahi password do");
// if(first===sahipass){
//   console.log("open ho gya");
// }else{
//  let second=prompt("sahi password do");
//  if(second===sahipass){
// console.log("glat pass hai");
//  }
//  else{
//   console.console.error("accont blocked");
  
//  }
// }

//QUESTION print the numer 1 to 10
// let num=prompt(" 1 se 10 number print kro")
// for(let i=1; i<=10;i++){
//   console.log(i)
// }

//Question user se paassword thoroh while

// let pass="ejaz";
// let userpasswowrd=prompt("sahi password bataoo");
// while(pass!==userpasswowrd){
//    userpasswowrd=prompt("sahi password bataooo");
// } 

//Question Break$Continue
//Break
// for(let i=1; i<10; i++){
//     if(i===5)break;
//     console.log(i)
// }
//Continue
// for(let i=1; i<10; i++){
//     if(i===5)continue;
//     console.log(i)
// }

//Function

// function Abc(){
// console.log(arguments[2]);
// }
// Abc("Ejaz",23,"ejazahmad@gmail.com")

// question --print the number 1 to 100 using loop

// let sum=0
// for(let i=1;i<101;i++){
//     sum=sum+1;
// }
// console.log(sum)


// question --print all the number 1 to 50 that are disivile by 3

// for(let i=1; i<50;i++){
//     if(i%3===0){
//     console.log(i)
//     }
// }

//Question--Ask the user for a number and print wheather each number from 1 to thaat is even or odd

// let val=prompt("number dalo");
// for(let i=1;i<=val;i++){
// if(i%2===0){
//     console.log(`${i} - this is even numner`)
// }else{
//     console.log(`${i} - this is odd number`)
// }
// }


//Question-- count how many numbers between 1 to 100 are disivile by both 3 and 5

// for(let i=1 ; i<=101; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// }

//Question -- stop at first multiple of 7

// for(let i=1; i<=101;i++){
//      console.log(i)
//     if(i%7===0){
//         break;
//     }
   
// }

//Question-- skip multiple of 3

// for(let i=1; i<=21;i++ ){
//   if(i%3===0)continue;
//   console.log(i)
// }


//Question-- print first 5 odd number only

// let counter = 0;
// for(let i=1;i<=101;i++){
//     if(i%2 !==0){
//         console.log(i)
//         counter++;
//     }
//     if(counter>=5){
//         break;
//     }
//   }

// let counter=0;
// for(let i=1; i<=101;i++){
//     if(i%2===1){
//         counter++;
//         console.log(i)
//     }if(counter===5)break;
// }

//Function Learning(function declartion,function expression,function arrow)

// function Ejaz(){
// console.log("my nmae is ejaz ahmad")
// }
// Ejaz()

// let ahmad=()=>{
//     console.log("my name is ahmad")
// }
// ahmad()

//function ( parameter, arguments)

// function val(val1,val2){
//     console.log(val1+val2)
// }
// val(10,20)

// let ejaz=(a)=>{
//     console.log(a)
// }
// ejaz(10+25)

//function Parameter( default, rest, spread parameter)

//Default
// function val(val1=5,val2=5){
//     console.log(val1+val2)
// }
// val()

//Rest
// function val(...val){
//     console.log(val)
// }
// val(1,2,3,4,5)

//function ( return value, early value)

//Return
// function abc(val){
//     return 12 +val;
// }
// let val=abc(25)
// console.log(val)

//Early Return value

// function abc(val){
//     if(val<25) return"a";
//     else  if(val<50) return"b";
//     else  if(val<75) return"c";
//     else  if(val<100) return"d";
// else return "e"
// }
// abc(100)
// console.log(abc(100))

//function ( first class function)

// function abc(val){
// val();

// }

// abc(function(){
// console.log("ejaz")
// })

//function ( higher oder function)

// function abc(){
// return function(){
// console.log("hey")
// }

// }

// abc()()


//function ( pure vs impure)

// let a=12;

// function abc(){
//     console.log("my name is ejaz")
// }
// abc()
// function def(){
//     a++;
   
// }
// def()
// console.log(a)


//function ( closures $ lexical scoping)

//closures
// function abc(){
//     let a=12;
//     return function(){
//         console.log(a)
//     }
// }
// abc()();

// lexical scoping
// function abc(){
//     let a=10;
//     function def(){
//         let b=15;
//         function ghi(){
//             let c=20;
//             console.log(a,b,c)
//         }
//         return ghi;
//     }
//     return def;
    
// }
//  abc()()();
 

//function ( IIFE (immediately invoked function expressin))

// (function(){
//     console.log("hey")
// })();


//function (Hoisting differences betwwen declaraction and expression)

//function decleration (statement)

// abc();

// function abc(){
//     console.log("hello")
// }

//function expression (statement)

// abc();

// let abc=function(){
//     console.log("hello")
// }

//practice-question-10- convert to arrow function

// function multiply(a,b){
//     return a*b;
// }

// let multiply=(a,b)=>{
//      return a*b;
// }
// console.log(multiply(1,3))


//practice-question-11-find parameter and arguments
// function welcome(name){
//     console.log(name);
// }
// welcome("Ejaz")

//practice-question-12-use rest paramater toacceptany number of scores andreturn the total

// function getScore(...val){
// let total=0;
// val.forEach(function(val) {
//     total=total+val;
// });
// return total;
// }
// console.log( getScore(1,2,3,4,5));

//practice-question-12- check this code in early return 

// function checkAge(age){
//     if(age<18) return"too young";
    
//         return"allowed";

// }
// console.log(checkAge(22));


// ARRAY //

//practice Modify the array
// let arr=[1,2,3,4,5];
// console.log(arr[2]);

// ARRAY METHOD //

// Array ( push )
//  let arr=[1,2,3,4,5];
//  arr.push(10);

// Array ( pop )
//  let arr=[1,2,3,4,5];
//  arr.pop();


 // Array ( shift )
//  let arr=[1,2,3,4,5];
//  arr.shift();

 // Array ( unshift )
//  let arr=[1,2,3,4,5];
//  arr.unshift(0);


 // Array ( splice )
//   let arr=[1,2,3,4,5];
//  let newarr= arr.splice(0,3);

// Array ( slice )
//   let arr=[1,2,3,4,5];
//   arr.splice(2,1);

// Array ( revesre )
//    let arr=[1,2,3,4,5];
//   arr.reverse();

// Array ( sort )
//    let arr=[1,2,3,4,5];
//   let newarr= arr.sort(function(a,b){
//     return b-a;
//   });

// Array ( forEach )
//    let arr=[1,2,3,4,5];
//    arr.forEach(function(val){
//     console.log (val+5);
//   });

// Array ( map )
//    let arr=[1,2,3,4,5];
//    let newarr=arr.map(function(val){
//     return 12;
//   });


// Array ( map )
//    let arr=[1,2,3,4,5];
//    let newarr=arr.map(function(val){
//     if(val>0) return val;
//   });


// Array ( filter )
//    let arr=[1,2,3,4,5];
//    let newarr=arr.filter(function(val){
//     // return true;
//       if(val>0) return true;
//   });


// Array ( reduce )
   let arr=[1,2,3,4,5];
   let newarr=arr.reduce(function(accumulator , val){
    return accumulator+ val;
  },0);

