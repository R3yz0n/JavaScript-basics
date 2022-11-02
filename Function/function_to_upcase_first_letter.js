

function uppercase(s) {


    if (s.charAt(0) == s.charAt(0).toUpperCase()) {


        s = s.charAt(0).toLowerCase() + s.slice(1);

        return s
    }
    else (s.charAt(0) == s.charAt(0).toLowerCase())
    {

        s = s.charAt(0).toUpperCase() + s.slice(1);
        return s
    }




}

let input = prompt("Enter to upper case first letter of string");
input = uppercase(input);
alert("\n \nOUTPUT == " + input + "\nSee what's changed!!")
