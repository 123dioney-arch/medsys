window.addEventListener("DOMContentLoaded", async () => {
  try {
    const { checkUpdate, installUpdate } = window.__TAURI__.updater;
    const { relaunch } = window.__TAURI__.process;
    
    const { shouldUpdate, manifest } = await checkUpdate();
    if (shouldUpdate) {
      const yes = confirm(`Nueva versión: ${manifest.version}\n¿Actualizar ahora?`);
      if (yes) {
        await installUpdate();
        await relaunch();
      }
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
