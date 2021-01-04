var html = "<div class='container'>";
html = html + "<div class='container-left'>";
html = html + "<div class='container-topBar'>Title</div>";
html = html + "<div class='container-content'>Content</div>";
html = html + "</div>";
html = html + "<div class='container-right'>";
html = html + "Dodał: <br>";
html = html + "Dnia: <br>";
html = html + "O godzinie: <br>";
html = html + "</div>";
html = html + "</div>";


function inject(){
    var html2;
for(i = 0; i < 10; i ++){
    html2 = html2 + html;
}
document.getElementById("bottom-content").innerHTML = html2;
}


onload = inject;