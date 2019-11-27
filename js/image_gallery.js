const images = document.getElementsByClassName("thumbnail");
const selected = document.getElementById("selected");

const opacity = 0.5;

//Set opacity of first image
images[0].style.opacity=opacity;

console.log(images);
for(i=0;i<images.length;i++){
    //console.log(images[i]).firstChild.nodeValue;
    images[i].addEventListener("click",zoomImg);
}

function zoomImg(){
    for(i=0;i<images.length;i++){
        //Reset the opacity of all thumbnails
        images[i].style.opacity = 1;

        //Change current image to source of clicked image

    }
}
