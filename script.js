
const audio = new Audio('assets/s_audio.mp3'); 

audio.loop = true;


function togglePlay() {
    if (audio.paused) {
        
        const playPromise = audio.play();
        
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
        
                console.log('Audio started playing');
            }).catch(error => {
        
                console.log('Playback prevented:', error);
            });
        }
    } else {
        
        audio.pause();
    }
}


document.addEventListener('click', togglePlay);


document.addEventListener('touchend', function(e) {
    e.preventDefault(); 
    togglePlay();
});


audio.addEventListener('play', () => {
    console.log('Playing');

});

audio.addEventListener('pause', () => {
    console.log('Paused');

});


audio.addEventListener('error', (e) => {
    console.error('Error playing audio:', e);
});