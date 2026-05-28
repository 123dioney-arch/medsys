const { invoke } = window.__TAURI__.core;
const { relaunch } = window.__TAURI__.process;

window.addEventListener("DOMContentLoaded", async () => {
  try {
    if (!window.__TAURI__?.updater?.check) {
      alert("Updater no disponible");
      return;
    }
    const { check } = window.__TAURI__.updater;
    const update = await check();
    if (update?.available) {
      const yes = confirm(
        `Nueva versión: ${update.version}\n¿Actualizar ahora?`
      );
      if (yes) {
        await update.downloadAndInstall();
        await relaunch();
      }
    } else {
      alert("App al día - no hay actualizaciones");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
