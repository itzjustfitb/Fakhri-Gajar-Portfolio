//#region ========== HEADER ==========
let closeButton = document.getElementById("close-button");
let navMenu = document.getElementById("nav-menu");
let burgerButton = document.getElementById("burger-button");

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("nav-hide");
  burgerButton.style.opacity = 1;
});

burgerButton.addEventListener("click", () => {
  navMenu.classList.add("nav-hide");
  burgerButton.style.opacity = 0;
});

function showHeader() {
  let header = document.getElementById("header");
  if (scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
}

window.addEventListener("scroll", showHeader);

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//#endregion
//#region ========== ABOUT ==========
//Movement Animation to happen
const card = document.getElementById("about-description");
const container = document.getElementById("about");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 20 - e.pageX) / 100;
  let yAxis = (window.innerHeight * 0.02 - e.pageY) / 100;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//#endregion
//#region ========== PROJECT ==========
let projectContainer = document.querySelector(".project-cards");

let projects = [
  {
    image: "./assets/project-1.png",
    title: "FITB Game",
    subtitle: "E-Commerce Website",
    githubLink: "https://github.com/itzjustfitb/FITB-Game.git",
    liveView: "https://fitbgame.netlify.app/",
  },
  {
    image: "./assets/project-2.png",
    title: "FITB Calculator",
    subtitle: "Calculator App",
    githubLink: "https://github.com/itzjustfitb/Calculator-App.git",
    liveView: "https://fitb-calculator.netlify.app/",
  },
  {
    image: "./assets/project-3.png",
    title: "NFT Marketplace",
    subtitle: "Marketplace",
    githubLink: "https://github.com/itzjustfitb/FITB-NFT-Marketplace",
    liveView: "https://fitb-nft.netlify.app/",
  },
  {
    image: "./assets/project-4.png",
    title: "FITB NotePad",
    subtitle: "TODO APP",
    githubLink: "https://github.com/itzjustfitb/FITB-NFT-Marketplace",
    liveView: "https://fitb-nft.netlify.app/",
  },
];

function showCards(arr) {
  arr.forEach((element) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
          <img src="${element.image}" alt="Project Image" />
          <div class="project-title">
            <h2>${element.subtitle}</h2>
            <h1>${element.title}</h1>
          </div>
          <div class="project-links">
            <a target="_blank" href="${element.githubLink}" class="project-link">
              <i class="ri-github-line"></i>
              <p>View</p>
            </a>
            <a target="_blank" href="${element.liveView}" class="project-link">
              <i class="ri-eye-2-line"></i>
              <p>View</p>
            </a>
          </div>
    `;
    projectContainer.append(projectCard);
  });
}

showCards(projects);
//#endregion
//#region ========== CONTACT ==========
let contactForm = document.getElementById("contact-form");

const sendMail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    "service_gynp5l1",
    "template_o54layb",
    "#contact-form",
    "bzj7XofiRWUJhFwDn"
  );
  console.log("Salam");
};

contactForm.addEventListener("submit", sendMail);

//#endregion
