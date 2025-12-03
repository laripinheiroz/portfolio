const reveals = document.querySelectorAll(".reveal");

if (reveals.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
}

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  const icon = menuToggle.querySelector("img");
  const closedIcon = "./assets/menu.svg";
  const openIcon = "./assets/menu-open.svg";

  menuToggle.addEventListener("click", () => {
    const open = menu.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");

    if (icon) {
      icon.src = open ? openIcon : closedIcon;
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      if (icon) icon.src = closedIcon;
    });
  });
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dados = new FormData(form);
    const nome = dados.get("nome");
    const email = dados.get("email");
    const assunto = dados.get("assunto");
    const mensagem = dados.get("mensagem");

    const destinatario = "larissapinnheiroz@gmail.com";
    const assuntoEmail = `[Portfólio] ${assunto || "Nova mensagem"}`;
    const corpo = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;

    const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(
      assuntoEmail
    )}&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailto;
    form.reset();
  });
}

