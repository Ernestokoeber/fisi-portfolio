// ================= Auto-Slide for Projects =================
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".projects-scroll");
    if (!slider) return;

    const SPEED_PX_PER_SEC = 25;        // langsames, lesefreundliches Tempo
    const RESUME_DELAY_MS  = 2500;      // Pause nach Interaktion bevor es weiterläuft

    let position    = slider.scrollLeft;
    let direction   = 1;                // 1 = nach rechts, -1 = nach links (Yo-Yo)
    let lastTime    = 0;
    let isPaused    = false;
    let resumeTimer = null;

    // CSS setzt scroll-snap-type: x mandatory — das würde jeden Auto-Scroll-Schritt
    // sofort zur nächsten Card zurückziehen. Deshalb schalten wir Snap nur dann
    // ein, wenn der User selbst interagiert.
    slider.style.scrollSnapType = "none";

    const pause = () => {
        isPaused = true;
        clearTimeout(resumeTimer);
        slider.style.scrollSnapType = "";   // CSS-Default zurück (mandatory)
    };

    const queueResume = () => {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
            position = slider.scrollLeft;
            isPaused = false;
            slider.style.scrollSnapType = "none";
        }, RESUME_DELAY_MS);
    };

    // Pause während Hover, Touch, Tastatur-Fokus, manuellem Scroll
    ["mouseenter", "focusin", "touchstart"].forEach(evt =>
        slider.addEventListener(evt, pause, { passive: true })
    );
    ["mouseleave", "focusout", "touchend", "touchcancel"].forEach(evt =>
        slider.addEventListener(evt, queueResume, { passive: true })
    );
    slider.addEventListener("wheel", () => { pause(); queueResume(); }, { passive: true });

    const step = (now) => {
        if (!lastTime) lastTime = now;
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        const max = slider.scrollWidth - slider.clientWidth;

        if (!isPaused && !document.hidden && max > 0) {
            position += SPEED_PX_PER_SEC * delta * direction;

            // An den Rändern Richtung umkehren — Yo-Yo
            if (position >= max) {
                position = max;
                direction = -1;
            } else if (position <= 0) {
                position = 0;
                direction = 1;
            }
            slider.scrollLeft = position;
        } else {
            // Sync mit manuellem Stand, damit Übergang nahtlos ist
            position = slider.scrollLeft;
        }
        requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
});
// ================= End of Auto-Slide =================
