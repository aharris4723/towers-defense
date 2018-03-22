window.onload = function() {

    var start = document.getElementById("start")
    var pause = document.getElementById("pause")
    var skip = document.getElementById("next")
    var songs = ["https://vocaroo.com/media_command.php?media=s1UafMJm1PMF&command=download_mp3"]


    var audio = new Audio();
    var currentSong = 0;
    audio.src = songs[currentSong]




    var juke = new Jukebox();
    var displaybox = document.getElementById("displaybox")

    start.addEventListener('click', juke.playIt)
    pause.addEventListener('click', juke.pauseIt)

    function Jukebox() {
        this.playIt = function() {
            console.log('asdfasdf')
            audio.play()

        }

        this.pauseIt = function() {
            audio.pause()
        }

        this.skipIt = function() {
            if (currentSong === songs.length - 1) {
                currentSong = 0;
                audio.src = songs[currentSong];
                audio.play()
            } else {
                currentSong++;
                audio.src = songs[currentSong]
                audio.play()
            }
        }
    }


}