document.querySelectorAll("details").forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.open = !faq.open;
  });
});
