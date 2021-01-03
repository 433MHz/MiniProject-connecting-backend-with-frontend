onload = hide; 

function hide(){

    if(token != null){
        document.getElementById("topBar-inside-1button").style.display = "block";
            document.getElementById("topBar-inside-3button").style.display = "none";
            document.getElementById("topBar-inside-4button").style.display = "none";
    }
    else{
        document.getElementById("topBar-inside-1button").style.display = "none";
    }
}