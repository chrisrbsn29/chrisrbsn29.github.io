//script for dynamically resizing background image
var size, img, width, height, ratio;
img = new Image();
img.src = document.body.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
console.log(img.src);
width = img.width;
height = img.height;
ratio = height / width;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
size = window.innerWidth + "px";
document.body.style.backgroundSize = size;
console.log(ratio + " " + width + " " + height );
alert('AAAHH width =' + width + ', height = ' + height)

resizeBG();

function resizeBG(){
  console.log(ratio + " " + width + " " + height );
  if(!(width > 0 && height > 0)){
    console.log("here?");
    width = img.width;
    height = img.height;
    ratio = height / width;
  }

  var currentRatio = window.innerHeight/window.innerWidth;
 // document.body.style.backgroundPosition = 'center';

  if(currentRatio < ratio){     //if height is less than width
    size = window.innerWidth + "px";
    document.body.style.backgroundSize = size;
  }

  else{                         //if width is less than height
    size = "auto " + window.innerHeight + "px";
    document.body.style.backgroundSize = size;
  }
}
window.onresize = window.onload = resizeBG;
