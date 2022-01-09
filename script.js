// Mobile Menu Button event
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

function submitForm(e) {
  swal({
    title: "Success!",
    text: "Your message has been sent!",
    icon: "success",
  });
  document.getElementById("form-contact").reset();
  e.preventDefault();
}

function order(e) {
  swal({
    title: "Hey!",
    text: "Currently, this feature cannot be used.",
    icon: "info",
  });
  e.preventDefault();
}