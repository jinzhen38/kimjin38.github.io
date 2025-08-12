/** 다음과 같이 부서와 직원 객체가 있을 때, 
/deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id)

const hrTeam = {id: 1, dname: '인사팀'};  
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];  
const hong = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];
 */

/** 
console.log(deptMap); 
// Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); 
// Map(4) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); 
// Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
console.log(empDept.get(kim).dname); // '개발팀'
 */


const hrTeam = {id: 1, dname: '인사팀'};  
const devTeam = {id: 2, dname: '개발팀'}; 
const depts = [ hrTeam, devTeam ];  

const hong = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, 
    {id:3, name: 'Park', dept: 2}, 
    {id: 4, name: 'Choi', dept: 2} ];


// deptMap: 부서 id → 부서 객체 
const deptMap = new Map(depts.map(dept => [dept.id, dept]));
                    // depts 배열을 순회하며 dept 객체를 [키, 값] 형태로 변환
                //위 배열을 기반으로 Map 객체 생성

// 직원 ID → 직원 객체
const empMap = new Map(emps.map(emp => [emp.id, emp]));

// empDept: 직원 객체 → 부서 객체
const empDept = new Map(emps.map(emp => [emp, deptMap.get(emp.dept)]));

// 또다른 방식 - 비추 
const empDept1 = new Map(
    emps.map(emp =>{
    const {dept} = emp;
    delete emp.dept;
        return [emp, deptMap.get(dept)];
    })
);

console.log(deptMap);
console.log(empMap);
console.log(empDept);
console.log(empDept.get(kim).dname);

function getEmp(empId) {
  // {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
}
assert.deepStrictEqual(getEmp(1), {id:1, name: 'Hong', dept: {id:1, dname: '인사팀'}});


//const devEmps = emps.filter(emp => deptMap.get(emp.dept).dname === '개발팀');
console.log(devEmps.map(e => e.name).join(', '));  // Kim, Park, Choi