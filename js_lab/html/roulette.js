"use strict";

let numbers = ["0", "34", "10", "21", "28", "4", "18", "9", "27", "22", "12", "3", "17",
                "20", "11", "33", "2", "10", "32", "00", "15", "8", "25", "1", "31", "20",
                 "14", "30", "7", "24", "29", "35", "6", "13", "23", "19", "5", "36"];

function doRoulette()
{
    let roll = Math.floor(Math.random() * length(numbers));
    let color = "";
    let isEven = "";
    let isPassed = "";

    if(roll % 2 == 0)
        color = "Red";
    else
        color = "Black";
    
    if(parseInt(numbers[roll - 1]) % 2 == 0)
        isEven = "Even";
    else
        isEven = "Odd";

    if(parseInt(numbers[roll]) < 19)
        isPassed = "Passed";
    else    
        isPassed = "Failed";


    console.log("This visit's roulette details are: \n", roll, color, isEven, isPassed);
}