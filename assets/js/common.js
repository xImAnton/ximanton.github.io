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

window.addEventListener("load", () => {
    document.getElementById("header").addEventListener("blur", () => setNavbarShown(false))
    // prevent closing of expanded header on nav item click
    document.querySelectorAll("#header > ul > li").forEach(e => e.addEventListener("mousedown", (v) => v.preventDefault()))
})
