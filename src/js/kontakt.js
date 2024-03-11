var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

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

      // Aktualisiere den Wert des versteckten Inputs
      document.getElementById("selectedDropdownValue").value = selectedValue;
    });
  });
});

// Formspree JS Code - erster Versuch

// var form = document.querySelector(".form");

// console.log (form)

// async function handleSubmit(event) {
//   event.preventDefault();
//       var status = document.getElementById("my-form-status");
//       var data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         if (response.ok) {
//           status.innerHTML = "Thanks for your submission!";
//           form.reset()
//         } else {
//           response.json().then(data => {
//             if (Object.hasOwn(data, 'errors')) {
//               status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//             } else {
//               status.innerHTML = "Oops! There was a problem submitting your form"
//             }
//           })
//         }
//       }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     form.addEventListener("submit", handleSubmit)
