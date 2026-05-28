window.addEventListener("DOMContentLoaded", async () => {
  try {
    const { check } = await import("@tauri-apps/plugin-updater");
    const { relaunch } = await import("@tauri-apps/plugin-process");
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
