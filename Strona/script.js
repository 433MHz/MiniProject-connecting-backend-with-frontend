function logInOperation()
{
    var login = document.getElementById("LoginLoginText").textContent;
    var password = document.getElementById("LoginPasswordText").textContent;
    
    sendData();
}


function registerOperation()
{
    var login = document.getElementById("RegisterLoginText").textContent;
    var password = document.getElementById("RegisterPasswordText").textContent;
    var repeatPassword = document.getElementById("RegisterPasswordRepeatText").textContent;

    sendData();
}

var loginObject
{
    var login;
    var password;
}

var registerObject
{
    var login;
    var password;
    var repeatPassword;
}

var object;

function sendData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            object = JSON.parse(this.responseText);
            document.getElementById("container").innerHTML = object.firstName;
        }
    };
    xhttp.open("GET", "http://localhost:8080/RestApiPractising/webapi/student/get/2", true);
    xhttp.send();
}