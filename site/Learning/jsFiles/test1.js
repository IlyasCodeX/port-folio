function controlla()
{
    let eta = Number(document.getElementById("eta").value);
    console.log(eta);

if (eta >= 18){
    alert("sei maggiorenne");
}else{
    alert("sei minorenne");
}
}
  const search = document.getElementById("search");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    search.classList.toggle("active");
  });