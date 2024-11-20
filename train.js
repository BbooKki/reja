/* 
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

//MASALANI YECHIMI:
function findLetter(a, b){
    let count = 0;
    for(let i = 0; i<b.length; i++){
        if(a === b[i]){
            count += 1;
        }
    }

    return count;
}

const c = findHow("e", "engineer");
console.log(c);
