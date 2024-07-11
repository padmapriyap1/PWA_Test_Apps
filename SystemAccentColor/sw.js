this.addEventListener('install', async (event) => {
  return;
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response('Hello offline page');
    })
  );
});

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
}

this.document.getElementById("dark").checked = Boolean(
  window.matchMedia("(prefers-color-scheme:dark)").matches
);

function onSchemeChangeEvent({ target }) {
  document.documentElement.setAttribute(
    "color-scheme", 
    target.value
  );
  refreshColors();
}

document.getElementById("light").onchange = onSchemeChangeEvent;
document.getElementById("dark").onchange = onSchemeChangeEvent;

refreshColors();
