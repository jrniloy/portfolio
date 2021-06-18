/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav__link");

/*==================== Form Validation ====================*/
const form = document.getElementById("form");
const uname = document.getElementById("name");
const email = document.getElementById("email");
const textArea = document.getElementById("textarea");
const unMessage = document.querySelector(".username-message");
const emailMessage = document.querySelector(".email-message");
const textAreaMessage = document.querySelector(".textarea-message");

///////////////////////////////////////////////////////
//  Regular Expressions
const emailRegeX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

///////////////////////////////////////////////////////////
let isValid = false;

///  User name validation
function validateName(e) {
  if (!e.target.name === "name") return;

  if (e.target.value.length >= 3) {
    isValid = true;
    e.target.classList.add("accepted");
    e.target.classList.remove("rejected");
    unMessage.textContent = "✅ Name should be atleast 3 characters long.";
  } else {
    e.target.classList.add("rejected");
    e.target.classList.remove("accepted");
    unMessage.textContent = "🚩 Name should be atleast 3 characters long.";
  }
}

/// Email validation
function validateEmail(e) {
  if (!e.target.name === "email") return;

  if (emailRegeX.test(e.target.value)) {
    isValid = true;
    e.target.classList.add("accepted");
    e.target.classList.remove("rejected");
    emailMessage.textContent = "✅ Valid Email";
  } else {
    e.target.classList.add("rejected");
    e.target.classList.remove("accepted");
    emailMessage.textContent = "🚩 Invalid Email";
  }
}

///  Teaxtarea validation
function validateMessage(e) {
  if (!e.target.name === "textarea") return;

  if (e.target.value.length >= 10) {
    isValid = true;
    e.target.classList.add("accepted");
    e.target.classList.remove("rejected");
    textAreaMessage.textContent =
      "✅ Message should be atleast 10 characters long.";
  } else {
    e.target.classList.add("rejected");
    e.target.classList.remove("accepted");
    textAreaMessage.textContent =
      "🚩 Message should be atleast 10 characters long.";
  }
}

/////////////////////////////////////////////////////////////
/// Event listners
uname.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
textArea.addEventListener("input", validateMessage);

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
function linkAction() {
  // clicking each menu link, remove '.show-menu' class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function navContainerShadow() {
  const introSection = document.getElementById("about");
  const nav = document.getElementById("header");

  const options = {
    root: null,
    threshold: 0.2,
  };

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  };

  const introSectionObserver = new IntersectionObserver(callback, options);

  introSectionObserver.observe(introSection);
}

/*==================== SHOW SCROLL UP ====================*/
function showScrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  const homeContent = document.querySelector(".home__content");

  const options = {
    root: null,
  };

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      scrollUp.style.bottom = `-20%`;
    } else {
      scrollUp.style.bottom = `5rem`;
    }
  };

  const homeContentObserver = new IntersectionObserver(callback, options);

  homeContentObserver.observe(homeContent);
}

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-btn");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// on load
navContainerShadow();
showScrollUp();
