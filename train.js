console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling",
    "to'g'ri boshliq tanlang",
    "uzingizga ishlashni boshlang",
    "siz kuchli bolgan narsalarni qiling",
    "yoshlarga investitsiya qiling",
    "endi dam oling",
];

//CALLBACK FUNCTION

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

console.log("passed here 0");

maslahatBering(65, (err, data) => {
    if(err) console.log('ERROR: ', err);
    else {
        console.log("javob: ", data);
    }
});

//ASYNC FUNCTION

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


// CALL VIA THEN/CATCH
// maslahatBering(25).then(data => { //agar hatolik bo'lsa then ishlamaydi
//     console.log('javob: ', data)
// }).catch(err => {
//     console.log('ERROR: ', err);
// });

// console.log('passed here 1');   

//CALL VIA ASYNC AND AWAIT
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

// const c = findLetter("e", "engineer");
// console.log(c);


/*
    B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


function countNum(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i]>= '0' && str[i]<='9'){
            count++;
        }
    }
    return count;
}

const a = countNum("asdf345346543");
console.log(a);

*/

/*

//MIT_TACK_C
class Shop {
    constructor(non, lagmon, cola){
      this.non = non;
      this.lagmon = lagmon;
      this.cola = cola;
    }
    
    qoldiq(){
      console.log(`${new Date().toTimeString().slice(0, 5)}da ${this.non}ta Non, ${this.lagmon}ta Lagmon va ${this.cola}ta Cola mavjud`);
    }
    
    sotish(item, quantity){
      console.log(`${new Date().toTimeString().slice(0, 5)}`);
      this[item] += quantity;
    }
    
    qabul(item, quantity){
      console.log(`${new Date().toTimeString().slice(0, 5)}`);
      this[item] += quantity;
    }
  }
  
  const shop = new Shop(4, 5, 2);
  
  shop.sotish('non', 3);
  shop.qabul('cola', 4);
  shop.qoldiq();
  
  */
        
