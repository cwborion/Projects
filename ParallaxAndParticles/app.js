window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#9f7aff',
        connectParticles: true,
        maxParticles: 500
    });
};

$('.parallax-window').parallax({
    imageSrc: 'assets/1.jpg'
});

$('.parallax-window2').parallax({
    imageSrc: 'assets/2.jpg'
});
