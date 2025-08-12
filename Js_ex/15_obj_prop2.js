/**
 * data = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 
 * 배열을 객체로 만드시오. 
 * (makeObjectFromArray)

=> { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
 */

const data = [
    ['A', 10, 20], 
    ['B', 30, 40], 
    ['C', 50, 60, 70]
];

function makeObjectFromArray(arrdata) {
    let retObj = {};
    for (const [k, ...v] of arrdata) {
        // retObj[k] = v; // 백엔드
        retObj = {... retObj, [k]: v}; // 프론트앤드
    }
    return retObj;
};

console.log(makeObjectFromArray(data));

/* 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)

dataObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

=> [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
*/

const dataObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

function makeArrayFromObject(objdata) {
   let retArr = [];
    for(const [k,v] of Object.entries(objdata)){
        retArr= [... retArr, [k, ...v]];
        // retArr.push([k,...v]);
    }
    return retArr;
};

console.log(makeArrayFromObject(dataObj)); 

