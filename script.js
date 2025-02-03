window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.business-card section');
    elements.forEach((el) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = 1;
      }, 500);
    });
  });