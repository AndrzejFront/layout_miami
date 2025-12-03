'use strict';

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.formName.value;
  const email = form.formEmail.value;
  const message = form.querySelector(".form__textarea").value;

  console.log("Form submitted!", { name, email, message });

  alert("Form submitted without reloading!");
});


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
