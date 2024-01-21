function toggleDrawer() {
  var drawer = document.querySelector('.drawer');
  drawer.style.display = (drawer.style.display === 'block') ? 'none' : 'block';
}
feather.replace();

const links = document.querySelectorAll('.navigation__link');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (!link.classList.contains('active')) {
      const active = document.querySelector('.navigation__link.active');
      if (active !== null) {
        active.classList.remove('active');
      }
      link.classList.add('active');
    }
  });
});
