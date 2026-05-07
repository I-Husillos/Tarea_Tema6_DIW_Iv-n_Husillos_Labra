const flashlight = document.getElementById('flashlight');
const video = document.getElementById('bgVideo');
const btnPlay = document.getElementById('btnPlay');
const btnStart = document.getElementById('btnStart');
const bgMusic = new Audio('audio-ia.mp3');

// Rastro de linterna
window.addEventListener('mousemove', e => {
    flashlight.style.setProperty('--x', `${e.clientX}px`);
    flashlight.style.setProperty('--y', `${e.clientY}px`);
});

// Lógica de inicio de sesión
btnPlay.addEventListener('click', () => {
    // Activar multimedia
    video.muted = false;
    video.play();
    bgMusic.play();

    // Transición de interfaz
    btnPlay.style.display = 'none';
    btnStart.classList.remove('hidden');
    
    // Cambiamos el color de la linterna tras activar
    flashlight.style.background = `radial-gradient(circle 250px at var(--x) var(--y), 
                                   transparent 0%, 
                                   rgba(0,30,0,0.8) 100%)`;
});