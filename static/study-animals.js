(() => {
  const peopleLink = document.querySelector('.nav-row nav a[href="#people"]');
  if (peopleLink && !document.querySelector('.nav-row nav a[href="./facilities/"]')) {
    const facilitiesLink = document.createElement('a');
    facilitiesLink.href = './facilities/';
    facilitiesLink.textContent = 'Facilities';
    peopleLink.after(facilitiesLink);
  }

  const wordCloud = document.querySelector('.hero-wordcloud img');
  if (wordCloud) wordCloud.src = './images/lizard-lab-word-cloud-dark-red.png';

  const slider = document.querySelector('[data-animal-slider]');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('[data-animal-slide]')];
  const dots = slider.querySelector('[data-animal-dots]');
  let current = 0;
  let startX = null;

  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider-dot';
    dot.setAttribute('aria-label', `Show study animal ${index + 1}`);
    dot.addEventListener('click', () => show(index));
    dots.append(dot);
  });
  const dotButtons = [...dots.children];

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dotButtons.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
  }

  slider.querySelector('[data-animal-prev]').addEventListener('click', () => show(current - 1));
  slider.querySelector('[data-animal-next]').addEventListener('click', () => show(current + 1));
  slider.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  slider.addEventListener('touchstart', event => { startX = event.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', event => {
    if (startX === null) return;
    const distance = event.changedTouches[0].clientX - startX;
    if (Math.abs(distance) > 45) show(current + (distance < 0 ? 1 : -1));
    startX = null;
  }, { passive: true });
  show(0);
})();
