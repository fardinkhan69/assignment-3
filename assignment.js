// https://github.com/fardinkhan69/assignment-3

//Task 1 : kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        // If user input negative value this error message will be shown

        return " Distance can't be a negative value. Please Input a positive value";
    }
    var meter = kilometer * 1000;
    return meter;
}

//results of kilometerToMeter
// var result1 = kilometerToMeter(52);
// console.log(result1);

var result1 = kilometerToMeter(-52);
console.log(result1);

// Task 2: budgetCalculator

//watch,phone,laptop = quantity of these things you want to buy

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        // If user input negative value this error message will be shown

        return "  quantity can't be a negative value. Please Input a positive value";
    }

    else if (watch % 1 != 0 || phone % 1 != 0 || laptop % 1 != 0){

        // so that float number is not accepted by program
        return "your value is not proper .Quantity can't be a float number . Please input a intiger number" 
    }
   
    // watch,phone ,laptop usual prices ;

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;


    var totalWatchPrice = watchPrice * watch;
    var totalPhonePrice = phonePrice * phone;
    var totalLaptopPrice = laptopPrice * laptop;

    //total sum of all bills

    total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return total;
}
//results of budgetCalculator;

// var result2 = budgetCalculator(1,2.5,2);
// console.log(result2);

var result2 = budgetCalculator(1,2,2);
console.log(result2);

// Task 3 : hotelCost

//stayDay = how many days you want to stay ;

function hotelCost(stayDay) {
    var totalCost = 0;
    if (stayDay < 0) {
        // If user input negative value this error message will be shown

        return " stayDay can't be a negative value. Please Input a positive value";
    }

    //if user input a float number

    if(stayDay % 1 != 0){
        return " stayDay can't be a float number . Please Input a intiger value"
    }

    //if user stays between 1-10 days
    else if (stayDay <= 10) {
        totalCost = 100 * stayDay;
    }

    // if user stays more than 10 day 
    else if (stayDay <= 20) {
        var firstPart = 100 * 10;
        var remainingDay = stayDay - 10;
        var secondPart = 80 * remainingDay;
        totalCost = firstPart + secondPart;
    }

    // if user stays more that 20 days
    else {
        var firstPart = 100 * 10;
        var secondPart = 80 * 10;
        var remainingDay = stayDay - 20;
        var thirdPart = 50 * remainingDay;
        totalCost = firstPart + secondPart + thirdPart;
    }

    // total cost of staying at hotel 

    return totalCost;

}
//Results of hotel cost
var result3 = hotelCost(17);
console.log(result3);

//  var wrongInput = hotelCost(-3);
//  console.log(wrongInput);

// Task 4 megaFriend 


function megaFriend(friendsName) {

    var biggestName = friendsName[0];

    if (friendsName.length == 0){
        //If user input empty array this message will be shown
        return "Array can't be empty in This case. Please provide some values"
    }
    for (var i = 0; i < friendsName.length; i++) {

        var tempContainer = friendsName[i];

        if (tempContainer.length > biggestName.length) {
            biggestName = tempContainer;
        }
    }
    return biggestName;


}

//results of megaFriend
 var friends = ["Riyad","Mahmudul","Tano","Naima","Rafa"];
 var result4 = megaFriend(friends);
 console.log(result4);

// var friends2 = [];
// var result5 = megaFriend(friends2);
// console.log(result5)


