function initial(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add("active")
    modal.addEventListener("click", (e) => {
        if (e.target.id == modalID) {
            modal.classList.remove("active")
        }
    })
}
const title = document.querySelector(".titleimc")
title.addEventListener("click", () => initial("modal-imc"))

//----------------------------------------------------------------------

function CalculoImc() {
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var imc = (peso / Math.pow(altura, 2)).toFixed(2)

    const layout = `<h2>Seu IMC é: ${imc}</h2>`
    const result = document.getElementById("result")
    result.innerHTML = layout
}