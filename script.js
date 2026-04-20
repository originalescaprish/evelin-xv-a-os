document.addEventListener('DOMContentLoaded', () => {
    // 1. Countdown Logic
    // Target date: 12 de septiembre del 2025
    const countdownDate = new Date('September 12, 2025 00:00:00').getTime();

    const x = setInterval(() => {
        const now = new Date().getTime();
        let distance = countdownDate - now;

        // Si la fecha ya pasó, invertir la distancia para que el contador siga mostrando números
        if (distance < 0) {
            distance = Math.abs(distance);
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);

    // 2. Intersection Observer for Fade-In Effects
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Unobserve once animated
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
