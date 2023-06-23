const nav = document.querySelector("header"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
});

navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});