document.addEventListener('DOMContentLoaded', () => {
  const flagsElement = document.getElementById('flags');
  const textsToChange = document.querySelectorAll('[data-section]');

  const changeLanguage = async language => {
    const requestJson = await fetch(`./src/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
      textToChange.innerHTML = texts[section][value];
    }
  };

  flagsElement.addEventListener('click', e => {
    const button = e.target.closest('.lang-option');
    if (!button || button.classList.contains('active')) return;

    const selectedLang = button.dataset.language;
    changeLanguage(selectedLang);

    document.querySelectorAll('.lang-option').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
