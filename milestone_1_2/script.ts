const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skillsSection.classList.contains('hidden')) {
    skillsSection.classList.remove('hidden');
  } else {
    skillsSection.classList.add('hidden');
  }
});