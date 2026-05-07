/**
 * Gestión de la landing page híbrida: Video IA + Audio IA
 */
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('gameVideo');
    const playBtn = document.getElementById('playTrigger');
    const gameLink = document.getElementById('gameLink');

    // Carga del audio generado por IA [cite: 3]
    const ambienceAudio = new Audio('audio-efecto-ia.mp3');
    ambienceAudio.loop = true;

    playBtn.addEventListener('click', () => {
        // Ejecución de Play vía JavaScript 
        video.muted = false;
        video.play();
        ambienceAudio.play();

        // Switch de UI: Ocultar Play / Mostrar enlace al juego [cite: 8]
        playBtn.classList.add('hidden');
        gameLink.classList.remove('hidden');
        
        console.log("Sistema de audio y video inicializado correctamente.");
    });
});