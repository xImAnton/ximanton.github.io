"use strict";

function copyTextToClipboard(text) {
    const tempElement = document.createElement("textarea")
    tempElement.value = text
    document.body.appendChild(tempElement)
    tempElement.select()
    document.execCommand("copy")
    document.body.removeChild(tempElement)
}

function copyDiscord() {
    let e = document.getElementById("discord-copy")

    copyTextToClipboard(e.getAttribute("data-value"))

    e.style.display = "block"
    setTimeout(function () {
        e.style.display = "none"
    }, 2000)
}

let navbarShown = false

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

function setNavbarShown(b) {
    navbarShown = b

    const header = document.getElementById("header")

    if (navbarShown) {
        header.classList.add("navbar-shown")
        header.focus()
    } else {
        header.classList.remove("navbar-shown")
    }
}

function toggleNavbar() {
    setNavbarShown(!navbarShown)
}
