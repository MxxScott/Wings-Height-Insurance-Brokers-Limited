const video = document.getElementById('video');

// Check if the video is not playing and play it
function checkVideoPlaying() {
  if (video.paused) {
    video.play();
    console.log('Video is playing');
  } else {
    console.log('Video is already playing');
  }
}

// Call the function every second
setInterval(checkVideoPlaying, 1000); 