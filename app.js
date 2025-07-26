// 01
var Age = prompt("Enter Your Age:")
let Email = prompt("Enter Your Email:")
const namee = prompt("Your Name:");
alert("Your Age Is"+Age);
alert(" Your Email Is"+ Email);
alert("your Name " + namee);

 //02
 var Age=23;
 var name="Fadeen";
var city = "karachi";
alert("MY Age IS " + Age + "My Name Is "+ name +"My City Is " +city);

//03
alert("Varibale Js Allow And Few Dont Allow.");
alert("These few Are Allowed 1: Var Abc , 2 : var _Abc , 3: var $Abc ,  4: var Abc879 , 5:var abC");
alert("These few Are Not Allowed 1: Var 123Abc , 2 : var Abc@# , 3: var var ,  4: var function , 5:var Abc Def ")
//Allowed
 //var Abc
//var _Abc
//var $Abc
//var Abc87
//var abC

//Not Allowed

//Var 123Abc
//var Abc@# 
//var var 
//var function 
//var Abc Def 


//04

alert("performing task on the Operaors");
var add = 100;
var sub = 10;
var multi = 2;
var div = 1;
alert(add-sub*multi/div);

//05
alert("check value To increase or decrease")
 num = 4;
var num1 = num++;
var num2 =--num;
var num3 =++num;
var num4 =num--;
alert(num1);
alert(num2);
alert(num3);
alert(num4);

//06
alert("Multiple opertaions");
var a = 10;
var b = 2;
var c = 3;
alert(a-b+c);

//07
var firstName='Fardeen';
var secondName='Ali';
alert(" Here We Have Concatinated  " + firstName+secondName);

//08
var fav = prompt("Whats Your fav color");
alert("Your Fav Color is " + fav);

//09

var Age = prompt("whats your age");
if(Age==Age)
    {
        alert("Your age is " + Age);
    }
    else
    {
            alert("pata nhi");
    }
//10
var no1 = prompt("Enter No1 to check equal or not");
var no2=prompt("Enter No2 to check equal or not");
var check = no1==no2;
alert(check);

//11
alert("Multiply Input check");
var Male = 18;   
var female= 16;
var age =prompt("Whats Your Age To Check");
if(age==Male)
{
alert("Your Eligable as a Man becz your age is 18");
}
else if(age==female)
{
    alert("Your age is 16 You are eligble to as a Female");
}
else
{
alert("Enter valid Age..");
}

//12



alert("How Many marks You Have Got");
var marks=prompt("your marks are")
var Eng = 70;
var math = 80;
var Os = 90;

if(marks>=70)
    {
        alert("U got in English" +Eng);
    }
    else if(marks>="80")
    {
    alert("These Marks you Got In Math"+math);
    }
    if(marks==90)
    {
        alert("You got these in OS"+Os)
    }
    else
    {
     alert("in other Subjects Maybe")
    }
    
    //13
alert("creating array");
var FruitNames=["Apple ", "Banana", "Ornage" ,  "Grapes"]
alert(FruitNames[0]);

//14
var Names=["Fardeen" , "ALi", "Alica","jonsan","Smith"]
Names.push("Aryan");
alert(Names);
Names.shift();
alert(Names);


//15

var List=["Red","Black","Green","Pink","Purple","Yellow"]
List.splice(6,0,"White");
alert(List)
List.splice(2,0,"Blue")
alert(List);
 var newlist=List.slice(4,7)
 alert(newlist)

 //16
 for(i=1;i<=10;i++)
    {
        alert("hi")
    }
