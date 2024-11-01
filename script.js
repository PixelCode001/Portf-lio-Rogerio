const particles = document.querySelectorAll('.particle');

particles.forEach(particle => {
    particle.style.animationName = 'moveParticle';
});

// Definir uma nova animação no CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes moveParticle {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
`;
document.head.appendChild(style);
