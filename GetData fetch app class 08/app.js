// //Synchronous and Asynchronous behaviour
// console.log('Start up friend');

// setTimeout(()=>{
//     console.log('Second friend');
// },1000)
// console.log('end up friend');

// //callback

// function greeting(msg,greetingPrint){
//    console.log('hello',msg);
// }

// function greetingPrint(msg){
//     alert('Ok sucess')
// }

// greeting('hello World',greetingPrint)

//Promises
let data =new Promise((res,rej)=>{
    let arr= [10,12,2,2,31,12];
    res(arr)
})

data
.then((a)=>{
    console.log(a);
})

.catch(()=>{
    console.log('Error');
})


//async
//await
//try 
//catch