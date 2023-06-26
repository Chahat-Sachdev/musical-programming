console.log("Welcome to Cynth Shay Music")
//initialise song index
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterSongName =document.getElementById('masterSongName')
let masterPlay =document.getElementById('masterPlay');
let myprogress =document.getElementById('myprogress');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    {songName:"Jaane Kyu", filepath:"songs/1.mp3", coverpath: "cover/jaane kyu.jpg"},
    {songName:"Best Flawless Days", filepath: "songs/2.mp3", coverpath: "cover/bestflawlessdays.jpg"},
    {songName:"You Know Where I'm Going", filepath:"songs/3.mp3", coverpath: "cover/you know where I'm going.jpg"},]

songItem.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songName")[0].src= songs[i].filepath;
})




   

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

    

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogress.value = progress;
})

myprogress.addEventListener('change', ()=>{
    audioElement.currentTime = myprogress.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
   })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=2){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}) 
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
}) 





