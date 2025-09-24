$(document).ready(function () {
  // Mantener subrayado al hacer click (inmediatamente)
  $("#menu a").on("mousedown", function () {
    $("#menu a").removeClass("activo");
    $(this).addClass("activo");
  });

  // Marcar automáticamente según la página actual al cargar
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  $("#menu a").each(function () {
    const linkPage = $(this).attr("href");

    if (currentPage === "estadisticas.html" && linkPage === "reportes.html") {
      $(this).addClass("activo");
    }

    if (currentPage === "reportes2.html" && linkPage === "reportes.html") {
      $(this).addClass("activo");
    }

    if (currentPage === "sincronizar2.html" && linkPage === "sincronizar.html") {
      $(this).addClass("activo");
    }
    
    if (linkPage === currentPage || (linkPage === "#" && currentPage === "index.html")) {
      $(this).addClass("activo");
    }
  });
});
