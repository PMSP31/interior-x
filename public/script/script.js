// Mobile Menu Button event
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const gotop_btn = document.getElementById('gotop-btn')

btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

function showBtn() {
  let windowY = window.scrollY;
  if (windowY >= 150) {
    gotop_btn.classList.remove("hidden")
  } else {
    gotop_btn.classList.add("hidden")
  }
}

window.addEventListener('scroll', showBtn)

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
    title: "Oops!",
    text: "Sorry, this feature can't be used.",
    icon: "info",
  });
}
