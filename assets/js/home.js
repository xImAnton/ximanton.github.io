"use strict";


window.addEventListener("load", () => {
    const header = document.getElementById("header")
    const headerAnchor = document.getElementById("header-anchor")
    const wave = document.getElementById("wave-1")
    let headerOnTop = false

    let callback = () => {
        const shouldBeHidden = headerAnchor.getBoundingClientRect().top > wave.getBoundingClientRect().top

        if (shouldBeHidden !== headerOnTop) {

            header.style.opacity = "0"

            setTimeout(() => {
                header.style.opacity = "1"
                if (shouldBeHidden) {
                    header.classList.add("top")
                } else {
                    header.classList.remove("top")
                }
            }, 200)

            headerOnTop = shouldBeHidden
        }
    }

    callback()

    window.addEventListener("scroll", callback)
})
