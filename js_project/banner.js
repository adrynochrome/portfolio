var imgs1 = new Array("images/banner1.jpg","images/banner2.jpg");
var lnks1 = new Array("orderform.htm","orderform.htm");
var alt1 = new Array("blue","venom");
var currentAd1 = 0;
var imgCt1 = 2;
function cycle1() {
  if (currentAd1 == imgCt1) {
    currentAd1 = 0;
  }
var banner1 = document.getElementById('adBanner1');
var link1 = document.getElementById('adLink1');
  banner1.src=imgs1[currentAd1]
  banner1.alt=alt1[currentAd1]
  document.getElementById('adLink1').href=lnks1[currentAd1]
  currentAd1++;
}
  window.setInterval("cycle1()",5000);