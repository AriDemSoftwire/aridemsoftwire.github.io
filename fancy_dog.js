var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };

var konamiCode = ['up', 'up'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {

    konamiCodePosition++;

    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
    console.log("yello")
    var marqueeImage = document.getElementById('nyandog');
    marqueeImage.style.animationPlayState = 'running';
    marqueeImage.style.display = 'block';
}

function showOverlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    var overlayImage = document.getElementById('bork-image');
    if (random === 3) {
        overlayImage.style.left = '14%';
         overlayImage.style.top = '10%';
    } else if (random === 2) {
        overlayImage.style.left = '19%';
        overlayImage.style.top = '12%';
    } else if (random === 1) {
        overlayImage.style.left = '25%';
        overlayImage.style.top = '8%';
    }
    overlayImage.style.display = 'block';
    setTimeout(function() {
        overlayImage.style.display = 'none';
      }, 200);
}
  