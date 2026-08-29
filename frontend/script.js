let sideBar = document.querySelector("#sidebar");
let close = document.querySelector("#sidebar-close");
let open = document.querySelector("#menu-icon")
let overlay = document.querySelector("#overlay");

open.addEventListener("click", () => {
sidebar.classList.add("open");
overlay.classList.add("show");
});

close.addEventListener("click" , () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});
