const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('tably-landing-theme');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
  themeButton.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  themeButton.querySelector('span').textContent = isDark ? '☼' : '◐';
}

setTheme(savedTheme === 'dark' ? 'dark' : 'light');
themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('tably-landing-theme', nextTheme);
});
