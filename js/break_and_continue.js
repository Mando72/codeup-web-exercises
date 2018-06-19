
while(true){
var userNum = prompt("Enter an odd number between 1 and 50 ");

if(userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
    break;

}
    console.log("number to skip is: + userNum");

}


for(var i = 1; i <= 50; i + 1) {
    if (i % 2 === 0) {
    } if (i !== parseInt(userNum)) {
        break;
        console.log("Here is an odd number!");
    }else {
        console.log("Yikes! skipping number: + userNum");
    }

}