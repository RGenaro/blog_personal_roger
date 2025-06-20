const articulos = {
  post1: `
    <h3 class="text-2xl font-bold mb-4">Cómo empecé en programación</h3>
    <p class="text-gray-700 mb-4">
      No siempre supe que quería programar.<br>
      De hecho, la primera vez que vi “código”, no sabía que eso era.<br>
      Esta es la historia de cómo pasé de la frustración a encontrar mi carrera. Sin adornos.
    </p>

    <h4 class="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onclick="verArticulo('post2')">🧩 Buscando una dirección</h4>
    <p class="text-gray-700 mb-4">Buscaba orientación en mi familia y me encontré con historias que me despertaron curiosidad.</p>

    <h4 class="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onclick="verArticulo('post3')">🧠 Mi primer encuentro con la programación</h4>
    <p class="text-gray-700 mb-4">Los primeros cursos me emocionaron, pero también tuve dudas y frustraciones.</p>

    <h4 class="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onclick="verArticulo('post4')">⚔️ La desmotivación y la duda</h4>
    <p class="text-gray-700 mb-4">Hubo momentos difíciles que me hicieron pensar si debía seguir.</p>

    <h4 class="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onclick="verArticulo('post5')">💡 El momento en que supe que era lo mío</h4>
    <p class="text-gray-700 mb-6">Finalmente, comprendí que esta era la carrera para mí.</p>

    <p class="italic text-gray-600">A veces uno no elige la programación, es ella la que te encuentra cuando estás buscando quién eres.</p>
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
  document.getElementById('contenidoArticulo').innerHTML = '';
}
