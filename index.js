let openBtn = document.getElementById("open-modal");
let overLay = document.getElementById("overlay");
let closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", function (e) {
    e.preventDefault()
  overLay.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  overLay.style.display = "none";
});

