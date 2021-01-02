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
    var xmr = new XMLHttpRequest();
    xmr.open("POST", "");
    xmr.responseType = "json";
    xmr.setRequestHeader('Content-Type', 'application/json');

    xmr.onload = function(){
        response = xmr.response;

        document.getElementById("registerMessage").innerHTML = response.message;
        
        var color;
        if(response.type == true) color = "green";
        else color = "red";

        document.getElementById("registerMessage").style.backgroundColor = color;
    }


    xmr.send(JSON.stringify(user));
}