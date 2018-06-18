"use strict";



var allCones = Math.floor(Math.random() * 50) + 50;


do {

    console.log("Start of the day I have  " +  allCones  +   " left");

    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if(conesToSell <= allCones){

        console.log("I sold " + conesToSell);
        allCones = allCones - conesToSell;

    }else if (allCones === 0) {
        console.log("I can go home");

    }else{

        console.log("I don\'t have " +conesToSell+" cones to sell");

    }

}
while (allCones !== 0);
