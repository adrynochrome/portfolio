var Quotation=new Array()

Quotation[0] = "One must have chaos within oneself in order to give birth to a dancing star.";
Quotation[1] = "You can't spell 'slaughter' without 'laughter.'";
Quotation[2] = "He who makes a beast of himself gets rid of the pain of being a man.";
Quotation[3] = "This is how the world ends...not with a bang, but with a whimper.";
Quotation[4] = "There is a thin line between genius and insanity.";
Quotation[5] = "Tom is not my friend on myspace";
Quotation[6] = "It's only once we've lost everything that we're free to do anything.";
Quotation[7] = "From destruction comes creation.";
Quotation[8] = "The Glorious end justifies the means.";
Quotation[9] = "You are not a unique and beautiful snowflake.";

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
var newQuote=(Quotation[whichQuotation]);

function changeText(){
	document.getElementById('randomtxt').innerHTML = newQuote;
}