const imgColor = document.querySelector(".img-color")
imgColor.addEventListener("mouseenter", () => {
  const view = document.getElementById("view")
  view.style.display = "block"
})

imgColor.addEventListener("mouseleave", () => {
  const view = document.getElementById("view")
  view.style.display = "none"
})