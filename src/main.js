window.addEventListener("DOMContentLoaded", async () => {
  try {
    const updater = window.__TAURI__.updater;
    console.log("Updater:", JSON.stringify(Object.keys(updater)));
    alert("Funciones disponibles: " + Object.keys(updater).join(", "));
  } catch (error) {
    alert("Error: " + error.message);
  }
});
