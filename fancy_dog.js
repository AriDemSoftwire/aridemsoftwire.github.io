function showOverlay() {
    console.log("bork");
    let random = Math.floor(Math.random() * 3) + 1;
    var overlayImage = document.getElementById('bork-image');
    if (random === 3) {
        overlayImage.style.left = '300px';
         overlayImage.style.top = '100px';
    } else if (random === 2) {
        overlayImage.style.left = '50px';
        overlayImage.style.top = '80px';
    } else if (random === 1) {
        overlayImage.style.left = '200px';
        overlayImage.style.top = '50px';
    }
    overlayImage.style.display = 'block';
    setTimeout(function() {
        overlayImage.style.display = 'none';
      }, 200);
}
  