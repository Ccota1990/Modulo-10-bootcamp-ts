import { Personaje } from "./personajes.model";

const crearElementoImagen = (
    imagen: string, 
    nombre:string
    ): HTMLImageElement => {
        const urlCompleta = `http://localhost:3000/${imagen}`;
        const imagenUrl = document.createElement("img");
        imagenUrl.src = urlCompleta;
        imagenUrl.alt = nombre;
        return imagenUrl;
}

const crearElementoSpan = (texto: string) : HTMLSpanElement => {
    const elementoSpan = document.createElement("span");
    elementoSpan.textContent = texto;
    elementoSpan.classList.add("titulo");
    return elementoSpan;
}

const nombrePersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const pNombre = document.createElement ("p");
    const nombreNegrita = crearElementoSpan("Nombre: ");
    pNombre.appendChild(nombreNegrita);
    const nombre = document.createTextNode(personaje.nombre);
    pNombre.appendChild(nombre);

    return pNombre;
}

const apodoPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const pApodo = document.createElement ("p");
    const apodoNegrita = crearElementoSpan("Apodo:  ");
    pApodo.appendChild(apodoNegrita);
    const apodo = document.createTextNode(personaje.apodo);
    pApodo.appendChild(apodo);

    return pApodo;
}

const especialidadPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const pEspecialidad = document.createElement ("p");
    const especialidadNegrita = crearElementoSpan("Especialidad: ");
    pEspecialidad.appendChild(especialidadNegrita);
    const especialidad = document.createTextNode(personaje.especialidad);
    pEspecialidad.appendChild(especialidad);

    return pEspecialidad;
}

const habilidadPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const pHabilidad = document.createElement ("p");
    const habilidadesNegrita = crearElementoSpan("Habilidades: ");
    pHabilidad.appendChild(habilidadesNegrita);
    const habilidades = document.createTextNode(personaje.habilidades.join(", "));
    pHabilidad.appendChild(habilidades);

    return pHabilidad;
}

const amigoPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const pAmigo = document.createElement ("p");
    const amigoNegrita = crearElementoSpan("Amigo:  ");
    pAmigo.appendChild(amigoNegrita);
    const amigo = document.createTextNode(personaje.amigo);
    pAmigo.appendChild(amigo);

    return pAmigo;
}

export const crearContenedorPersonaje = (personaje: Personaje, ): HTMLDivElement => {
    const elementoPersonaje = document.createElement ("div");
    elementoPersonaje.classList.add("personajeContainer");

    const imagen = crearElementoImagen(personaje.imagen , personaje.nombre);
    elementoPersonaje.appendChild(imagen);

    const pNombre = nombrePersonaje(personaje);
    elementoPersonaje.appendChild(pNombre);

    const pApodo = apodoPersonaje(personaje);
    elementoPersonaje.appendChild(pApodo);

    const pEspecialidad = especialidadPersonaje(personaje);
    elementoPersonaje.appendChild(pEspecialidad);

    const pHabilidad = habilidadPersonaje(personaje);
    elementoPersonaje.appendChild(pHabilidad);
   
    const pAmigo = amigoPersonaje(personaje);
    elementoPersonaje.appendChild(pAmigo);

    return elementoPersonaje;
};