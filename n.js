//------Problem 1::anaToVori--
//---------starting code--------
function anaToVori(ana) {
    //-------error message section----------
    if (typeof ana != 'string' && ana < 0) {
        return false;
    }
    //--------calculation section---------
    var vori = ana / 16;
    return vori;
}
//------------output section------------
var gold = anaToVori(64);
console.log(gold);
//-------Problem 2::pandaCost--
//---------starting code----------
function pandaCost(singaraQuantity, somusaQuantity, jilapiQuantity) {
    //----------------error message section--------------
    if (typeof singaraQuantity != 'string' && 0 > singaraQuantity) {
        return false;
    }
    else if (typeof somusaQuantity != 'string' && 0 > somusaQuantity) {
        return false;
    }
    else if (typeof jilapiQuantity != 'string' && 0 > jilapiQuantity) {
        return false;
    }
    //-------------calculation section--------------
    const perSingaraCost = 7;
    const perSomusaCost = 10;
    const perJilapiCost = 15;
    const singaraCost = singaraQuantity * perSingaraCost;
    const somusaCost = somusaQuantity * perSomusaCost;
    const jilapiCost = jilapiQuantity * perJilapiCost;
    const totalCost = singaraCost + somusaCost + jilapiCost;
    return totalCost;
}
//------------output section------------
const totalPrice = pandaCost(2, 2, 2);
console.log(totalPrice);
//------------problem 3::picnicBudget--
//----------starting code-----------
function picnicBudget(people) {
    const people1To100 = 5000;
    const people101To200 = 4000;
    const peopleUpTo200 = 3000;
    //---------error message section------------
    if (typeof people != 'string' && 0 > people) {
        return false;
    }
    //-------------calculation section--------------
    else if (people <= 100) {
        const peopleCount = people1To100 * people;
        return peopleCount;
    }
    else if (people <= 200) {
        const first100People = people1To100 * 100;
        const restPeople = people - 100;
        const for200People = people101To200 * restPeople;
        const totalPeople = first100People + for200People;
        return totalPeople;
    }
    else if (people > 200) {
        const first100People = people1To100 * 100;
        const for200People = people101To200 * 100;
        const restPeople = people - 200;
        const upTo200People = peopleUpTo200 * restPeople;
        const totalPeople = first100People + for200People + upTo200People;
        return totalPeople;
    }
}
//---------output section-----------
const totalPersonsBudget = picnicBudget(450);
console.log(totalPersonsBudget);
//---------------problem 4::oddFriend--
//----------starting code------------
function oddFriend(array) {
    //------error message & calculation section---------
    for (let friend of array) {
        if ((friend.length) % 2 !== 0 && typeof friend == 'string') {
            return friend;
            break;
        }
    }
}
//------------array section-----------
let allFriends = ['Tanvir', 'Shiuly', 'Safin', 'Siam', 'Hasina'];
//------------output section---------
let answer = oddFriend(allFriends);
console.log(answer);