const mode = document.getElementById("mode")

mode.addEventListener("click" , () => {
    document.body.classList.toggle("light");
})
document.querySelectorAll('.btn1').forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(btn.dataset.link, "_blank" );
    });
});