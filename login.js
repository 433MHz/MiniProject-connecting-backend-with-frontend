function logInOperation(){
    var login = document.getElementById("LoginLoginText").value;
    var password = document.getElementById("LoginPasswordText").value;

    document.getElementById("LoginLoginText").value = null;
    document.getElementById("LoginPasswordText").value = null;

    var user = {
        login: login,
        password: password
    }

    loginUser(user);
}

function loginUser(user){
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/getUserToken");
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function(){
        response = xhr.response;

        document.getElementById("loginMessage").innerHTML = response.message

        var color;
        if(response.success) color = "green";
        else color = "red";

        document.getElementById("loginMessage").style.color = color;
    }


    xhr.send(JSON.stringify(user));
}