const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

for (const link of document.querySelectorAll('a[href^="#"]:not(.skip-link)')) {
  link.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;

    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, "", link.hash);
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
  });
}
