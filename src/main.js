window.addEventListener("DOMContentLoaded", async () => {
  try {
    const { check } = window.__TAURI__.updater;
    const { relaunch } = window.__TAURI__.process;
    
    const update = await check();
    if (update) {
      const yes = confirm(`Nueva versión: ${update.version}\n¿Actualizar ahora?`);
      if (yes) {
        await update.downloadAndInstall();
        await relaunch();
      }
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
