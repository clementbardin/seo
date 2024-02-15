document.querySelectorAll('.navbar-options ul li').forEach(item => {
  item.addEventListener('click', event => {
    const sectionId = event.target.id.replace('section-', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});