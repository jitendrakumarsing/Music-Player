let audio = new Audio('music/1.mp3');
let songindex = 1;

let playbtn = document.getElementById("playbtn");
let pausebtn = document.getElementById("pausebtn");
let nextbtn = document.getElementById("forwardbtn");
let prevbtn = document.getElementById("backwardbtn");
let progressbar = document.getElementById("progressbar");
let musicname = document.getElementById("songname")
let image1 = document.getElementById("centregif");
let image2 = document.getElementById("centreimg");


// ------Play/pause button------
playbtn.addEventListener("click", playmusic);
function playmusic() {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        image1.style.display = 'block';
        image2.style.display = 'none';
    } else {
        audio.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
        image1.style.display = 'none';
        image2.style.display = 'block';
    }
    musicname.innerHTML = audio.src;
}
// -------Change play icon------
audio.addEventListener('playing', () => {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");

})


// ------Update progressbar------
audio.addEventListener('timeupdate', () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100)
    // console.log(progress);
    progressbar.value = progress;
    if (audio.currentTime == audio.duration) {
        nextsong();
    }
})
progressbar.addEventListener('change', (updateTimer) => {
    audio.currentTime = (progressbar.value * audio.duration) / 100;
})

// ------Next Button------
nextbtn.addEventListener('click', nextsong);
function nextsong() {
    if (songindex < 8) {
        songindex += 1;
    } else {
        songindex = 1;
    }
    audio.currentTime = 0;
    progressbar.value = 0
    audio.src = `music/${songindex}.mp3`;
    audio.play();
    musicname.innerText = audio.src;
}
// ------Previous Button------
prevbtn.addEventListener('click', () => {
    if (songindex >= 2) {
        songindex -= 1;
    } else {
        songindex = 8;
    }
    audio.currentTime = 0;
    audio.src = `music/${songindex}.mp3`;
    audio.play();
    musicname.innerText = audio.src;
})
image2.style.display = 'block';