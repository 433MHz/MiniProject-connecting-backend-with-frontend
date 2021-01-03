function registerOperation(){
    var login = document.getElementById("RegisterLoginText").value;
    var password = document.getElementById("RegisterPasswordText").value;
    var repeatPassword = document.getElementById("RegisterPasswordRepeatText").value;

    document.getElementById("RegisterLoginText").value = null;
    document.getElementById("RegisterPasswordText").value = null;
    document.getElementById("RegisterPasswordRepeatText").value = null;

    var user = {
        login: login,
        password: password,
        repeatedPassword: repeatPassword
    }

    addUser(user);
}

function addUser(user){
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/addNewUser");
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function(){
        response = xhr.response;

        document.getElementById("registerMessage").innerHTML = response.message;
        
        var color;
        if(response.succes == true) color = "green";
        else color = "red";

        document.getElementById("registerMessage").style.color = color;
    }


    xhr.send(JSON.stringify(user));
}

