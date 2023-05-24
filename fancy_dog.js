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
    var nyandog = document.getElementById('nyandog');
    nyandog.style.animationPlayState = 'running';
    particleFactory(nyandog);
    nyandog.style.display = 'block';
}

class Particle {
    constructor(parent) {
    this.div = document.createElement("div");
    this.div.classList.add("particle");
    this.div.classList.add("twinkle");
    this.div.id = "particle-" + Date.now();
    parent.appendChild(this.div);

    setTimeout(() => { // remove particle
        if(this.driftIntervalId) clearInterval(this.driftIntervalId);
            this.div.remove();
    }, 400);
  }

  drift(speed = 1) {
    var rad = Math.PI * Math.random();

    this.driftIntervalId = setInterval(() => {
        var left = +this.div.style.left.replace("px",'');
      var top = +this.div.style.top.replace("px",'');

      left += Math.sin(rad) * speed;
      top += Math.cos(rad) * speed;

      this.div.style.left = left + "px";
      this.div.style.top = top + "px";
    }, 10);
  }
}

var particleFactory = function(meteor) {
    var rect = meteor.getBoundingClientRect();
  var particle = new Particle(meteor.parentElement);
  particle.div.style.left = rect.left + "px";
  particle.div.style.top = rect.top + "px";
  particle.drift(0.4);

  setTimeout(() => {
    particleFactory(meteor);
  }, 100);
};

function showOverlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    var overlayImage = document.getElementById('bork-image');
    if (random === 3) {
        overlayImage.style.left = '14%';
         overlayImage.style.top = '10%';
    } else if (random === 2) {
        overlayImage.style.left = '19s%';
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