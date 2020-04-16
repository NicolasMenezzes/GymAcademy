const currentpage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentpage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgheader: getStyle(html, "--bgheader"),
    aheaderina: getStyle(html, "--aheaderina"),
    aheaderac: getStyle(html, "--aheaderac"),
    bgcard: getStyle(html, "--bgcard"),
    cardborder: getStyle(html, "--cardborder"),
    shadowcard: getStyle(html, "--shadowcard"),
    detailsitem: getStyle(html, "--detailsitem"),
    detailsitemdiv: getStyle(html, "--detailsitemdiv"),
    detailsh3: getStyle(html, " --detailsh3"),
    detailsspan: getStyle(html, "--detailsspan"),
    detailborder: getStyle(html, "--detailborder"),
    thtd: getStyle(html, "--thtd"),
    tdthname: getStyle(html, "--tdthname"),
    eyehover: getStyle(html, "--eyehover"),
    ihover: getStyle(html, "--ihover"),
    bgmodal: getStyle(html, "--bgmodal"),
    inputtext: getStyle(html, "--inputtext"),
    hone: getStyle(html, "--hone"),
    showtext: getStyle(html, "--showtext"),
    modaltext: getStyle(html, "--modaltext"),
}

const DarkMode = {
    bg: "#000000",
    bgheader: "#3D3D3D",
    aheaderina: "#CCCCCC",
    aheaderac: "#FFFFFF",
    bgcard: "#000000",
    cardborder: "rgb(47, 51, 54)",
    shadowcard: "#000000",
    detailsitem: "rgba(255, 255, 255, 0.1)",
    detailsitemdiv: "#CCCCCC",
    detailsh3: "rgb(29, 161, 242)",
    detailsspan: "#FFFFFF",
    detailborder: "rgb(29, 161, 242)",
    tdth: "rgb(47, 51, 54)",
    tdthname: "rgb(217, 217, 217)",
    eyehover: "#C9C9C9",
    ihover: "#C9C9C9",
    bgmodal: "rgba(255, 255, 255, 0.5);",
    inputtext: "white",
    hone: "white",
    showtext: "white",
    modaltext: "white"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const ChangeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? ChangeColors(DarkMode) : ChangeColors(initialColors)
})