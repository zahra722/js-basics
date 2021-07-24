// 1 javascript console API
// console.log("hello world");
// console.error("this is an error");


// 2.javascript variables
// var number1 = 34;
// var number2 = 55;
// console.log(number1 + number2);

//3.data types in js
//number
// var num1 = 12;
// var num2 = 4;

//strings
// var str1 = "hello";
// var str2 = "byee";

//objects
// var marks = {
//     aditi: 34,
//     fiza: 66,
//     zahra: 99

// }

//booleans
// var a = 45;
// var b = 6;
// console.log(a<b);
// console.log( num1);
// console.log(marks)

// var a = undefined;
// console.log(a);

// var b = null;
// console.log(b);

/* there are two types of data types in js 
1. primitive data type: undefined,null,number,string,boolean,symbol 
2. reference data type:array and objects
*/

// var arr = [1,3,"bablu",4]
// console.log(arr);

// operators in js

// var a = 7;
// var b = 7;

// console.log("the value od a&b is", a+b)
// console.log("the value od a&b is", a-b)
// console.log("the value od a&b is", a/b)
// console.log("the value od a&b is", a*b)

// assignment operators
// comparism operators

// logical operators

// console.log(true && true)
// console.log(true || false)
// console.log(!false);

// function in javascript
// DRY = do not repeat yourself
// function avg(a,b){
//     c = (a+b)/2;
//     return c;
// }

// c1 = avg(1,2);
// c2 = avg(3,4);
// console.log(c1,c2);

// conditionals in js
// if,else and else if
// var age=6;
// if(age>7){
//     console.log("hey");
// }
// else{
//     console.log("byee");
// }

// loops in js
// var a = [1,2,3,,5,6,7,8,9];
// for( var i=0;i<a.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(a[i])

// }

// a.forEach(function(element){
//     console.log(element);
// })

// constant are used when you have doubt of overwiting something
// const a=3;
// a++;


// let j=0;
// while(j<a.length){
//     console.log(a[j]);
//     j++;
// }
// do{
//     console.log(a[j]);
//     j++;
// }
// while(j<a.length);

// array method   many methods are there go and search on internet here are only few examples
// let arr = ["fan", 4,5,null];
// console.log(arr.length);
// arr.pop();
// arr.shift();
// arr.push("zahra");
// arr.unshift("moti")
// const newlen = arr.unshift("zahra")
// console.log(newlen);
// console.log(arr);

// strings method in js

// let zahra = "my lovely spirit"
// console.log(zahra.length);
// console.log(zahra.indexOf("my"));
// console.log(zahra.lastIndexOf("my"));
// console.log(zahra.slice(2,5));

// b = zahra.replace("my","tuba");
// console.log(b)
// note = replace always work on first preference

// let myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

// DOM - document object model 

// let elem = document.getElementById('click');
// console.log(elem);
// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].classList.add("bg-primary");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// tn = document.getElementsByTagName("div");
// console.log(tn)
// createdelement = document.createElement('p');
// createdelement.innerText = "this is a created para";
// tn[0].appendChild(createdelement);

// createdelement2 = document.createElement('b');
// createdelement2.innerText = "this is a created para";

// tn[0].replaceChild(createdelement2,createdelement);
// removeChild(element); -----> removes an element

//selecting using query can be usefull mostly for css
// sel = document.querySelector('.container')
// console.log(sel)


// function clicked(){
//     console.log('the button was clicked')
// }
// window.onload = function(){
//     console.log('the document was loaded')
// }

// // events in js
// firstcontainer.addEventListener('click',function(){
//     console.log("clicked on container")
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// })

// fetch api

// console.log("this is my fetch api part")

// butto with id mybtn
let mybtn = document.getElementById("mybtn");
// div with id content
let content = document.getElementById("content");

// function getDate(){
//     console.log("started get data")
//     url = "https://getbootstrap.com/";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
//     })
// }
// console.log("before running getdata")
// getDate()
// console.log("after running getdata")

// postdata 
// function postData(){
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"zahra85","salary":"123","age":"23"}'
//     params = {
//         method : 'post',
//         headers: {
//             'Content-type' : 'application/json'
//         },
//         body: data
//     }
//     fetch(url,params).then(response=> response.json())
//     .then(data=> console.log(data)
//     )
// }
// postData()

// async& await  funct async functions return promises

// async function zahra(){
//     console.log('inside funct');
//     const responce = await fetch("https://api.github.com/users");
//     console.log('before responce');
//     const users = await responce.json();
//     console.log('user resolved')
//     return users;

//     // return "zahra";
// }

// let a = zahra();
// console.log(a);
// a.then(data => console.log(data))


// es6 in js


// const person = {
//     name: 'zahra',
//     walk(){
//         console.log(this);
//     }
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk();

// arrow functions
// const jobs = [
//     {id: 1,isActive: true},
//     {id: 2,isActive: true},
//     {id: 3,isActive: false},


// ]
// const activejobs = jobs.filter(job => job.isActive);

// map
// const colors = ['red','green','blue'];
// const items = colors.map(color => `<li>${color}</li>` );
// console.log(items)

// object  destructuring

// const address = {
//     street:'',
//     city:'',
//     country: ''
// };

// const {street, city,country} = address;

// // spread operator
//  const first =[1,2,3];
// const second =[ 4,5,6];
// const combined =[...first,'a',...second,'b'];
// console.log(combined)

// const clone = [...first]
// console.log(first);
// console.log(clone);   

// classes

class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
class Teacher extends Person {
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("mosh","msc");
console.log(teacher)

// modules

// Default -> import ....from './...';
// named -> import {..} from './...';




