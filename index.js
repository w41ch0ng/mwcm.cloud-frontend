const links = document.querySelectorAll("a");
const sound = document.getElementById("hoverSound");
const toggleBtn = document.getElementById("toggleSound");
const clickSound = document.getElementById("clickSound");

let soundEnabled = true; // default sfx on

// toggle sfx
toggleBtn.classList.add("active");
toggleBtn.textContent = "Disable SFX";

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
    if (soundEnabled) {
        sound.currentTime = 0;
        sound.play();
    }
    });
});

// toggle text on sfx toggle button
toggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("soundEnabled", soundEnabled); // persist preference

  if (soundEnabled) {
    toggleBtn.textContent = "Disable SFX";
    toggleBtn.classList.add("active");
  } else {
    toggleBtn.textContent = "Enable SFX";
    toggleBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const savedSetting = localStorage.getItem("soundEnabled");
  if (savedSetting !== null) {
    soundEnabled = savedSetting === "true";
  } else {
    soundEnabled = true; // default if no stored value
  }

  if (soundEnabled) {
    toggleBtn.textContent = "Disable SFX";
    toggleBtn.classList.add("active");
  } else {
    toggleBtn.textContent = "Enable SFX";
    toggleBtn.classList.remove("active");
  }
});

// create delay to play click sound and then redirect
document.addEventListener("click", function(event) {
    const link = event.target.closest("a");
    if (!link) return;

    if (soundEnabled == true) {
      event.preventDefault();

      clickSound.currentTime = 0;
      clickSound.play();

      clickSound.onended = () => {
      window.location.href = link.href;
      };

      // setTimeout(() => {
      // window.location.href = link.href;
      // }, 800);
    }

    
});

// Navbar Toggle
var MENU_BUTTON_CONTAINER = document.getElementById("hide-navbar-button-container");
var MENU_BUTTON_TEXT = document.getElementById("hide-navbar-button-text");
var MENU_BUTTON = document.getElementById("navbar-toggle-button");
var NAV_MENU = document.getElementById("navigation-menu");
var MAIN_CONTENT = document.getElementById("main-content");

MENU_BUTTON_CONTAINER.addEventListener("click", function () {
  if (NAV_MENU.style.display === "block") {
    MENU_BUTTON_TEXT.innerHTML = "Menu >";
    NAV_MENU.style.display = "none";
  } else {
    MENU_BUTTON_TEXT.innerHTML = "Hide >";
    NAV_MENU.style.display = "block";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 750) {
    MENU_BUTTON_TEXT.innerHTML = "Hide >";
    NAV_MENU.style.display = "block";
  }

  if (window.innerWidth < 750) {
    MENU_BUTTON_TEXT.innerHTML = "Menu >";
    NAV_MENU.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 750) {
    MENU_BUTTON_TEXT.innerHTML = "Menu >";
    NAV_MENU.style.display = "none";
  } else {
    MENU_BUTTON_TEXT.innerHTML = "Hide >";
    NAV_MENU.style.display = "block";
  }
});