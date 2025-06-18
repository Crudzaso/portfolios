const toggleBtn = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

function updateThemeIcon(isDark) {
  iconSun.style.display = isDark ? 'inline' : 'none';
  iconMoon.style.display = isDark ? 'none' : 'inline';
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  updateThemeIcon(true);
} else {
  updateThemeIcon(false);
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  updateThemeIcon(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateLogoBasedOnTheme();
});

function updateLogoBasedOnTheme() {
  const img = document.getElementById('theme-image');
  const isDarkMode = document.body.classList.contains('dark');
  img.src = isDarkMode
    ? './src/assets/icons/icon_complete_white.ico'
    : './src/assets/icons/icon_complete.ico';
}

document.addEventListener('DOMContentLoaded', updateLogoBasedOnTheme);
