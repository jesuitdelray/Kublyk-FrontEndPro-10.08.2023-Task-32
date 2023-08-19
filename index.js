const images = [
    "./images/1.webp",
    "./images/2.webp",
    "./images/3.webp",
    "./images/4.webp",
    "./images/5.webp",
]
const imageElement = document.getElementById("Image")
const prevBtnEl = document.getElementById("prevBtn")
const nextBtnEl = document.getElementById("nextBtn")

let currentImageIndex = 0

imageElement.src = images[currentImageIndex]
prevBtnEl.style.display = "none"
updateButtonVisibility()

function updateButtonVisibility() {
    if (currentImageIndex === 0) {
        prevBtnEl.style.display = "none"
    } else {
        prevBtnEl.style.display = "flex"
    }

    if (currentImageIndex === images.length - 1) {
        nextBtnEl.style.display = "none"
    } else {
        nextBtnEl.style.display = "flex"
    }
}

prevBtnEl.addEventListener("click", () => {
    if (currentImageIndex > 0) {
        currentImageIndex--
        imageElement.src = images[currentImageIndex]
        updateButtonVisibility()
    }
})

nextBtnEl.addEventListener("click", () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++
        imageElement.src = images[currentImageIndex]
        updateButtonVisibility()
    }
})
