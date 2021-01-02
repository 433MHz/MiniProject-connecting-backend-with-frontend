var user = {
    login: "",
    password: ""
}

function registerOperation(){
    var login = document.getElementById("RegisterLoginText").value;
    var password = document.getElementById("RegisterPasswordText").value;
    var repeatPassword = document.getElementById("RegisterPasswordRepeatText").value;

    document.getElementById("RegisterLoginText").value = null;
    document.getElementById("RegisterPasswordText").value = null;
    document.getElementById("RegisterPasswordRepeatText").value = null;

    if(password == repeatPassword){
        user.login = login;
        user.password = password;
        addUser(user);
        document.getElementById("registerMessage").innerHTML = "Zarejestowano użytkownika pomyślnie";
    }
}

function addUser(user){
    var xmr = new XMLHttpRequest();
}