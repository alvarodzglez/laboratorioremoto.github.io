// Función para enviar acciones a los ejes
function enviarAccion(axis, action) {
  fetch("/axis_control", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "y_axis=" + (axis === "y_axis" ? action : "detener") +
          "&z_axis=" + (axis === "z_axis" ? action : "detener") +
          "&x_axis=" + (axis === "x_axis" ? action : "detener")
  });
}

document.getElementById("x_scan").addEventListener("click", function() {
  enviarAccion("x_axis", "scan");
});

document.getElementById("y_up").addEventListener("click", function() {
  enviarAccion("y_axis", "up");
});

document.getElementById("y_down").addEventListener("click", function() {
  enviarAccion("y_axis", "down");
});

document.getElementById("z_forward").addEventListener("click", function() {
  enviarAccion("z_axis", "forward");
});

document.getElementById("z_backward").addEventListener("click", function() {
  enviarAccion("z_axis", "backward");
});

// Establecer las fuentes de video para las cámaras
var camera1 = document.getElementById("camera1");
camera1.src = "http://direccion_ip_camara1/video_feed";
var camera2 = document.getElementById("camera2");
camera2.src = "http://direccion_ip_camara2/video_feed";