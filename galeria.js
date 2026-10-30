// Esperar a que todo el HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalVentana");
    const imagenModal = document.getElementById("imagenModalSrc");
    const botonCerrar = document.querySelector(".cerrar-modal");
    const imagenesGaleria = document.querySelectorAll(".galeria-item");

    // Recorrer cada imagen de la galería y agregar evento al hacer clic
    imagenesGaleria.forEach(function (img) {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            imagenModal.src = this.src; // Asignar la fuente de la imagen clicada
            imagenModal.alt = this.alt;
        });
    });

    // Cerrar la ventana emergente al dar clic en el botón (X)
    botonCerrar.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar la ventana emergente al dar clic en cualquier parte fuera de la imagen
    modal.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            modal.style.display = "none";
        }
    });
});