// let a= 10;
// a=20;
// console.log(a);
// let b=20;
// b = 90;
// console.log(b+[]);
//function
// function foo(a: any){
//     return a/2;
// }
// var a=foo("z");
// console.log(a);
//Data type
// let c: boolean[] = [true,false];
// console.log(c);
//Object
// let a= 1+2;
// let b=a+2;
// let obj={
//     name: a,
//     age:b
// }
// let {name,age}= obj;
// console.log(d);
// let d:number = 30;
// console.log(d);
// let a :bigint =90*100000000000000000000000000000000000000;
// let b :bigint =9;
// // if(a===90){
// //     console.log('ok');
// // }
// // console.log(a);
// console.log(b);
//Arrays
//  let a: any = ['hamza','ali',1];
//  console.log(a);
//  a.map((el)=>{
//    if(typeof(el)==='number'){
//      console.log(el);
//  }
//  })
// let arr :[number,number] = [2,1,'string']
// console.log(arr);
// let mySum = function(num1:any ,num2:any):number{
//     // console.log(num1);
//     if(typeof num1 ==='string'){
//         // console.log('num1',num1);
//         num1 = parseInt(num1)
//         console.log(num1);
//     }
//     else if(typeof num2 ==='string'){
//         console.log(num2);
//         num2 = parseInt(num2)
//     }
//     return num1 + num2
// }
// console.log(mySum(5,'7'));
// // ?undefined
// function getName(n1: string, n2?: string): string{
//       return n1+ ' '+n2
// }
// console.log(getName('hamza'));
//no return
// function myvoid(a): void{
//     console.log(a);
//     return a
// }
// console.log(myvoid(2));
//Interface
// function showTodo(todo: {title:string,text:string}){
//     console.log(todo.title,todo.text);
// }
// let myTodo = { title: 'list',text: 'hello'};
// console.log(showTodo(myTodo));
//custom type create
// interface Todo{
//     title: string,
//     text: string
// }
// function showTodo(todo: Todo){
//        console.log(todo.title);
// }
// let myTodo = { title: 'list',text: 'hello'};
// console.log(showTodo(myTodo));
//object
// let person: {
//     name: string;
//     age:number;
//     hobbies: string[]
//     role: [string,number]
// }={
//  name: 'hamza',
//  age:30,
//  hobbies: ['book','cricket'],
//  role: ['hamza',12]
// }
// console.log(person.hobbies[0]);
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// }
//Global constant
var Admin = 'ADMIN';
var User = 'USER';
if (User === User) {
    console.log('ok admin');
}
//enum 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role["USER"] = "hamza";
})(Role || (Role = {}));
var person = {
    name: Role.USER,
    admin: Role.ADMIN
};
console.log(person.name);
//function
// type combinable = number | string;  //more type combine
// type combineDescriptor = 'text-number' | 'text-string'
// function combine(
//     a: combinable,
//     b: combinable, 
//     c: combineDescriptor //String
//     // a: combinable,
//     // b: combinable, 
//     // c: 'text-number'| 'text-string' //String
//     ){
//     let result;
//     if(typeof a === 'number' && typeof b === 'number' ){
//         result = a + b + c;
//     }
//     else {
//         result = a.toString() + b.toString() + c
//     }  
//     return result
// }
// let result1= combine(2,2,'text-number');
// let result2= combine('hamza','ali','text-string');
// console.log(result1);
// console.log(result2);
//
// function num(a: number){
//     return a.toString()
// }
// function num(a: number): number{
//     return a.toString()
// }
// function num(a: number): undefined{
//     console.log(a);
// }
// let result=num(1,2);
// function num(a: number): void{
//     console.log(a);
// }
// let result=num(1,2);
// console.log(result);
//Extra check see
// let userName: unknown;
// let input: string;
// userName = 'hamza';
// input = 'ali';
// // console.log(userName);
// if (typeof input === 'string'){
//     input = userName;
// }
// console.log(input);
// function generateError(errMessage: string, errCode: number): void{
//     throw{
//         errMessage: errMessage,
//         errCode: errCode
//     }
// }
// generateError('Some Technical Error!',404);
// var btn = document.querySelector('button');
// btn.addEventListener('click',()=>{console.log('hello')})
