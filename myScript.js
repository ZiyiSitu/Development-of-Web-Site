var firstname = null;
var lastname = null;
var gender = null;
var exdays = null;

function readFirstname() {
	firstname = document.getElementById("firstname").value;
}

function readLastname() {
	lastname = document.getElementById("lastname").value;
}

function radioMale() {
	gender = document.getElementById("gender_male").value;
}

function radioFemale() {
	gender = document.getElementById("gender_female").value;
}

function printInfo() {
	document.getElementById("Participation_p2").innerHTML = 
	"You info: " + firstname + " " + lastname + ", " + gender;
}

function allowDropImg(e) {
    e.preventDefault();
}

function dragImg(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function dropImg(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}

function setCookie(username,usernameValue,expDays) {
    var date = new Date();
	var expires = null;
	
    date.setTime(date.getTime() + (expDays*24*60*60*1000));
    expires = "expires=" + date.toGMTString();
    document.cookie = username + "=" + usernameValue + ";" + expires + ";path=/";
}

function getCookie(username) {
    var name = username + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
	
    for(var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
		
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showCookie() {
    var user = getCookie("username");
	
    if (user != "") {
        document.getElementById("Participation_p3").innerHTML = user + ", cookie works.";
    } else {
       user = prompt("Enter your name to enable cookie:","");
	   
       if (user != "" && user != null) {
           setCookie("username", user, 90);
       }
    }
}
