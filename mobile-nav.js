// ================= Mobile Navigation =================
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    mobileNav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            mobileNav.classList.remove("active");
        }
    });
});
// =======================================================