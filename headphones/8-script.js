(function () {
    const btn = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');

    function openMenu(state){
      const isOpen = state ?? !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', isOpen);
      btn.classList.toggle('is-active', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
      btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }

    btn.addEventListener('click', () => openMenu());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') openMenu(false);
    });

    // Close after clicking a link
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) openMenu(false);
    });
  })();