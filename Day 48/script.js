window.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        let speed = element.getAttribute('data-speed');
        let yPos = -(window.scrollY * speed / 100);
        element.style.backgroundPosition = `50% ${yPos}px`;
    });
});
