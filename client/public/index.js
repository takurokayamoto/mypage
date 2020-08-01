const loader = document.querySelector(".loader-wrapper");

window.onload = setTimeout(() => {
    loader.classList.add("fadeout");
    setTimeout(function () {
        loader.style.display = "none";
    }, 2500);
}, 2500);
