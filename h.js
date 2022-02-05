// function picnicBudget(people) {
//     const people1To100 = 5000;
//     const people101To200 = 4000;
//     const peopleUpTo200 = 3000;

//     if (people <= 100) {
//         const peopleCount = people1To100 * people;
//         return peopleCount;
//     }


//     else if (people <= 200) {
//         const first100People = people1To100 * 100;
//         const restPeople = people - 100;
//         const for200People = people101To200 * restPeople;
//         const totalPeople = first100People + for200People;
//         return totalPeople;
//     }

//     else {
//         const first100People = people1To100 * 100;
//         const for200People = people101To200 * 100;
//         const restPeople = people - 200;
//         const upTo200People = peopleUpTo200 * restPeople;
//         const totalPeople = first100People + for200People + upTo200People;
//         return totalPeople;
//     }

// }

// const totalPersonsBudget = picnicBudget(275);
// console.log(totalPersonsBudget);





// function oddFriend(array) {
//     for (let friend of array) {
//         if ((friend.length) % 2 !== 0) {
//             return friend;
//             break;
//         }
//     }
// }
// // let allFriends = ['Tanvir', 'Shiuly', 'Safin', 'Siam', 'Hasina'];
// // let answer = oddFriend(allFriends);
// // console.log(answer);

// // function anaToVori(ana) {

// //     if (typeof ana != 'string' && ana <= 0) {
// //         return false;
// //     }

// function pandaCost(singaraQuantity, somusaQuantity, jilapiQuantity) {

//     if (typeof singaraQuantity != 'string' && 0 > singaraQuantity) {
//         return false;
//     }
//     else if (typeof somusaQuantity != 'string' && 0 > somusaQuantity){
//         return false;
//     }
//     else if (typeof jilapiQuantity != 'string' && 0 > jilapiQuantity){
//         return false;
//     }

//     // calculation
//     const perSingaraCost = 7;
//     const perSomusaCost = 10;
//     const perJilapiCost = 15;

//     const singaraCost = singaraQuantity * perSingaraCost;
//     const somusaCost = somusaQuantity * perSomusaCost;
//     const jilapiCost = jilapiQuantity * perJilapiCost;


//     const totalCost = singaraCost + somusaCost + jilapiCost;
//     return totalCost;
// }

// const totalCost = pandaCost(1, 1 , 1);
// console.log(totalCost);



// if (typeof str !== 'string') {
//     return false;
//   }

//   const num = Number(str);

//   if (Number.isInteger(num) && num > 0) {
//     return true;
//   }

//   return false;
// }

// function isNegativeInteger(value) {
//     if (Number.isInteger(value) && value < 0) {
//       return true;
//     }

//     return false;
//   }


//---------------problem 4------------------

//------starting code-----
function oddFriend(array) {

    //---------calculation section------------
    for (let friend of array) {
        if ((friend.length) % 2 !== 0 && typeof friend == 'string') {
            return friend;
            break;
        }
    }
}
//------------array section-----------
let allFriends = [4, 9, 8, 2, 5, 7, 3, 6, 5];

//------------output section---------
let answer = oddFriend(allFriends);
console.log(answer);



