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
    githubLink: "https://github.com/itzjustfitb/FITB-NotePad",
    liveView: "https://fitb-notepad.netlify.app/",
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

const sendMail = () => {
  emailjs.sendForm(
    "service_gynp5l1",
    "template_o54layb",
    "#contact-form",
    "bzj7XofiRWUJhFwDn"
  );
};
let inputName = document.getElementById("name");
let inputSubject = document.getElementById("subject");
let inputEmail = document.getElementById("email");
let inputMessage = document.getElementById("message");
let validateDesc = document.getElementById("validate-desc");
let validateTitle = document.getElementById("validate-title");
let validation = document.querySelector(".toast");
let toastTitle = document.querySelector(".toast-title");

let submitBtn = document.getElementById("contact-submit");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    inputName.value.length > 0 &&
    inputSubject.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputMessage.value.length
  ) {
    validation.classList.add("success");
    validateTitle.textContent = "Success";
    validateDesc.textContent = "Message sent successfully";
    sendMail();
    resetInputs();
  } else {
    validation.classList.add("error");
    if (inputName.value.length === 0) {
      validateDesc.textContent = "Please fill your name!";
    } else if (inputEmail.value.length === 0) {
      validateDesc.textContent = "Please fill your email!";
    } else if (inputSubject.value.length === 0) {
      validateDesc.textContent = "Please fill your subject!";
    } else if (inputMessage.value.length === 0) {
      validateDesc.textContent = "Please fill your message!";
    }
    validateTitle.textContent = "Error";
  }
  validateAnimation();
});

function validateAnimation() {
  submitBtn.disabled = true;
  // validation.style.right = "-100%";
  setTimeout(() => {
    submitBtn.disabled = false;
    // validation.style.right = "-100%";
    validation.classList.remove("error");
    validation.classList.remove("success");
  }, 1500);
}

function successAnimation() {}

function resetInputs() {
  inputName.value = "";
  inputSubject.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
}

//#endregion
