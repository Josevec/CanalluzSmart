// script.js 

// Importar las bibliotecas necesarias del SDK de Samsung 
import { AVPlay } from 'SamsungSDK'; 

//URL del enlace proporcionado por el proveedor de señal 
const url = 'https://canalluz.sytes.net/hls/hls/stream/index.m3u8'; 

//Función para iniciar la reproducción del contenido desde el enlace 
function reproducirContenido() { 

    // Crear una instancia de AVPlay para reproducir contenido multimedia 
    const avplay = new AVPlay(); 

    // Configurar la URL del contenido a reproducir 
    avplay.open(url); 

    // Iniciar la reproducción del contenido 
    avplay.play(); 

} 

//Llamar a la función para iniciar la reproducción del contenido 

reproducirContenido(); 