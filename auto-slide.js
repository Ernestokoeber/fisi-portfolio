// ================= Auto-Slide for Projects =================
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".projects-scroll");
    if (!slider) {
        console.log("[auto-slide] .projects-scroll not found");
        return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    console.log("[auto-slide] init", {
        scrollWidth: slider.scrollWidth,
        clientWidth: slider.clientWidth,
        scrollable: slider.scrollWidth - slider.clientWidth,
        reducedMotion: prefersReduced.matches,
        cssSnapType: getComputedStyle(slider).scrollSnapType,
    });

    // Respect users who don't want motion
    if (prefersReduced.matches) {
        console.log("[auto-slide] aborted: prefers-reduced-motion is enabled");
        return;
    }

    const SPEED_PX_PER_SEC = 25;        // langsames, lesefreundliches Tempo
    const RESUME_DELAY_MS  = 2500;      // Pause nach Interaktion bevor es weiterläuft
    const LOOP_PAUSE_MS    = 1200;      // kurze Pause am Ende vor dem Sprung zurück

    let position    = slider.scrollLeft;
    let lastTime    = 0;
    let isPaused    = false;
    let resumeTimer = null;
    let frameCount  = 0;

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
                if (frameCount++ < 5 || frameCount % 60 === 0) {
                    console.log("[auto-slide] step", {
                        position: position.toFixed(2),
                        scrollLeft: slider.scrollLeft,
                        snapType: getComputedStyle(slider).scrollSnapType,
                    });
                }
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
