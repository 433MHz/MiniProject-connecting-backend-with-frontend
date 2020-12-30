function logInOperation()
{
    var login = document.getElementById("LoginLoginText").textContent;
    var password = document.getElementById("LoginPasswordText").textContent;
    loginObject.login = login;
    loginObject.password = password;
}


function registerOperation()
{
    var login = document.getElementById("RegisterLoginText").textContent;
    var password = document.getElementById("RegisterPasswordText").textContent;
    var repeatPassword = document.getElementById("RegisterPasswordRepeatText").textContent;

    registerObject.login = login;
    registerObject.password = password;
    registerObject.repeatPassword = repeatPassword;
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