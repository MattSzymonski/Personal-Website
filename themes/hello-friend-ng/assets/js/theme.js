// Toggle theme

const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");

changeBackground(document.body.classList.contains("dark-theme"));
changeLogo(document.body.classList.contains("dark-theme"));

if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
}

changeFavicon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  document.body.classList.contains("dark-theme") ?
    metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
  ;
  //changeFavicon();

  changeBackground(document.body.classList.contains("dark-theme"));
  changeLogo(document.body.classList.contains("dark-theme"));

});

function changeBackground(isDark) {
    if (isDark) {
        document.body.style.backgroundImage = "url('media/images/UnitedEarthFederation.jpg')";
        document.body.style.backgroundSize = "cover";
      } 
      else {
        document.body.style.backgroundImage = "url('media/images/Hunt.jpg')";
        document.body.style.backgroundSize = "auto";
      }
}

// Blinking cursor
function changeLogo(isDark) {
  if (isDark) {
      document.getElementById("logoCursor").style.backgroundColor = "#fafafa";
    } 
    else {
      document.getElementById("logoCursor").style.backgroundColor = "#252627";
  }
}

function changeFavicon() {
  // for now just trigger main favicon
  var link = document.createElement("link"), oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  //link.href = document.body.classList.contains("dark-theme") ? "favicon.ico" : "favicon.ico";

  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}
