//

//Task 1 : kilometerToMeter

function kilometerToMeter(kilometer){
    if(kilometer < 0){
        // If user input negative value this error message will be shown
        
        return " Kilometer can't be a negative value. Please Input a positive value";
    }
    var meter = kilometer * 1000;
    return meter;
}


// Task 2: budgetCalculator

function budgetCalculator(watch,phone,laptop){
    if(watch < 0){
        // If user input negative value this error message will be shown
        
        return " watch can't be a negative value. Please Input a positive value";
    }
    else if (phone < 0){
        // If user input negative value this error message will be shown
        
        return " Phone can't be a negative value. Please Input a positive value";
    }
    else if(laptop < 0){
        // If user input negative value this error message will be shown
        
        return " Laptop can't be a negative value. Please Input a positive value";
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

    return total ;
}

// Task 3 : hotelCost

function hotelCost (stayDay){
    var totalCost = 0;
    if (stayDay <= 10){
        totalCost = 100 * stayDay ;
    }
    else if (stayDay <= 20){
        var firstPart = 100 * 10;
        var remainingDay = stayDay - 10;
        var secondPart = 80 * remainingDay;
        totalCost = firstPart + secondPart;
    }



}
