let light = document.getElementById("light");
let dark = document.getElementById("dark");
const controlColor = document.getElementById("control-color");

function refreshColors() {
  for (const box of document.getElementsByClassName("box")) {
    box.querySelector("span").textContent = window.getComputedStyle(
      box
    ).backgroundColor;
  }
  controlColor.querySelector("span").textContent =      
    window
      .getComputedStyle(dark.checked ? dark : light)
      .accentColor;
}

// dark.checked = Boolean(
//   window.matchMedia("(prefers-color-scheme:dark)").matches
// );

// function onSchemeChangeEvent({ target }) {
//   document.documentElement.setAttribute(
//     "color-scheme", 
//     target.value
//   );
//   refreshColors();
// }

// light.onchange = onSchemeChangeEvent;
// dark.onchange = onSchemeChangeEvent;

refreshColors();
