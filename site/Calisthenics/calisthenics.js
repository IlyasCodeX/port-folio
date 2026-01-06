const img = document.getElementById("img");
const container = document.querySelector(".video");
const buttons = document.querySelectorAll(".btn");
const h2 = document.getElementById("h2");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    img.classList.add("active");
    h2.classList.add("active")
    const src = btn.dataset.video;
    setTimeout(() => {
    video.src = src;
    video.load();
    container.classList.add("active");
    video.play();
    }, 1000);
  });
});


