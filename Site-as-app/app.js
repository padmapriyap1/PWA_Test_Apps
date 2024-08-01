const registerServiceWorker = async () => {
  try {
      await navigator.serviceWorker.register('/PWA_Test_Apps/SystemAccentColor/sw.js', { scope: '/PWA_Test_Apps/SystemAccentColor/'});
      console.log('Service worker registered');
  } catch (e) {
      console.log(`Registration failed: ${e}`);
  }
}

if (navigator.serviceWorker) {
  registerServiceWorker();
}
