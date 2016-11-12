"use strict";
var response;
var button;
var tochange;

window.onload = function()
{
    button = document.getElementById("lookup");
    tochange = document.getElementById("result");
    button.addEventListener("click",fetchit);
    
};

function fetchit(){
    var textfield = document.getElementById("country");
    var query = textfield.value;
    var httprequest = new XMLHttpRequest;
    httprequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            response = this.responseText;
            tochange.innerHTML = response;
            alert(removeTags(response));
        }
    };
    
    httprequest.open("GET","world.php?country="+query, true);
    httprequest.send("");
    
}

function removeTags(text){
    var txt = text;
    var rex = /(<([^>]+)>)/ig;
    return txt.replace(rex, "  ");

}

