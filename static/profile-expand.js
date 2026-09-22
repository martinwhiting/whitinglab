document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.hof-profile, .current-student-grid article');

  cards.forEach((card, index) => {
    const photo = card.querySelector('.hof-portrait img, .person-card-photo');
    if (!photo) return;

    let copy = card.querySelector('.hof-profile-copy');
    if (!copy) {
      const textNodes = [...card.children].filter((node) => node.matches('h3, p'));
      if (!textNodes.length) return;
      copy = document.createElement('div');
      copy.className = 'profile-expand-copy profile-expand-copy--people';
      textNodes[0].before(copy);
      textNodes.forEach((node) => copy.append(node));
    } else {
      copy.classList.add('profile-expand-copy');
    }

    const button = document.createElement('button');
    const copyId = `profile-copy-${index + 1}`;
    copy.id = copyId;
    button.className = 'profile-expand-toggle';
    button.type = 'button';
    button.setAttribute('aria-controls', copyId);
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Show more';
    card.append(button);

    const update = () => {
      copy.classList.remove('is-collapsed');
      copy.style.removeProperty('--collapsed-height');
      button.hidden = true;
      const photoHeight = photo.getBoundingClientRect().height;
      const allowance = card.matches('.current-student-grid article') ? 60 : 0;
      const available = Math.max(150, photoHeight - button.offsetHeight - allowance);

      if (copy.scrollHeight > available + 8) {
        copy.style.setProperty('--collapsed-height', `${available}px`);
        copy.classList.toggle('is-collapsed', button.getAttribute('aria-expanded') !== 'true');
        button.hidden = false;
      }
    };

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? 'Show more' : 'Show less';
      copy.classList.toggle('is-collapsed', expanded);
    });

    if (photo.complete) update();
    else photo.addEventListener('load', update, { once: true });
    window.addEventListener('resize', update);
  });
});
