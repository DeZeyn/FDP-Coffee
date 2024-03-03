document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown__button");
  const dropdownContent = document.querySelector(".dropdown__content");
  const dropdownIcon = document.querySelector(".dropdown__icon");
  const dropdownLinks = document.querySelectorAll(".dropdown__content a");

  dropdownButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    dropdownContent.classList.toggle("show");
    dropdownIcon.classList.toggle("rotate");
  });
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedValue = this.textContent;

      dropdownButton.firstChild.textContent = selectedValue + " ";
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownContent.classList.remove("show");
    });
  });
});
