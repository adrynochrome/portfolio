var global_transitions=[ //array of IE transition strings
	"progid:DXImageTransform.Microsoft.Barn()",
	"progid:DXImageTransform.Microsoft.Blinds()",
	"progid:DXImageTransform.Microsoft.CheckerBoard()",
	"progid:DXImageTransform.Microsoft.Fade()",
	"progid:DXImageTransform.Microsoft.GradientWipe()",
	"progid:DXImageTransform.Microsoft.Inset()",
	"progid:DXImageTransform.Microsoft.Iris()",
	"progid:DXImageTransform.Microsoft.Pixelate()",
	"progid:DXImageTransform.Microsoft.RadialWipe()",
	"progid:DXImageTransform.Microsoft.RandomBars()",
	"progid:DXImageTransform.Microsoft.RandomDissolve()",
	"progid:DXImageTransform.Microsoft.Slide()",
	"progid:DXImageTransform.Microsoft.Spiral()",
	"progid:DXImageTransform.Microsoft.Stretch()",
	"progid:DXImageTransform.Microsoft.Strips()",
	"progid:DXImageTransform.Microsoft.Wheel()",
	"progid:DXImageTransform.Microsoft.Zigzag()"
]

function flashyslideshow(setting){
	this.wrapperid=setting.wrapperid
	this.imagearray=setting.imagearray
	this.pause=setting.pause
	this.transduration=setting.transduration/1000 //convert from miliseconds to seconds unit to pass into el.filters.play()
	this.currentimg=0
	var preloadimages=[] //temp array to preload images
	for (var i=0; i<this.imagearray.length; i++){
		preloadimages[i]=new Image()
		preloadimages[i].src=this.imagearray[i][0]
	}
	document.write('<div id="'+this.wrapperid+'" class="'+setting.wrapperclass+'">'+this.getSlideHTML(this.currentimg)+'</div>')
	var effectindex=Math.floor(Math.random()*global_transitions.length) //randomly pick a transition to utilize
	var wrapperdiv=document.getElementById(this.wrapperid)
	if (wrapperdiv.filters){ //if the filters[] collection is defined on element (only in IE)
		wrapperdiv.style.filter=global_transitions[effectindex] //define transition on element
		this.pause+=setting.transduration //add transition time to pause
	}
	this.filtersupport=(wrapperdiv.filters && wrapperdiv.filters.length>0)? true : false //test if element supports transitions and has one defined
	var slideshow=this
	setInterval(function(){slideshow.rotate()}, this.pause)
}

flashyslideshow.prototype.getSlideHTML=function(index){
	var slideHTML=(this.imagearray[index][1])? '<a href="'+this.imagearray[index][1]+'" target="'+this.imagearray[index][1]+'">\n' : '' //hyperlink slide?
	slideHTML+='<img src="'+this.imagearray[index][0]+'" />'
	slideHTML+=(this.imagearray[index][1])? '</a><br />' : '<br />'
	slideHTML+=(this.imagearray[index][3])? this.imagearray[index][3] : '' //text description?
	return slideHTML //return HTML for the slide at the specified index
}

flashyslideshow.prototype.rotate=function(){
	var wrapperdiv=document.getElementById(this.wrapperid)
	this.currentimg=(this.currentimg<this.imagearray.length-1)? this.currentimg+1 : 0
	if (this.filtersupport)
		wrapperdiv.filters[0].apply()
	wrapperdiv.innerHTML=this.getSlideHTML(this.currentimg)
	if (this.filtersupport)
		wrapperdiv.filters[0].play(this.transduration)	
}

var flashyshow=new flashyslideshow({ 
 wrapperid: "myslideshow", wrapperclass: "flashclass", //desired CSS class for this slideshow
 imagearray: [
  ["slideshow/chicks1shirt.jpg", "orderform.htm", "_new", ""],
  ["slideshow/chickspitbull.jpg", "orderform.htm", "", ""],
  ["slideshow/chickstank.jpg", "orderform.htm", "", ""],
  ["slideshow/dudespitbull.jpg", "orderform.htm", "", ""]
["slideshow/inkedmensshirt.jpg", "orderform.htm", "", ""]
["slideshow/mensredspidershirt.jpg", "orderform.htm", "", ""]
 ],
 pause: 2000, 
 transduration: 1000 
})