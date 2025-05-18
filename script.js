const articulos = {
  post1: `
    <h3 class="text-2xl font-bold mb-2">Cómo empecé en programación</h3>
    <p class="text-gray-700"></p>
  `,
  post2: `
    <h3 class="text-2xl font-bold mb-2">El viaje musical que sigue</h3>
    <p class="text-gray-700"></p>
  `,
  post3: `
    <h3 class="text-2xl font-bold mb-2"></h3>
    <p class="text-gray-700"></p>
  `
};


function verArticulo(id) {
  document.getElementById('postList').classList.add('hidden');
  document.getElementById('articuloCompleto').classList.remove('hidden');
  document.getElementById('contenidoArticulo').innerHTML = articulos[id];
}

function cerrarArticulo() {
  document.getElementById('articuloCompleto').classList.add('hidden');
  document.getElementById('postList').classList.remove('hidden');
}
