 
 // Selecting the toggle button and the skills section
const toggleSkillsButton = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Toggle visibility of the skills section on button click
toggleSkillsButton.addEventListener("click", () => {
  skillsSection.classList.toggle("hidden");
  
  // Change button text based on the section visibility
  toggleSkillsButton.textContent = skillsSection.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
});



