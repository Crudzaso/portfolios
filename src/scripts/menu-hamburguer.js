const toggleButton = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });

  // Submenú (clanes) desplegable por click
  const submenuToggles = document.querySelectorAll('.toggle-submenu');

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();

      // Alternar solo en pantallas pequeñas
      if (window.innerWidth <= 768) {
        const parent = toggle.closest('.dropdown');
        parent.classList.toggle('open');
      }
    });
  });