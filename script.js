// Mobile Menu Button event
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

// on submit event
function submitForm() {
  swal({
    title: "Success!",
    text: "Your message has been sent!",
    icon: "success",
  });
}

// on click order event
function order() {
  swal({
    title: "Hey!",
    text: "Sorry, This feature cannot be used.",
    icon: "info",
  });
}
