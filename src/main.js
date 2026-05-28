window.addEventListener("DOMContentLoaded", async () => {
  try {
    const update = await window.__TAURI_INTERNALS__.invoke("plugin:updater|check");
    if (update) {
      const yes = confirm(`Nueva versión: ${update.version}\n¿Actualizar ahora?`);
      if (yes) {
        await window.__TAURI_INTERNALS__.invoke("plugin:updater|download_and_install");
        await window.__TAURI_INTERNALS__.invoke("plugin:process|restart");
      }
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
