// Selecting the toggle button and the skills section
var toggleSkillsbutton = document.getElementById("toggle-skills-btn");
var skillssection = document.getElementById("skills");
// Toggle visibility of the skills section on button click
toggleSkillsbutton.addEventListener("click", function () {
    skillssection.classList.toggle("hidden");
    // Change button text based on the section visibility
    toggleSkillsbutton.textContent = skillssection.classList.contains("hidden") ? "Show Skills" : "Hide Skills";
});
