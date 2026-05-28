const { invoke } = window.__TAURI__.core;
const { check } = window.__TAURI__.updater;
const { relaunch } = window.__TAURI__.process;

// Verificar actualizaciones al iniciar
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const update = await check();
    if (update?.available) {
      const yes = confirm(
        `Nueva versión disponible: ${update.version}\n\n${update.body}\n\n¿Deseas actualizar ahora?`
      );
      if (yes) {
        await update.downloadAndInstall();
        await relaunch();
      }
    }
  } catch (error) {
    console.error("Error al verificar actualizaciones:", error);
  }
});
