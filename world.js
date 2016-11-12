"use strict";
var response;
var button;
var tochange;
var query;
var textfield;

window.onload = function()
{
    button = document.getElementById("lookup");
    textfield = document.getElementById("country");
    tochange = document.getElementById("result");
    query = textfield.value;
    button.addEventListener("click",fetchit);
    
};

function fetchit(){
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

