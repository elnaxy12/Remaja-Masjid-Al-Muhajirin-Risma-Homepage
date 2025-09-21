// =======================
// button active|show div
// =======================
const btn1 = document.getElementById("btn-activity");
const btn2 = document.getElementById("btn-random");
const div1 = document.getElementById("albumContent");
const div2 = document.getElementById("randomContent");

btn1.addEventListener("click", () => {
  div1.classList.remove("hidden");
  div2.classList.add("hidden");
});

btn2.addEventListener("click", () => {
  div2.classList.remove("hidden");
  div1.classList.add("hidden");
});

//

// =====================
// slider banner footer
// =====================
const images = document.querySelectorAll(
  ".main-wrapper .footer-galery .col1 img"
);
let currentIndex = 0;

function showImage(index, direction) {
  images.forEach((img, i) => {
    img.classList.remove("active", "active-left", "active-right");
  });

  const target = images[index];
  target.classList.add("active");

  if (direction === "right") {
    target.classList.add("active-right");
    setTimeout(() => target.classList.remove("active-right"), 400);
  } else if (direction === "left") {
    target.classList.add("active-left");
    setTimeout(() => target.classList.remove("active-left"), 400);
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex, "right");
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex, "left");
}
