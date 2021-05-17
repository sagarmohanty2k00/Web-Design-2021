
const shuffle_btn = document.getElementById("shuffle");
const prev_btn = document.getElementById("prev");
const playpause = document.getElementById("playpause");
const next_btn = document.getElementById("next");
const loop_btn = document.getElementById("loop");


function togglePlaypause() {
    playpause.classList.toggle('fa-play-circle-o');
    playpause.classList.toggle('fa-pause-circle-o');

    playpause.classList.add('selected');

    if(playpause.classList.contains('fa-play-circle-o')) {}
    if(playpause.classList.contains('fa-pause-circle-o')) {}
}

function shuffle() {
    loop_btn.classList.remove('selected');
    shuffle_btn.classList.add('selected')
}

function loop() {
    shuffle_btn.classList.remove('selected');
    loop_btn.classList.add('selected')
}