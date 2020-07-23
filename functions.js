// for the java/Bedrock buttons and text (Worlds.html and Textures.html)
document.getElementById("Options").style.display = "none";
document.getElementById("2Options").style.display = "none";

function buttonOptions() {
document.getElementById("Options").style.display = "inline";
document.getElementsByClassName("buttonOptions")[0].style.display = "none";
document.getElementsByClassName("buttonOptions")[1].style.display = "none";
document.getElementsByClassName("platformText")[0].style.display = "none";
}
function buttonOptions2() {
document.getElementById("2Options").style.display = "inline";
document.getElementsByClassName("buttonOptions")[0].style.display = "none";
document.getElementsByClassName("buttonOptions")[1].style.display = "none";
document.getElementsByClassName("platformText")[0].style.display = "none";
}
// for the modals (Textures.html and Updates Modal)
function openModal(id) {
document.getElementById(id).style.display = "block";
}
function closeModal(id) {
document.getElementById(id).style.display = "none";
  
}
function Scroller() {
var elmnt = document.getElementById("menue-item");
elmnt.scrollIntoView();
document.getElementById('downloadbar').style.display = "block";
}
// for the banners (Textures.html)
function triggerSkin(id) {
document.getElementById(id).style.display = "block";
}
function denySkin(id){
document.getElementById(id).style.display = "none";
}
// the fake purchase bar data
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
  if (width >= 100){
  document.getElementById('downloadbar').style.display = "none";
  }
  
    }
  }

}
//fake money alert box
function moneyAlert() {
  alert("Purchase will be fulfilled usind card stored in browser "+"\nYour credit card number is **** **** **** 8945");
}