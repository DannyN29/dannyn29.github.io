document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // Simula una carga de 2 segundos
});
