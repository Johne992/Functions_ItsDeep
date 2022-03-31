//INSTRUCTIONS:
// Step 1. Declare a Function
// Step 2. Make a variable inside of that function with let
// Step 3. Return that variable when your function is called
// step 4. Call your function, make sure it prints as expected
// step 5. make a variable outside of your function 
// step 6. modify that variable inside your function and do something with it, add, 
//         concatenate or subtract etc. Make sure it works.

//Nikki function around line 199

//Overview of Functions and Function Scope examples
let johnvar

console.log(johnFun() + mothFamily()); //prints to the console what the functions johnFun and Mothfamily 
                                             //return and combines them with a empty string

function johnFun(){ //declares the function johnFun
  let hello = "Hi "; //declares variable 
  return hello; 
}

function mothFamily(){
  let moth = "I am a big ole moth";
  return moth;
}

let fuufuu = "african";
fuufuu = johnFun();


console.log(johnFun(/*arguments*/));

//Let, Const, &Closures
//Step.1 make a const variable, assign a value
//Step.2 try to assign a different value to that const variable and put it on the console
//Step.3 make two block scope variables (with let) and change their values using a function
const crawfishprice_ltk = 4.99; //constant block scope variable, it is immutable, its assigned value cannot be changed
let month = "february"; //creates the block scope variable month and assigns it the value february
var crawfishprice = 2.33;

function crawFishLbs(pounds){
  let cost = crawfishprice_ltk;
  return cost * pounds;
}

function crawFishLbs2(pounds){
  let cost = crawfishprice + 2;
  return cost * pounds;
}

function crawFishMonth(pounds){
  let cost = crawfishprice;
  month = "June"
  return cost * pounds;
}

let dinner = crawFishLbs(2);
crawfishprice = 2.89;
let dinner2 = crawFishLbs2(2);
let dinner3 = crawFishMonth(2);


//Making Objects
/*
Step 1.Make an object using let objectName = {}; Make an Arr
Step 2.
Step 3.
*/

let wheeloftime = ["Eye of the World","The Great Hunt","The Dragon Reborn",];
let bookshelf = {0:"Eye of the World",1:"The Great Hunt",2:"The Dragon Reborn"};
function alsoObject(){
  let yep = "I am a object that holds a function(a block of code)";
}


//alvin's function
let cocoslaw
 
function cocofun(){ //
  let hello = "hi"; // any message
return hello;
}

console.log(cocofun());

//Alexis' function
let lexVar = "Mothman"

function leaveMothsAlone() {
  let entrance="LEAVE MOTHS ALONE!..Please."; //Chris Crocker Throwback
  return entrance;
}

console.log(lexVar + " says " + leaveMothsAlone() + " ...or else...");

// Dan's function
let danVar = "dan";

function dansFun() {
  let hello = "hi";
  return hello;
};

console.log(dansFun() + " " + danVar); //this will log to the console "hi dan"

function countDown(i) { //takes a number as a parameter
  console.log('Count down from: ' + i); // prints "count down from i"
  for (let counter = i-1; counter > 0; counter--) { // counter starts from i-1, runs until counter > 0, and does the thing you want it to do
    console.log(counter); // prints i to the console
    if (counter == 1) { // checks the conditional
      console.log("LIFT OFF!!")}; // prints to the console when the condition is met
    }
  }
  
countDown(5) //executes the function with 5 as the argument

// Billys Function

let math;
let billyVar = 5;
  console.log (billyVar + " o'clock somewhere");

function billyFunc() {
  let hello = "Hi";
    let math = ((billyVar * billyVar) - 13)

    // Why does this if resolve true?
    if (billyVar = 6){
       console.log ("winner, winner chicken dinner!");
    }     
    else {  
        console.log (math + " Pack");
 }
    return math;
  }
billyFunc();


//Jasmine's Function
let JasVar = "gawd...word to Drizzy";

function JasFun(){
  let hello = "What's up ";//any message
  return hello;
}
let i = "6 ";
console.log(JasFun() + i + JasVar);//what's up 6 gawd

// const minutes = 50
// for(let i = 49; i < minutes; i++ ){
//   console.log("there are" + i + "minutes left")
//   if(i==10)break;
// }



///Manny's Functions
let dinner="Spider's Eat Moths "

function IHateMoths() {
  let welcome= "Death To Moths"; //generic message
  return welcome;
}
console.log (IHateMoths());
console.log (dinner + IHateMoths()"..." + leaveMothsAlone())
// needs a + in between IHateMoths() + "..."
//Manny's Let, Const, &Closures
const MothDeathPerDay = 100;
let day = "Monday";
function AGoodDayToDie(Days){
  let DeathToll = MothDeathPerDay * Days;
  let count = DeathToll;
  return count = days;
}
let FinalTotal = AGoodDayToDie(20);
//John's Correction
const MothDeathPerDay = 100;
let day = "Monday";
function AGoodDayToDie(Days){
  let DeathToll = MothDeathPerDay * Days;
  let count = DeathToll;
  return count /* = day */;
}
let FinalTotal = AGoodDayToDie(20);

//end of Manny's Code

//Shameka's Function
function showmessage() {
 let message = "Hey there"; //local variable
 return message; 
}




// NB Function
// NB Function
let bigFun = " Really... they are.";

function nbFun(){
    let sarcasm = "Functions are fun. "; 
    return sarcasm;

}
console.log(nbFun(), bigFun);
//Let, Const, &Closures
//Step.1 make a const variable, assign a value
//Step.2 try to assign a different value to that const variable and put it on the console
//Step.3 make two block scope variables (with let) and change their values using a function

const dogeCoin = .25;
//let decision = "sell";
var dogeCoin_p = 55;

function dogeCoinShare(shares) {
  let cost = dogeCoin;
  return cost * shares;
}
function dogeCoinShare2(shares){
  let cost = dogeCoin_p;
  return cost * shares;
}
console.log()






//Shedrick's function
let

function shedrickFun(){ 
let goodbye = "Away";  
return goodbye;  
};
console.log(shedrickFun);


//Chasity's function
function chasityFun(){
let greeting = "Wassup";
return greeting;
}

console.log(chasityFun());



//Trent's function
let goofy
function trent(){
  let hello = "Hi";//local variable
}
return hello;//message
console.log(trent);


//Sharon's Function
function AfterBirthdayParty(){
  let after="AfterBirthdayParty";
}





//Nicole's function
  let hello = "Sup"; // any messag
function Nicole(){ //
  return sup;
  
}

  //charles johnson
  let p1 = 1
  let p2 = 2
  function Charlesj(p1,p2){
    return p1*p2;} //the functions the product of p1 and p2
    return sup
  }