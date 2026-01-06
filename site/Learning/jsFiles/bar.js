const bar = document.getElementById("btn")
const barro = document.getElementById("barro")
const i = document.getElementById("i")
bar.addEventListener("click", () => {
    bar.classList.toggle("active")
    i.classList.toggle("active")
    barro.classList.toggle("active")
});
