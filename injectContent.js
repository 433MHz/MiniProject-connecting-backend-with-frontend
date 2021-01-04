function getInfo(){
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/getInformations");
    xhr.responseType = "json";

    xhr.onload = function(){
        response = xhr.response;
        inject(response);
    }

    xhr.send();
}



function inject(informations){

    var html2="";

    informations.forEach(function(info){
        var html = "";
        html = html + "<div class='container'>";
        html = html + "<div class='container-left'>";
        html = html + "<div class='container-topBar'>"+ info.title + "</div>";
        html = html + "<div class='container-content'>"+ info.content +"</div>";
        html = html + "</div>";
        html = html + "<div class='container-right'>";
        html = html + "Added by: "+ info.login +"<br>";
        html = html + "Date: "+ info.date +"<br>";
        html = html + "Hour: " + info.hour + "<br>";
        html = html + "</div>";
        html = html + "</div>";
        html2 = html2 + html;
    });

document.getElementById("bottom-content").innerHTML = html2;
}


onload = getInfo;