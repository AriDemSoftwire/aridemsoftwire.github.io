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
    this.div.style.position = 'absolute'; // Add this line to position the particle

    setTimeout(() => { // remove particle
      if (this.driftIntervalId) clearInterval(this.driftIntervalId);
      this.div.remove();
    }, 400);
  }

  drift(speed = 1) {
    var rad = Math.PI * Math.random();

    this.driftIntervalId = setInterval(() => {
      var left = +this.div.style.left.replace("px", '');
      var top = +this.div.style.top.replace("px", '');

      left += Math.sin(rad) * speed;
      top += Math.cos(rad) * speed;

      this.div.style.left = left + "px";
      this.div.style.top = top + "px";
    }, 10);
  }
}

var particleFactory = function (meteor) {
  var nyandog = document.getElementById('nyandog');
  var particle = new Particle(nyandog); // Append particles to the body or desired container
  particle.div.style.left = nyandog.offsetLeft + nyandog.offsetWidth / 2 + "px"; // Adjust positioning relative to the nyandog image
  particle.div.style.top = nyandog.offsetTop + nyandog.offsetHeight / 2 + "px"; // Adjust positioning relative to the nyandog image
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


const apiKey = 'maJmrG9kKDKAehs5sqGIu48qYrMhpwQc'; // Replace with your actual Giphy API key
const searchQuery = 'shiba inu dog'; // Replace with your desired search query
const rating = 'g'

async function updateDogProfilePicture(searchQuery) {
  try {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=50&rating=${rating}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract the GIF URL from the API response
    let randomIndex = Math.floor(Math.random() * 50) + 1;
    const gifUrl = data.data[randomIndex].images.original.url;
    

    // Update the dog profile picture element with the GIF
    const dogProfilePicture = document.getElementById('dog-profile-picture');
    dogProfilePicture.src = gifUrl;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Call the function to update the dog profile picture with a random GIF
updateDogProfilePicture(searchQuery);
