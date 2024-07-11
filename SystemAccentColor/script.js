function refreshColors() {
  let dark = document.getElementById("dark");
  let light = document.getElementById("light");
  let controls = document.getElementById("control-color");
  for (const box of document.getElementsByClassName("box")) {
    box.querySelector("span").textContent = window.getComputedStyle(
      box
    ).backgroundColor;
  }
  controls.querySelector("span").textContent =      
    window
      .getComputedStyle(dark.checked ? dark : light)
      .accentColor;
};


function onSchemeChangeEvent({ target }) {
  document.documentElement.setAttribute(
    "color-scheme", 
    target.value
  );
  refreshColors();
};

windows.onload = fuction() {
  document.getElementById("dark").checked = Boolean(window.matchMedia("(prefers-color-scheme:dark)").matches);
  document.getElementById("light").onchange = onSchemeChangeEvent;
  document.getElementById("dark").onchange = onSchemeChangeEvent;
  
  refreshColors();
};



