function clickAbrir() {
    var emergente = document.getElementById("emergente");
    if (emergente.style.display === "none") {
        emergente.style.display = "grid"
    } else {
        emergente.style.display = "none";
    };
}

function clickCerrar() {
    var emergente = document.getElementById("emergente");
    if (emergente.style.display === "grid") {
        emergente.style.display = "none"
    } else {
        emergente.style.display = "grid";
    };
}