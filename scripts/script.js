document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // El código de control de música aquí

    // Agrega el cursor personalizado al DOM
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    // Actualiza la posición del cursor personalizado en función de la posición del cursor real
    document.addEventListener('mousemove', function(e) {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // Oculta el cursor real
    document.body.style.cursor = 'none';
});
