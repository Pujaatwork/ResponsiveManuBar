var horizontalLine = document.querySelector(".hrDiv")
var navLinks = document.querySelector("#click-container")
let clickd = false;
horizontalLine.addEventListener("click", function () {
    if (clickd === true) {
        navLinks.style.display = "flex";
        clickd = false;
    }
    else {
        navLinks.style.display = "none";
        clickd = true;
    }
})