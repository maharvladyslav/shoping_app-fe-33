const paydaySection = document.querySelector('.payday');
let animationId = null;

const moveStars = () => {
  if (!paydaySection) return;

  const positions = [];

  for (let i = 0; i < 4; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    positions.push(`${x}% ${y}%`);
  }

  paydaySection.style.backgroundPosition = `${positions.join(', ')}, center`;

  const nextDelay = 4000 + Math.random() * 4000;
  animationId = setTimeout(moveStars, nextDelay);
};

const startAnimation = () => {
  if (!animationId) {
    moveStars();
  }
};

const stopAnimation = () => {
  clearTimeout(animationId);
  animationId = null;
  paydaySection.style.backgroundPosition = 'center';
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 1200) {
    startAnimation();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1200) {
    startAnimation();
  } else {
    stopAnimation();
  }
});
