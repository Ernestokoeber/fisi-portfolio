// ================= Auto-Slide for Projects =================
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".projects-scroll");
    if (!slider) return;

    // Respect users who don't want motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) return;

    const SPEED_PX_PER_SEC = 25;        // langsames, lesefreundliches Tempo
    const RESUME_DELAY_MS  = 2500;      // Pause nach Interaktion bevor es weiterläuft
    const LOOP_PAUSE_MS    = 1200;      // kurze Pause am Ende vor dem Sprung zurück

    let position    = slider.scrollLeft;
    let lastTime    = 0;
    let isPaused    = false;
    let resumeTimer = null;

    const pause = () => {
        isPaused = true;
        clearTimeout(resumeTimer);
    };

    const queueResume = () => {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
            position = slider.scrollLeft;
            isPaused = false;
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
            if (position >= max) {
                // Ende erreicht — kurz halten, dann sanft zurück zum Anfang
                pause();
                setTimeout(() => {
                    slider.scrollTo({ left: 0, behavior: "smooth" });
                    position = 0;
                    queueResume();
                }, LOOP_PAUSE_MS);
            } else {
                position += SPEED_PX_PER_SEC * delta;
                slider.scrollLeft = position;
            }
        } else {
            // Sync mit manuellem Stand, damit Übergang nahtlos ist
            position = slider.scrollLeft;
        }
        requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
});
// ================= End of Auto-Slide =================
