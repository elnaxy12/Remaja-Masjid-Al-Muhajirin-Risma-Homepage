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
