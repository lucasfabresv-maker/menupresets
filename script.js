const params = new URLSearchParams(window.location.search);

const img = document.getElementById("image");

const image = params.get("image");
const url = params.get("url");

if(url){

    img.src = url;

}else if(image){

    img.src = `images/${image}.png`;

}else{

    document.body.innerHTML = "";

}