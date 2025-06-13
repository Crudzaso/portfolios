const toggleBtn = document.getElementById('theme-toggle');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateLogoBasedOnTheme();
  });

  function updateLogoBasedOnTheme() {
    const img = document.getElementById('theme-image');
    const isDarkMode = document.body.classList.contains('dark');

    if (isDarkMode) {
      img.src = './src/assets/icons/icon_complete_white.ico'; 
    } else {
      img.src = './src/assets/icons/icon_complete.ico'; 
    }
  }

  document.addEventListener('DOMContentLoaded', updateLogoBasedOnTheme);