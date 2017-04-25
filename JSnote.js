alert("It`s my notes about JS")
//References and specifications
//https://learn.javascript.ru/pre-coding

//Knowledge source
//http://htmlbook.ru/

//Don`t forgot <meta charset="utf-8"> in HEAD

/*multiline comments*/

//variables names can start and contains "$" and "_", and can`t be start by number

// OLD specefication. Variable will visibilite out of if\for

var variableByVar;

"use strict" //on support new standarts
//Must be in start script or function

let a; //Variable will NOT visibilite out of if\for
const b; //Variable can not change link to data (but data can be change, in array, for example)

//let, const, var return undefined
//new empty variable == undefined


//Script enter HTML:
//<script> ... </script><script> ... </script>
//HTML4
//<script type="text/javascript"> ... </script>

//script address can be from site root ot http link (disable code inside)
//<script src="C:\\myFolder\test.js"></script>;

//async script not block load and build html page,
//loading async, build and run async
//<script async src="..."> ... </script>;

//defer script not block load and build html page,
//loading async, but build and run by queue and 
//after html page will be done
//<script defer src="..."> ... </script>;

//async and defer work only with "src"

//add script in document from script
function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; //not async script add
  document.head.appendChild(script);
}
//scripts can will load at diferent time, but will work only by queue
addScript('1.js');
addScript('2.js');
addScript('3.js');


// T I P E S

/*number*/
//integer and fractional numbers. May have "Infinity" and "NaN"
//https://learn.javascript.ru/number
+variable == Number(variable)
+"\n058   \n" //58
+null == +" " //true, 0 in bouth arguments
+undefined //NaN
12.36.toFixed(1); //12.4
//12.toFixed(1); //error!
12..toFixed(1); //12.0
0xFF === 255; //true
Infinity == +"Infinity"; //true
var nan = NaN;
isNaN(NaN) == (nan !== nan) //true
function isNumeric(n){return !isNaN(parseFloat(n)) && isFinite(n)} //strict number comparison
parseInt('FF', 16) // 255
(255).toString(16) //'FF'

/*string*/
//assigned with "" or ''. "char" not exist in JS
variable + "" == String(variable) //true
"ac" > "abc" //true
"ab" < "abc" //true
"\b";	/*Backspace*/ "\f";	/*Form feed*/ "\r";    	/*Carriage return*/
"\n";	/*New line*/  "\t";	/*Tab*/       "\u00A9";  /*"©" - Unicode character*/
"s t r i n g".split(" ") //return ["s","t","r","i","n","g"]

/*boolean*/
//May have only "true" or "false", assigned:
!!value == Boolean(value) //true
var bool1 = true, bool2 = false;
!!1 && !!"0" && !!"string" //true
!!0 || !!null || !!undefined || !!NaN //false
//if(value) - convert value to boolean type for comparison

/*null*/
//expactable empty

/*undefined*/
//unexpactable empty

/*object*/
var obj = {"first name": "Black", secondName: "Tom"};
Object.keys(obj) //["first name", "secondName"]
delete obj["first name"];
"secondName" in obj; /*true*/ "first name" in obj; /*false*/

//array - special object
var arr = new Array(5) //arr.length == 5 //arr[0] == undefined
var a = [1,2,3,4,5];
a.push();//add new last element and return array length
a.pop();//remove and return last element
a.unshift();//add new first element and return array length
a.shift();//remove and return first element
a.length = 0;//clear array
a == a.revers()//true
a.join(str) //join all elements by str, return string
a.slice(firstIndex,lastIndex) //return new array with target elements
a.sort() //sort by Unicode min to max
a.sort(function(a, b){return a - b}) //sort numeric values from min to max
a.splice(index, deleteCount, firstElementToPaste, NElementToPaste, LastElementToPaste)
a.forEach(func(item, i, arr)) //havent return
a.filter(func(item, i, arr)) //return array, whith elements by func iteration return true
a.map(func(item, i, arr)) //return array, whith elements from func iteration return
a.reduce(func(previousValue, currentItem, index, arr), initialValue) //return last iteration return
//if(initialValue){
//  previousValue = initialValue, currentItem = arr[0];
//}else{previousValue = arr[0], currentItem = arr[1]}



//get variable type
typeof null; //"object"

(null == null) && (null == undefined) && (undefined == undefined) //true
(null == NaN) || (null == 0) || (undefined == NaN) ||
(undefined == 0) || (NaN == NaN) || (NaN == 0) //false

null > 0 || null < 0 || null == 0 //false
null >= 0 && null <= 0 //true


//unary plus convert variable into number
var variable = "1";
typeof variable == string;
typeof +variable == number;

//"=" rerurn result
console.log(a = 1+1) //'2'

//Operator Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//operaor "%" - come back modulo
var a = 5%2; //a==1 (5/2 = 4+1)

//"++" and "--" work only with variables
var a = 1, b = 1;
var c = a++; //c==1
var d = ++b; //d==2


//logical comparison of different types changes values to numbers
0 == false //true
//strict logical comparison
0 === false //false
!!"0" == +"0" //false

//"==" has priority over bitwise operators
1 == 1 & 0 //return 0, not "false"

//to round a fractional number
variable ^ 0 //==int

-variable == ~variable + 1//true


//bitwise operators
a & b //AND
a | b //OR
a ^ b //XOR
~a //NOT
a << b //left shift at amount of "b" , fill zero
a >> b //right shift at amount of "b", discarding the shifted bits, reply left bit
a >>> b //right shift at amount of "b", discarding the shifted bits and add zero at left


//user interactive fields

alert("Alert window"); //view window form with text (from argument) and
//"Ok" button. return "undefined"
 
prompt('title text','default string'); //view window form with
//title and default text (from arguments) and "Ok", "Cancel" buttons.
//return input string or null (by cancel button)

confirm("Are you shure?"); //view window form with title (from arguments)
//and "Ok" (return true), "Cancel" (return false) buttons


if(true){var value = 1} //"value" is global variable!
for(;;){var value = 1} //"value" is local variable!

//сonsole.log(1 < 2 ? true : false); //true

//"||" - OR, return first true value or last false
//"&&" - AND, return first false value or last true
//AND have biggest priority than OR
//"!" - convert and revert value to boolean type


"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //infiniti
"  -9\n" + 5 //-4
"  -9\n" - 5 //-14
5 && 2 //2
2 && 5 //5
5 || 0 //

0 || 5
null + 1
undefined + 1
null == "\n0\n"
+null == +"\n0\n"


while (true) {
  var forever;
}

do {
  var forever;
} while (true);

for (var index = 0; index < array.length; index++) {
  result += array[index];
}

//break - exit cycle
//continue - exit iteration
//we can use "tag:"(any name) for cycles out
tag:for (var index = 0; index < array.length; index++) {
      for (var j = 0; j < array.length; j++) {
        break tag; //break "index" for, not only "j"
  }
}

switch (true) { //any value
  case 2 > 5: //value to strict comparsion
    var nothing;
    break;
  case 0: //value to strict comparsion
    var againNothing;
    break;
  case 2 < 5: //value to strict comparsion
  case true: //value to strict comparsion can grouping
  //it`s like OR - do script block, at the first true comparsion 
    var anyThing;
    break; //exit

  default: //if all case is false
    var some;
    break;
}


function funcFD(params) { //Function Declaration create before(!) script run
  var code; //only functions have local variable
  return; //undefined
}

var funcFE = function (params) { //Function Expression
  var code;
  return code;
}

var funcNFE = function pow(num, x) { //Named Function Expression
  if(x != 0){
    return num * pow(num, --x);
  } else {
    return num;
  }
} //now we can copy function to another variable and
//recurse still will work

function ask(question, yes, no) { //parameters can be function
  if (confirm(question)){
    yes();
  }else { no() };
}
ask(
  "Do you agree?",
  function() { alert("You were agree."); }, //anonimus function
  function() { alert("You were cancel."); }
);

var anotherFunc = new Function(params, code) //another way,
//good to input code by argument (dynamic compilation)
//LexicalEnvironment == window

function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;
    //
  };
}

function CreateUser(options){ //named parameters by Object
	var result = {};
	result.name = options.name || "TeploryUser";
	result.type = options.type || "user";
	result.password = options.password || "1234";
	result.lifetime = options.lifetime || 60*60*24*15;
	return result; 
}
var user = CreateUser({
	name: "Tom",
	lifetime: 60*60*24*365
}) //this create Object {name: "Tom", type: "user", password: "1234", lifetime: 31536000}


new Date(); //Mon Aug 29 2016 22:55:02 GMT+0300 (Романское время (зима))
new Date(milliseconds) //param - is step by milliseconds from 01.01.1970
new Date(3600 * 24 * 1000) //Fri Jan 02 1970 03:00:00 GMT+0300 (Романское время (зима))
new Date(year, month, date, hours, minutes, seconds, ms) //params to create new date
new Date(2011, 1, 4, 9, 30, 0, 0); // 4 febraly 2011, 09:30:00
var now = new Date();
now.getDate() //return date of the mounth
now.getDay() //return day of the week, when "0" - is sunday
+new Date() == Date.now() //return count of milliseconds

console.time("Mark to time test");
/*code*/
console.timeEnd("Mark to time test"); //return milliseconds diferent from time to timeEnd

//get key down code
document.onkeydown = function(event){console.log(event.code)}

debugger; //pause code by V8, may use console with local envirement


localStorage;
//It`s JSON object in window, unic for domain + port + protocol. Max size 5 MB.
sessionStorage;
//like localStorage, is saved before closing

localStorage.setItem('name', 'Tom'); //undefined
localStorage.getItem('name'); //'Tom'
localStorage.removeItem('name'); //undefined
localStorage.getItem('name'); //null
localStorage.clear(); //remove all
localStorage.length; //return count
localStorage.key(42) //return element by index

for(;;){
  let obj = {};
  localStorage.setItem("obj", JSON.stringify(obj));
  obj = JSON.parse(localStorage.getItem("obj"));
  break;
}