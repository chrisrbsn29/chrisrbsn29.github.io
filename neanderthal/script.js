//script for dynamically resizing background image

var img = new Image();
img.src = document.body.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
var width = img.width;
var height = img.height;
var ratio = height / width;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
var size = window.innerWidth + "px";
document.body.style.backgroundSize = size;

resizeBG();

function resizeBG(){
  if(width == 0 || height == 0){
    console.log("are u even going here? " + img.width + " x " + height);
    var width = img.width;
    var height = img.height;
    var ratio = height / width;
  }

  var currentRatio = window.innerHeight/window.innerWidth;
 // document.body.style.backgroundPosition = 'center';

  if(currentRatio < ratio){     //if height is less than width
    console.log("height < width");
    var size = window.innerWidth + "px";
    document.body.style.backgroundSize = size;
  }

  else{                         //if width is less than height
    console.log("height > width");
    console.log(window.innerHeight + " x " +  window.innerWidth);
    console.log("og: " + height + " x " +  width);
    var size = "auto " + window.innerHeight + "px";
    document.body.style.backgroundSize = size;
  }
}
window.onresize = resizeBG;
