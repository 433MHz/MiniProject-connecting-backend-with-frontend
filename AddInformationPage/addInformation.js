function addInformation(){
    var login = document.getElementById("loginText").value;
    var password = document.getElementById("passwordText").value;
    var title = document.getElementById("logoText").value;
    var information = document.getElementById("contentText").value;


    var information = {
        login: login,
        password: password,
        title: title,
        content: information
    }

    sendInfo(information);
}

function sendInfo(information){
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/sendInformation");
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function(){
        response = xhr.response;

        document.getElementById("message").innerHTML = response.message;
        
        var color;
        if(response.success == true) color = "green";
        else color = "red";

        document.getElementById("message").style.color = color;
    }


    xhr.send(JSON.stringify(information));
}