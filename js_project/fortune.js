// JavaScript Documentvar turnImg;
var changeImg;
var img= new Array (30);
var curImg=0;
var imagesLoaded=0;
while (imagesLoaded<=29) {
img[imagesLoaded] = new Image ();
img[imagesLoaded].src="images/fortunec_s"+ imagesLoaded+".gif";
++imagesLoaded;
}
function change() {
 if(curImg==29)
 curImg=01;
 else
++curImg;
document.images[0].src=img[curImg].src;
}
function startChange(){
if(changeImg!=null)
clearInterval(changeImg);
changeImg=setInterval("change()",75);
}