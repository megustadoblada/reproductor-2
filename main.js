let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');

let albumCover = document.getElementById('albumCover');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '💾';
        albumCover.style.animation = 'rotation 4s infinite linear';
    } else {
        audio.pause();
        playPauseBtn.textContent = '💽';
        albumCover.style.animation = 'none';
    }
}



