// JavaScript Documentfunction spop() {

var horizontalPosition = "left"; // "left" or "right" (defaults to "left");
var divID = "floater"; // div's id value
var divWidth=parseInt(document.getElementById(divID).style.width);
var divHeight=parseInt(document.getElementById(divID).style.height);
var divBorderWidth=2*(parseInt(document.getElementById(divID).style.borderWidth)>0)?parseInt(document.getElementById(divID).style.borderWidth):0;
var scrolloffsetX=(navigator.userAgent.indexOf('MSIE')!=-1&&navigator.userAgent.indexOf('Opera')==-1)?0-divBorderWidth:15+divBorderWidth;
function PostionFloatingDiv(){
var scrollpositionX=0,scrollpositionY=0,viewX=0;
if(self.pageYOffset){
  scrollpositionX=self.pageXOffset;
  scrollpositionY=self.pageYOffset;
  }
else if(document.documentElement&&document.documentElement.scrollTop){
  scrollpositionX=document.documentElement.scrollLeft;
  scrollpositionY=document.documentElement.scrollTop;
  }
else if(document.body){
  scrollpositionX=document.body.scrollLeft;
  scrollpositionY=document.body.scrollTop;
  }
if(self.innerWidth){viewX=self.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){viewX=document.documentElement.clientWidth;}
else if(document.body){viewX=document.body.clientWidth;}
var rightEdge=viewX-scrolloffsetX+scrollpositionX;
document.getElementById(divID).style.top=scrollpositionY+'px';
if(horizontalPosition=="right"){document.getElementById(divID).style.left=(rightEdge-divWidth-divBorderWidth)+'px';}
else{document.getElementById(divID).style.left='0px';}
}
PostionFloatingDiv();
window.onscroll=PostionFloatingDiv;
window.onresize=PostionFloatingDiv;