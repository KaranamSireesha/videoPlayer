const playPauseBtn = document.querySelector(".play-pause-btn");
const fullScreenBtn = document.querySelector(".full-screen-btn");
const muteBtn = document.querySelector(".mute-btn");
const volumeSlider = document.querySelector(".volume-slider");
const currentTimeElement = document.querySelector(".current-time");
const totalTimeElement = document.querySelector(".total-time");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video");

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case " ":
    case "k":
      togglePlay();
      break;
      case "m":
        toggleMute();
        break;
  }
});

//Duration-section

video.addEventListener("loadeddata", () => {
    totalTimeElement.textContent = formatDuration(video.duration)
})

function formatDuration(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
}

// volume button
muteBtn.addEventListener("click",toggleMute);
volumeSlider.addEventListener("input", e => {
    video.volume = e.target.value;
    video.muted = e.target.value === 0;
})
function toggleMute(){
 video.muted = !video.muted;
}

video.addEventListener("volumechange", () =>{
    volumeSlider.value = video.volume
    let volumeLevel
    if(video.muted || video.volume === 0 ){
        volumeSlider.value = 0
        volumeLevel = "muted"
    }
    else if(video.volume >= 0.5) {
        volumeLevel = "high";
      }
    else {
        volumeLevel = "low";
    }

    videoContainer.dataset.volumeLevel = volumeLevel;
})

// fullscreen mode

fullScreenBtn.addEventListener("click", toggleFullScreenMode);

function toggleFullScreenMode() {}

// play/pause section

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused");
});

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused");
});
