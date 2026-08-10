const whatsappNumber = "66802684679";
const message = "Hello, mujhe AP7 ka official download link aur manual id create karne help chahiye.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappUrl;
  link.target = "_blank";
});

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", () => {
    console.log("WhatsApp CTA clicked");
  });
});
