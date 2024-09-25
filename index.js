var password = "theworldisquiethere";
function passcheck() {
var userpassword = (document.getElementById("pass1").value)

    if(userpassword != password){
        alert("Wrong password.");
        return false;
    }
    if(userpassword == password){
        alert("Access Granted. Press OK to enter");
    }
}