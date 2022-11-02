
var input = "sagar";
input = prompt("enter your string")
var flag = true;
while (flag) {
    if (input > 0)
        // input = alert("Number greater than 1")
        break;

    else if (input <= 0) {
        // input = alert("less than 1")
        break;
    }
    else {
        alert("nice string")
        input = prompt("do u want to exit if yes press")
        if (input == 0)
            break;

    }
    input = prompt("enter ur string again");


}






















