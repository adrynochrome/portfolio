function displayDate() {
var now = new Date();
var today = now.getDate();
var month = now.getMonth();
var monthName = new Array(12)
monthName[0]="January ";
monthName[1]="February ";
monthName[2]="March ";
monthName[3]="April ";
monthName[4]="May ";
monthName[5]="June ";
monthName[6]="July ";
monthName[7]="August ";
monthName[8]="September ";
monthName[9]="October ";
monthName[10]="November ";
monthName[11]="December ";
var year = now.getFullYear();

document.writeln(monthName[month]+today+ ", "+year);
}

