import { Personaje } from "./personajes.model";
import { obtenerPersonajes, filtrarPersonajes } from "./personajes.api";
import { crearContenedorPersonaje } from "./personajes.helper";

 export const pintarPersonajes = async (): Promise<void> => {
    try {
        const personajes = await obtenerPersonajes();
        const listado = document.querySelector("#resultado");
        if (listado) {
          // Limpiar el resultado para no repetir al darle al boton
            listado.innerHTML = ''; 
            personajes.forEach((personaje) => {
                const contenedorPersonaje = crearContenedorPersonaje(personaje);
                listado.appendChild(contenedorPersonaje);
            });
        } else {
            throw new Error("No se ha encontrado el contenedor del listado");
        }
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
};

export const pintarPersonajesFiltrados = (personajes: Personaje[]): void => {
    const listado = document.querySelector("#resultado");
    if (listado) {
      // Limpiar el resultado para no repetir al darle al boton
        listado.innerHTML = '';
        personajes.forEach(personaje => {
            const contenedorPersonaje = crearContenedorPersonaje(personaje);
            listado.appendChild(contenedorPersonaje);
        });
    } else {
        throw new Error("No se ha encontrado el contenedor del listado");
    }
};

const inputElement = document.querySelector("#escribirNombre");
const buttonElement = document.querySelector("#botonFiltrar");

if (inputElement !== null && inputElement !== undefined && buttonElement !== null && buttonElement !== undefined) {
    buttonElement.addEventListener('click', async () => {
        if (inputElement instanceof HTMLInputElement) {
            const buscarPersonaje = inputElement.value.trim();
            try {
                const personajesFiltrados = await filtrarPersonajes(buscarPersonaje);
                pintarPersonajesFiltrados(personajesFiltrados); 
            } catch (error) {
                console.error("Error al filtrar los personajes:", error);
            }
        } else {
            console.error("El elemento input no es un HTMLInputElement.");
        }
    });
} else {
    console.error("No se encontró el elemento input o button.");
}