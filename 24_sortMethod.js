// 1,2,3,4,5 ---> Ascending order
// 5,4,3,2,1 ---> Descending order
// A,B.C,D ---> Ascending order
// D,C,B,A ---> Descending order

const friendList = ['jenny','stew','bill','elon'];
console.log(friendList);
const sortList = friendList.sort();
console.log(sortList);
const sortList1 = friendList.reverse();
console.log(sortList1);

const rollNumber = [1,54,14,68,87,7,34,111];
console.log(rollNumber);
// const sortRollNumber = rollNumber.sort();
// console.log(sortRollNumber);
const sortAscendingRollNumber = rollNumber.sort((n1,n2)=>{
    return n1 > n2 ? 1 : -1; 
});
console.log(sortAscendingRollNumber);

// const sortdescendingRollNumber = rollNumber.sort((n1,n2)=>{
//     return n1 < n2 ? 1 : -1; 
// });
// console.log(sortdescendingRollNumber);
console.log(rollNumber.reverse());

