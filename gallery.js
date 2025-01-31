function upDate(imgElement){
    document.getElementById('box').innerHTML = imgElement.alt;
    document.getElementById('box').style.backgroundImage = `url('${imgElement.src}')`; 
}
function unDo(){
    document.getElementById('box').innerHTML = line;
    document.getElementById('box').style.backgroundImage = "none";
}
var line = "Hover over an image below to display here";
function HULALA(){
    currentImages = document.querySelectorAll(".grid .preview");
    for (var i =0; i < currentImages.length; i++){
        console.log("Image "+i)
        currentImages[i].setAttribute("tabindex","0");
    }
}
