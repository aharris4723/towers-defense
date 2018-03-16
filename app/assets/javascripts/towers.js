window.onload = function(){

var start = document.getElementById("start")
var pause = document.getElementById("pause")
var skip = document.getElementById("next")
var songs = ["assets/themesong.mp3"]


var audio = new Audio();
var currentSong = 0;
    audio.src =songs[currentSong]




var juke = new Jukebox();
var displaybox = document.getElementById("displaybox")

start.addEventListener('click',juke.playIt)
pause.addEventListener('click',juke.pauseIt)
// skip.addEventListener('click',juke.skipIt)




    function Jukebox(){
        this.playIt = function(){
            console.log('asdfasdf')
            audio.play()
            
        }

        this.pauseIt = function(){
            audio.pause()
        }

        this.skipIt = function(){
            if(currentSong === songs.length -1){
                currentSong = 0;
                audio.src = songs[currentSong];
                audio.play()
            }else {
                currentSong++;
                audio.src = songs[currentSong]
                audio.play()
            }    
        }
    }


}




















