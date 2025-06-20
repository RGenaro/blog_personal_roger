const ordenArticulos = ['post1', 'post2', 'post3', 'post4', 'post5'];

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
  `,

  post2: `
    <h3 class="text-2xl font-bold mb-4">🧩 Buscando una dirección</h3>
    <p class="text-gray-700 mb-4">
      Cuando terminé el colegio, me sentía perdido, sin saber hacia dónde ir.<br>
      Hablando con familiares y explorando diferentes caminos, descubrí que me apasionaban los retos mentales.
    </p>
    <p class="text-gray-700 mb-4">
      No fue una decisión rápida, pero empecé a notar que lo mío tenía que ver con resolver problemas, pensar en sistemas, estructuras… y ahí fue naciendo una idea: programar.
    </p>
  `,

  post3: `
    <h3 class="text-2xl font-bold mb-4">🧠 Mi primer encuentro con la programación</h3>
    <p class="text-gray-700 mb-4">
      Lo primero que aprendí fue a escribir “Hola Mundo”. Me pareció simple, casi absurdo.<br>
      Pero entender cómo funcionaba por dentro, ver cómo una simple línea hacía que la computadora “reaccionara”... eso me enganchó.
    </p>
    <p class="text-gray-700 mb-4">
      También llegaron los errores, los bugs, la frustración. Pero por alguna razón, en vez de rendirme, quería entender más.
    </p>
  `,

  post4: `
    <h3 class="text-2xl font-bold mb-4">⚔️ La desmotivación y la duda</h3>
    <p class="text-gray-700 mb-4">
      Hubo semanas en que sentía que no entendía nada. Incluso pensé en dejarlo. <br>
      Me comparaba con otros, sentía que yo no era lo suficientemente bueno.
    </p>
    <p class="text-gray-700 mb-4">
      Pero en el fondo, algo me decía que eso también era parte del proceso. Aprender a caer, frustrarse, y volver a intentarlo.
    </p>
  `,

  post5: `
    <h3 class="text-2xl font-bold mb-4">💡 El momento en que supe que era lo mío</h3>
    <p class="text-gray-700 mb-4">
      Un día, haciendo un proyecto personal, me di cuenta de que llevaba horas programando… y ni lo había notado.<br>
      Estaba feliz, concentrado, con una taza de café y muchas líneas de código delante.
    </p>
    <p class="text-gray-700 mb-4">
      En ese momento supe que no era solo una habilidad. Era algo que me conectaba con quien soy.
    </p>
    <p class="italic text-gray-600">Ese fue el momento exacto donde entendí: esta carrera no es solo lo que quiero. Es lo que soy.</p>
  `
};

function verArticulo(id) {
  const idx = ordenArticulos.indexOf(id);
  const anterior = idx > 0 ? ordenArticulos[idx - 1] : null;
  const siguiente = idx < ordenArticulos.length - 1 ? ordenArticulos[idx + 1] : null;

  let nav = `<div class="mt-6 flex justify-between items-center text-sm">`;
  nav += anterior ? `<button onclick="verArticulo('${anterior}')" class="text-indigo-600 hover:underline">⬅ Anterior</button>` : `<span></span>`;
  nav += `<button onclick="cerrarArticulo()" class="text-red-500 hover:underline">Cerrar</button>`;
  nav += siguiente ? `<button onclick="verArticulo('${siguiente}')" class="text-indigo-600 hover:underline">Siguiente ➡</button>` : `<span></span>`;
  nav += `</div>`;

  document.getElementById('postList').classList.add('hidden');
  document.getElementById('articuloCompleto').classList.remove('hidden');
  document.getElementById('contenidoArticulo').innerHTML = articulos[id] + nav;
}

function cerrarArticulo() {
  document.getElementById('articuloCompleto').classList.add('hidden');
  document.getElementById('postList').classList.remove('hidden');
  document.getElementById('contenidoArticulo').innerHTML = '';
}