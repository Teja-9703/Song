let play=document.getElementById("play");
let audio=document.getElementById("audio");
let image=document.getElementById("img");
let trackname=document.getElementById("trackname");
let next=document.getElementById("next")
let prev = document.getElementById("prev");
let volumeup = document.getElementById("volume-up");
let volumedown = document.getElementById("volume-down");
let progress = document.getElementById("progress-bar");
let currentTime = document.getElementById("current-time");
let duration = document.getElementById("duration");
let playicon=play.querySelector("i");

let currentIndex = 0;

play.addEventListener("click",function(){
    if(audio.paused){
        audio.play()
        playicon.classList.remove("bi", "bi-play-fill");
        playicon.classList.add("bi", "bi-pause-fill");
        image.classList.add("rotate");
    }
    else{
        audio.pause();
        playicon.classList.remove("bi", "bi-pause-fill");
        playicon.classList.add("bi", "bi-play-fill");
        image.classList.remove("rotate");

    } 
});


let trackNames=[
    "Chub1na",
    "Suzume",
    "Apt",
    "Aasa Kooda",
    "Golden Sparrow",
    "Shake it to the Max",
    "Believer"
];


let audiotracks = [
    "Chub1na.ge ჩუბინა.mp3",
   "Suzume No Tojimari Title Track_320(PaglaSongs).mp3",
   "Apt.mp3",
   "Aasa Kooda_320(PaglaSongs).mp3",
   "Golden Sparrow(KoshalWorld.Com).mp3",
   "Moliy-Ft-Silent-Addy-Skillibeng-and-Shenseea-Shake-It-To-The-Max-Fly-Remix-(TrendyBeatz.com).mp3",
   "Believer_320(PagaiWorld.com).mp3"   
];
let images = [
    "https://tse1.mm.bing.net/th?id=OIP.hsWeI-FWV6Vdn8j8PslYgQHaHa&pid=Api&P=0&h=220",
    "https://i.ytimg.com/vi/qal34e9v_pk/maxresdefault.jpg",
    "https://upload.wikimedia.org/wikipedia/en/5/52/Ros%C3%A9_and_Bruno_Mars_-_Apt..png",
    "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/42/ba/3942ba45-40bd-5d0a-d7ad-0595f1336f3f/cover.jpg/1000x1000bb.jpg",
    "https://static.toiimg.com/photo/112981992.cms",
    "https://i.ytimg.com/vi/fTsvAheEonw/maxresdefault.jpg",
    "https://i.ytimg.com/vi/W0DM5lcj6mw/maxresdefault.jpg"
];

audio.addEventListener("loadedmetadata", function () {
    duration.textContent = formatTime(audio.duration);
    progress.max =audio.duration;
});

audio.addEventListener("timeupdate", function () {
    currentTime.textContent = formatTime(audio.currentTime);
    progress.value =audio.currentTime;
});

progress.addEventListener("input", function () {
    audio.currentTime = progress.value;
});

audio.addEventListener("ended", function () {
    next.click(); 
});

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec=Math.floor(seconds % 60);
    sec=(sec < 10 ? "0" + sec:sec);
    return `${min}:${sec}`;
}

next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= audiotracks.length) {
        currentIndex = 0;
    }
    image.src = images[currentIndex];
    audio.src = audiotracks[currentIndex];
    trackname.textContent = trackNames[currentIndex];
    audio.play();
    playicon.classList.remove("bi", "bi-play-fill");
    playicon.classList.add("bi", "bi-pause-fill");
});

prev.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = audiotracks.length - 1;
    }
    image.src = images[currentIndex];
    audio.src = audiotracks[currentIndex];
    trackname.textContent = trackNames[currentIndex];
    audio.play();
    playicon.classList.remove("bi", "bi-play-fill");
    playicon.classList.add("bi", "bi-pause-fill");
});


volumeup.addEventListener("click",function(){
    if(audio.volume<1){
        audio.volume+=0.1;
    }
    if(audio.volume>=1){
        audio.volume=1;
    }
});
volumedown.addEventListener("click",function(){
    if(audio.volume>0){
        audio.volume-=0.1;
    }
    if(audio.volume<=0){
        audio.volume=0;
    }
});

function switchTrack() {
  audio.src = audiotracks[currentIndex];
  image.src = images[currentIndex];
  trackname.textContent = trackNames[currentIndex];
  audio.play();
  play.textContent = "Pause";
  image.classList.add("rotate"); 
}