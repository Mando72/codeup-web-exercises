"use strict";

var restaurants = [
    {
        Name: "Tink-a-Taco",
        City: "San Antonio",
        State: "Tx",
        Category: "Tex-Mex",
        Stars: "4"
    },
    {
        Name: "Goombas Pizza",
        City: "San Antonio",
        State: "Tx",
        Category: "Italian",
        Stars: "4"
    },
    {
        Name: "Golden Wok",
        City: "San Antonio",
        State: "Tx",
        Category: "Chinese",
        Stars: "5"
    }

];

restaurants.forEach(function(restaurant){
    console.log(restaurant.Name  + " is a " + restaurant.Category  +
        " in " + restaurant.City  + restaurant.State + ". " +
        "I would give it a " + restaurant.Stars +  " star rating" );
});

var nameLocation = document.getElementsByTagName('ul');

restaurants.forEach(function(nameLocation){
    console.log(nameLocation);
});

var index = restaurants.lastIndexOf();
console.log(index);



