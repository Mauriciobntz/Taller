//Benitez, Enzo Mauricio

function mostrarSeccionPersonajes() {
    document.getElementById('personajes').style.display = 'block';
    document.getElementById('favoritos').style.display = 'none';
    document.getElementById('por-estado').style.display = 'none';
    mostrarPersonajes();
}

function mostrarSeccionFavoritos() {
    document.getElementById('personajes').style.display = 'none';
    document.getElementById('favoritos').style.display = 'block';
    document.getElementById('por-estado').style.display = 'none';
    mostrarFavoritos();
}

function mostrarSeccionPersonajesEstado(estado) {
    document.getElementById('personajes').style.display = 'none';
    document.getElementById('favoritos').style.display = 'none';
    document.getElementById('por-estado').style.display = 'block';
    mostrarPersonajesEstado(estado);
}

let favoritos = [];

async function mostrarPersonajes() {
    let seccion = document.getElementById('title-personajes');
    seccion.classList = 'mi-titulo'
    seccion.innerText = 'Personajes de Rick and Morty';
    let cards = document.getElementById('cards-personajes');
    //Limpia el contenedor de Cards
    cards.innerText = "";

    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();

        data.results.forEach(character => {
            crearCard(character, 'cards-personajes');
        });

    } catch (error) {
        console.error('Hubo un problema con la petición async/await:', error);
    }
}

async function buscarPersonaje(name) {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        
        let personaje = data.results.find(character => character.name === name);
        if (personaje) {
            return personaje;
        } else {
            throw new Error('Personaje no encontrado');
        }
        
    } catch (error) {
        console.error('Hubo un problema con la petición async/await:', error);
        throw error;
    }
}

async function agregarFavoritos(name) {
    try {
    
    let existeEnFavoritos = favoritos.some(character => character.name === name);
    
    if (existeEnFavoritos) {
        alert("Este personaje ya está en favoritos.");
    } else {
    let personaje = await buscarPersonaje(name);
    favoritos.push(personaje);
    alert("Agregado a Favoritos");
    }
    } catch (error) {
        alert('Ocurrió un error al buscar el personaje.');
    }
}


function eliminarFavoritos(name) {
    let indice = favoritos.findIndex(character => character.name === name);
    if (indice !== -1) {
        favoritos.splice(indice, 1);
        alert("Eliminado de Favoritos");
    }
}

async function mostrarFavoritos() {
    let seccion = document.getElementById('title-favoritos');
    seccion.classList = 'mi-titulo'
    seccion.innerText = 'Mis Favoritos';
    let cards = document.getElementById('cards-favoritos');
    //Limpia el contenedor de Cards
    cards.innerText = "";

    if(favoritos.length === 0) {
        alert("Aun no se han agregado favoritos.")
    }

    favoritos.forEach(character => {
            crearCard(character, 'cards-favoritos');
        });

}

async function mostrarPersonajesEstado(estado) {
    let seccion = document.getElementById('title-estado');
    seccion.classList = 'mi-titulo'
    seccion.innerText = 'Perosnajes ' + estado;
    let cards = document.getElementById('cards-personajes-estado');
    //Limpia el contenedor de Cards
    cards.innerText = "";

    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();

        data.results.forEach(character => {
            if(character.status === estado) {
            crearCard(character, 'cards-personajes-estado');                
            }
        });

    } catch (error) {
        console.error('Hubo un problema con la petición async/await:', error);
    }
}


function crearCard(character, idSeccion) {
    let seccion = idSeccion;
    let elemento = document.getElementById(seccion);

    // Crear una columna de Bootstrap para ajustar el tamaño de la card
    let col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';  // Ajuste de tamaño y espaciado de las cards

    let newCard = document.createElement('div');
    newCard.className = 'card h-100';  // Card de altura 100% para que ocupe el mismo tamaño en la columna

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = character.image; 
    img.alt = character.name; 
    newCard.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = character.name;
    cardBody.appendChild(title);

    let species = document.createElement('p');
    species.className = 'card-text';
    species.innerText = 'Especie: ' + character.species; 
    cardBody.appendChild(species);

    let gender = document.createElement('p');
    gender.className = 'card-text';
    gender.innerText = 'Genero: ' + character.gender; 
    cardBody.appendChild(gender);

    let status = document.createElement('p');
    status.className = 'card-text';
    status.innerText = 'Estado: ' + character.status;
    cardBody.appendChild(status);

    // Crear botón de favoritos
    let fav = document.createElement('button');
    fav.classList.add('btn-fav');
    fav.innerHTML = ('❤️');
    if(estaEnFavoritos(character.name)) {
        fav.classList.add('liked')
    }
    let like = false;
    fav.addEventListener("click", () => {
        if(like) {
            fav.classList.remove('liked');
            eliminarFavoritos(character.name);
            like = false;
        } else {
            fav.classList.add('liked')
            agregarFavoritos(character.name);
            like = true;
        }
    })
    cardBody.appendChild(fav);

    newCard.appendChild(cardBody);

    if (character.status === 'Dead') {
        let sticker = document.createElement('img');
        sticker.src = 'img/ataud.png';
        sticker.className = 'sticker';
        newCard.appendChild(sticker);
    }

    // Añadir la card dentro de la columna
    col.appendChild(newCard);

    // Añadir la columna al contenedor
    elemento.appendChild(col);
}


mostrarPersonajes();

function estaEnFavoritos (name) {
    let result = favoritos.some(character => character.name === name);
    return result;
}