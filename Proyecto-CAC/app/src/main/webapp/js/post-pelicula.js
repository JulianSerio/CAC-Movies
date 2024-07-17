// Espera a que se cargue el contenido HTML antes de ejecutar el código
document.addEventListener('DOMContentLoaded', async () => {
    // Obtener el formulario por su ID
    formNuevaPelicula = document.getElementById('formAgregar');

    // Agregar un evento 'submit' al formulario
    formNuevaPelicula.addEventListener('submit', async (event) => {
        // Prevenir el comportamiento por defecto de envío del formulario
        event.preventDefault();

        // Obtener los datos del formulario usando FormData
        const formData = new FormData(formNuevaPelicula);
        const titulo = formData.get('titulo');
        const genero = formData.get('genero');
        const duracion = formData.get('duracion');
        const imagen = formData.get('imagen');

        // Validar que todos los campos del formulario estén llenos
        if (titulo === '' || genero === '' || duracion === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return; // Salir de la función si hay campos vacíos
        }

        // Obtener solo el nombre del archivo de la imagen
        const imageName = imagen.name;

        // Configurar las opciones para la solicitud fetch
        const options = {
            method: 'POST', // Método POST para enviar datos al servidor
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido JSON
            },
            body: JSON.stringify({ // Convertir datos a JSON para enviar al servidor
                titulo: titulo,
                genero: genero,
                duracion: duracion,
                imagen: imageName
            })
        };

        // Realizar la solicitud fetch al servidor backend
        const response = await fetch('http://localhost:8080/app/peliculas', options);

        // Obtener la respuesta del servidor en formato JSON
        const data = await response.json();

        // Verificar si la película se agregó correctamente (código de respuesta 201)
        if (response.status === 201) {
            alert('Película agregada correctamente');
            formNuevaPelicula.reset(); // Limpiar el formulario después del éxito
            location.reload(); // Recargar la página para mostrar la película agregada
        } else {
            alert('Error al agregar la película'); // Mostrar mensaje de error si falla la inserción
        }
    });
});
