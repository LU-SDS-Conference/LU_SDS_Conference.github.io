function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (nav) {
    nav.classList.toggle("open");
  }
}

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const target = link.getAttribute("data-nav");
    if (target === path || (path === "" && target === "index.html")) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", setActiveNav);
