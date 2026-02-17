// mobile menu
const btn = document.querySelector("[data-menu-btn]");
const links = document.querySelector("[data-nav-links]");
if (btn && links) {
  btn.addEventListener("click", () => links.classList.toggle("open"));
}

// set active nav link
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a => {
  const href = a.getAttribute("href");
  if (href === path) a.classList.add("active");
});

// Contact + Book forms -> open email + WhatsApp with prefilled text
function openMailAndWhatsApp({name, email, phone, service, budget, timeline, message}) {
  const to = "anintutechsolutions@gmail.com";
  const subject = `Project Request - ${service || "General"} (${name || "New Client"})`;
  const body =
`Hi Anintu Tech Solutions,

Name: ${name || ""}
Email: ${email || ""}
Phone/WhatsApp: ${phone || ""}

Service: ${service || ""}
Budget: ${budget || ""}
Timeline: ${timeline || ""}

Message:
${message || ""}

Thanks!`;

  // mailto
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // whatsapp
  const whatsappText = `Hi Anintu Tech Solutions, I want to book a project.%0A%0A` +
    `Name: ${encodeURIComponent(name || "")}%0A` +
    `Service: ${encodeURIComponent(service || "")}%0A` +
    `Budget: ${encodeURIComponent(budget || "")}%0A` +
    `Timeline: ${encodeURIComponent(timeline || "")}%0A` +
    `Details: ${encodeURIComponent(message || "")}`;

  const wa = `https://wa.me/2347032413214?text=${whatsappText}`;

  window.open(mailto, "_blank");
  window.open(wa, "_blank");
}

document.querySelectorAll("[data-lead-form]").forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    openMailAndWhatsApp({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      budget: fd.get("budget"),
      timeline: fd.get("timeline"),
      message: fd.get("message")
    });
    form.reset();
  });
});
