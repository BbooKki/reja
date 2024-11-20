console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling",
    "to'g'ri boshliq tanlang",
    "uzingizga ishlashni boshlang",
    "siz kuchli bolgan narsalarni qiling",
    "yoshlarga investitsiya qiling",
    "endi dam oling",
];

function maslahatBering(a, callback){
    if(typeof a !== "number") callback("insert number", null);
    else if(a <= 20)  return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
            setInterval(()=>{
                callback(null, list[5]);
            }, 1000);
        };
}





// async function maslahatBering(a){
//     if(typeof a !== "number") throw new Error("insert number");
//     else if(a <= 20)  return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) =>{
//             setInterval(()=>{
//                 resolve(list[5]);
//             }, 1000)
//         });


//         // setTimeout(() => {
//         //     callback(null, list[5]);
//         // }, 5000);
//     }
// }

console.log("passed here 0");

maslahatBering(65, (err, data) => {
    if(err) console.log('ERROR: ', err);
    else {
        console.log("javob: ", data);
    }
});

// maslahatBering(25).then(data => { //agar hatolik bo'lsa then ishlamaydi
//     console.log('javob: ', data)
// }).catch(err => {
//     console.log('ERROR: ', err);
// });

// console.log('passed here 1');   

// async function run(){
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();














/* 
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

//MASALANI YECHIMI:
// function findLetter(a, b){
//     let count = 0;
//     for(let i = 0; i<b.length; i++){
//         if(a === b[i]){
//             count += 1;
//         }
//     }

//     return count;
// }

// const c = findHow("e", "engineer");
// console.log(c);