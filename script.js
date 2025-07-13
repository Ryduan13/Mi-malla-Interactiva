function verDetalle(nombreCurso) {
  const detalle = document.getElementById('detalle');
  detalle.style.display = 'block';
  detalle.innerHTML = `<strong>${nombreCurso}</strong><br>Descripción del curso... (modifica este texto)`;
}
