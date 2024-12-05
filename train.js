/*
TASK F

Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/



function findDoublers(str){
    for(let i = 0; i<str.length; i++){
       for(let k = i+1; k<str.length; k++){
         if(str[i] == str[k]){
           return true;
         }
       }
    }
    return false;
}
  
console.log(findDoublers("helo"))





/*
E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

/*
function getReverse(str){
    return str.split("").reverse().join("");
  }
  
const ourString = getReverse("Xislat");
console.log(ourString);
*/


/*
D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

//1. turn string to arrays
//2. check the each elemen from the first elem if it exists in the second array
//3. if it exists then delete the item from both arrays

/*
function checkContent(a, b){
    let arr1 = a.split("");
    let arr2 = b.split("");
  
    console.log(arr1);
    console.log(arr2);
    
   if (arr1.length !== arr2.length) { //length mismatch
       console.log(false);  
       return false;  
    }
    
    for(let i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i])){ //match checker
        let index = arr2.indexOf(arr1[i]);
        arr2.splice(index, 1);
        console.log(arr2);
        
      } else if (!arr2.includes(arr1[i])){ //mismatch checker
        console.log(false);
        return false; 
      }
    }
    
    console.log(true);
    return true;
  }
  
  
  checkContent("he", "hello");
*/
/*

MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

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




//**********TRAIN.JS CODE*********

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling",
//     "to'g'ri boshliq tanlang",
//     "uzingizga ishlashni boshlang",
//     "siz kuchli bolgan narsalarni qiling",
//     "yoshlarga investitsiya qiling",
//     "endi dam oling",
// ];

// //CALLBACK FUNCTION

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback("insert number", null);
//     else if(a <= 20)  return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//             setInterval(()=>{
//                 callback(null, list[5]);
//             }, 1000);
//         };
// }

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR: ', err);
//     else {
//         console.log("javob: ", data);
//     }
// });

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
















