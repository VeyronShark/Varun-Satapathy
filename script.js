const navtl = gsap.timeline();
const hometl = gsap.timeline();

// document.addEventListener('click', (e) => {
//   console.log('Clicked element:', e.target);
// });

//GSAP TIMELINES
navtl.to("#mb-sidebar", {
  display: "block",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  duration: 0.3
});
navtl.from("#mb-sidebar-main", {
  x: "-100%",
  duration: 0.4,
  ease: "power4.out",
  delay: -0.1,
});
navtl.from("#mb-navbar-cross", {
  rotation: -120,
  opacity: 0,
  duration: 0.4,
  ease: "power1.out",
  delay: -0.2
});
navtl.from(".mb-link-hr", {
  width: 0,
  duration: 0.5,
  ease: "power2.out",
  opacity: 0,
  stagger: 0.1,
  delay: -0.4
})
navtl.from(".mb-nav-link", {
  x: -20,
  opacity: 0,
  duration: 0.2,
  ease: "power2.out",
  stagger: 0.06,
  delay: -0.35
});
navtl.pause();

hometl.from("#hero-img", {
  x: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power1.out"
});
hometl.from("#hero-text-1", {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power1.out",
  delay: -0.7
});
hometl.from("#hero-text-2", {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power1.out",
  delay: -0.65
});
hometl.from("#hero-text-3", {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power1.out",
  delay: -0.65
});
hometl.from("#pc-navbar, #mb-navbar", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: -0.7
});
hometl.from("#pc-navbar-left, #mb-navbar-icon", {
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power1.out",
  delay: -0.7
});
hometl.from(".pc-nav-link, #mb-navbar-text", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.07,
  delay: -0.7
});

gsap.from("#about-heading", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: "#about-heading"
});
gsap.from("#about-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: "#about-text"
});


//CONSTANTS
const hamburger = document.querySelector("#mb-navbar-icon");
const cross = document.querySelector("#mb-navbar-cross");
const sidebarBg = document.querySelector("#mb-sidebar");
const compSkillsContainer = document.querySelector("#comp-skills-container");
const marketingSkillsContainer = document.querySelector("#marketing-skills-container");

const compSkills = [
  { skill: "HTML", type: "Web Development" },
  { skill: "CSS", type: "Web Design" },
  { skill: "JavaScript", type: "Programming" },
  { skill: "React", type: "Web UI Development" },
  { skill: "Tailwind CSS", type: "Web Design" },
  { skill: "GSAP", type: "Web Animations" },
  { skill: "Python", type: "Programming" },
  { skill: "Matplotlib", type: "Data Visualization" },
  { skill: "NumPy", type: "Data Analysis" },
  { skill: "Pandas", type: "Data Analysis" },
  { skill: "Turtle", type: "Python Graphics" },
  { skill: "Java", type: "Programming" },
  { skill: "C", type: "Programming" }
];

const marketingSkills = [
  { skill: "Email Marketing", type: "Digital Marketing"},
  { skill: "Email Copywriting", type: "Content Creation" },
  { skill: "Social Media Copywriting", type: "Content Creation" },
  { skill: "Ad Copywriting", type: "Content Creation" }
];

//CODE
hamburger.addEventListener("click", () => {
  navtl.play();
});
cross.addEventListener("click", () => {
  navtl.reverse();
});
sidebarBg.addEventListener("click", (e) => {
  if (e.target === sidebarBg){
    navtl.reverse();
  }
});

compSkills.forEach(skill => {
  const skillElement = document.createElement("div");
  skillElement.classList.add("skill");
  skillElement.innerHTML = `
  <img src="./assets/${skill.skill.replace(/\s/g, '')}.png" alt="${skill.skill} logo">

  <div class="skill-desc">
    <p class="skill-name">${skill.skill}</p>
    <p class="skill-type">${skill.type}</p>
  </div>
  `; 
  compSkillsContainer.appendChild(skillElement);
});

marketingSkills.forEach(skill => {
  const skillElement = document.createElement("div");
  skillElement.classList.add("skill");
  skillElement.innerHTML = `
  <img src="./assets/${skill.skill.replace(/\s/g, '')}.png" alt="${skill.skill} logo">

  <div class="skill-desc">
    <p class="skill-name">${skill.skill}</p>
    <p class="skill-type">${skill.type}</p>
  </div>
  `;
  marketingSkillsContainer.appendChild(skillElement);
});

gsap.from("#comp-skills-container .skill", {
  y: -20, 
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#comp-skills-container",
    start: "top 60%",
  }
});
gsap.from("#marketing-skills-container .skill", {
  y: -20, 
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#marketing-skills-container",
    start: "top 60%",
  }
});