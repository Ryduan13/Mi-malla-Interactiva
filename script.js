const cursos = {
  "1er ciclo": [
    {
      codigo: "100000N06I",
      nombre: "PROBLEMAS Y DESAFÍOS EN EL PERÚ ACTUAL",
      horas: 3,
      creditos: 3,
      tipo: "O",
      prereq: ""
    },
    {
      codigo: "100000VU01",
      nombre: "INTRODUCCIÓN A LA VIDA UNIVERSITARIA",
      horas: 2,
      creditos: 2,
      tipo: "O",
      prereq: ""
    },
    // Agrega los demás cursos
  ],
  "2do ciclo": [
    {
      codigo: "100000N03I",
      nombre: "INGLÉS I",
      horas: 3,
      creditos: 3,
      tipo: "O",
      prereq: ""
    },
    // Continúa con todos los cursos
  ],
  // Añade todos los ciclos hasta 10mo
};

function cargarMalla() {
  const container = document.getElementById("malla-container");

  for (let ciclo in cursos) {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>${ciclo}</h2>`;

    cursos[ciclo].forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";
      divCurso.innerText = `${curso.nombre}`;
      divCurso.onclick = () => mostrarDetalle(curso);
      divCiclo.appendChild(divCurso);
    });

    container.appendChild(divCiclo);
  }
}

function mostrarDetalle(curso) {
  const detalle = document.getElementById("detalle");
  detalle.classList.remove("hidden");
  detalle.innerHTML = `
    <h3>${curso.nombre}</h3>
    <p><strong>Código:</strong> ${curso.codigo}</p>
    <p><strong>Horas:</strong> ${curso.horas}</p>
    <p><strong>Créditos:</strong> ${curso.creditos}</p>
    <p><strong>Tipo:</strong> ${curso.tipo === "O" ? "Obligatorio" : "Electivo"}</p>
    <p><strong>Prerrequisitos:</strong> ${curso.prereq || "Ninguno"}</p>
  `;
}

window.onload = cargarMalla;
