const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");

// js code to toggle search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.closest("menu")) {
        nav.classList.remove("active");
    }
});

// form email
function validateform() {
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        text.innerHTML = "Thank you for subscribing!";
        text.style.color = "#ffe4c4";

        // Redirect to the desired page (e.g., "https://google.com")
        window.location.href = "https://mail.google.com";
        
        return false; // Prevent the form from being submitted
    } else {
        text.innerHTML = "Please enter a valid email address.";
        text.style.color = "#ff0000";
        return false; // Prevent the form from being submitted
    }
}





