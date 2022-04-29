// variables
let audioelement=new Audio('musics/1.mp3');
let songindex=1;
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let progress=0;
let gif=document.getElementById('gif');
let songitems= Array.from(document.getElementsByClassName('songitem'));
let songnamebottom=document.getElementById('songnamebottom');
let bottomposter=document.getElementById('postborder');
let timeduatation=document.getElementById('timeduration')
let songs = [
    {songName: "Suna Hai-jubin Noutiyal, Shreya Ghoghal", filePath: "musics/1.mp3", coverPath: "image/1.jpg"},
    {songName: "Barsat-ki-dhun Jubin Noutiya", filePath: "musics/2.mp3", coverPath: "image/2.jpg"},
    {songName: "Kabhi Tumhe-Arijit singh", filePath: "musics/3.mp3", coverPath: "image/3.jpg"},
    {songName: "Humnava -Jubin Noutiyal", filePath: "musics/4.mp3", coverPath: "image/4.jpg"},
    {songName: "Chand se parda-remix", filePath: "image/5.mp3", coverPath: "image/5.jpg"},
    {songName: "Ish tarah ashqui (remix)- kumar Sanu", filePath: "musics/6.mp3", coverPath: "image/6.jpg"},
    {songName: "Ishq Sufiyana-Kamal khan", filePath: "musics/7.mp3", coverPath: "image/7.jpg"},
    {songName: "Tera chehra -Adnana Sami", filePath: "musics/8.mp3", coverPath: "image/8.jpg"},
    {songName: "Piya ore Piya-Atif Ashalam", filePath: "musics/9.mp3", coverPath: "image/9.jpg"},
    {songName: "Agar Tum miljao", filePath: "musics/10.mp3", coverPath: "image/10.jpg"},
    {songName: "Tumsa koi pyara-Kumar Sanu", filePath: "musics/11.mp3", coverPath: "image/11.jpg"},
    {songName: "Chand sifarish-Shaan and Kailash Kher", filePath: "musics/12.mp3", coverPath: "image/12.jpg"},
    {songName: "Mast Magan-Arijit Singh", filePath: "musics/13.mp3", coverPath: "image/13.jpg"},
    {songName: "Tere Sasho Me-Arijit Singh and Palak", filePath: "musics/14.mp3", coverPath: "image/14.jpg"},



]

// PLAY AND PAUSE ELEMENT
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0 ){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        bottomposter.style.opacity=1;
    
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        bottomposter.style.opacity=0;

    }
})
//  ADD EVENT LISTNER to  seek bar
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=parseInt((progressbar.value*audioelement.duration)/100);


})
// iterating over the song list
songitems.forEach((element,i) => {
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
});
// HANDLING PLAY /POUASE FROM  SONG ITEMS
const makeallplay= ()=>{
     Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
     })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songindex=parseInt(e.target.id);
        audioelement.src= ` musics/${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        songnamebottom.innerText=songs[songindex-1].songName;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        bottomposter.src=songs[songindex-1].coverPath;
        bottomposter.style.opacity=1;

    })
})
// Handling next button of icons
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=14){
        songindex=1;
    }
    else{
        songindex=songindex+1;
    }
    audioelement.src=`musics/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    songnamebottom.innerText=songs[songindex-1].songName;
    bottomposter.src=songs[songindex-1].coverPath;
    makeallplay();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    bottomposter.style.opacity=1;


})
// Handling prevoius button of icon
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex=14;

    }
    else{
        songindex=songindex-1;
    }
    audioelement.currentTime=0;
    audioelement.src=`musics/${songindex}.mp3`;
    audioelement.play()
    songnamebottom.innerText=songs[songindex-1].songName;
    bottomposte.src=songs[songindex-1].coverPath;
    makeallplay();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    bottomposter.style.opacity=1;
})
