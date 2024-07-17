package com.cac.proyecto;

public class Pelicula {
    // Atributos de la clase Pelicula que representan las columnas de la tabla
    private int idPelicula;  // ID autoincremental de la película (int)
    private String titulo; // Título de la película (varchar)
    private String genero;   // Género de la película (varchar)
    private String duracion; // Duración de la película (varchar)
    private String imagen;   // URL de la imagen de la película (varchar)

    // Constructor con parámetros para inicializar todos los atributos
    public Pelicula(int idPelicula,String titulo, String genero, String duracion, String imagen) {
        this.idPelicula = idPelicula;
        this.titulo = titulo;
        this.genero = genero;
        this.duracion = duracion;
        this.imagen = imagen;
    }

    public Pelicula() {}

    // Método getter para obtener el ID de la película
    public int getIdPelicula() {
        return idPelicula;
    }

    // Método setter para establecer el ID de la película
    public void setIdPelicula(int idPelicula) {
        this.idPelicula = idPelicula;
    }

    // Método getter para obtener el título de la película
    public String getTitulo() {
        return titulo;
    }

    // Método setter para establecer el título de la película
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    // Método getter para obtener el género de la película
    public String getGenero() {
        return genero;
    }

    // Método setter para establecer el género de la película
    public void setGenero(String genero) {
        this.genero = genero;
    }

    // Método getter para obtener la duración de la película
    public String getDuracion() {
        return duracion;
    }

    // Método setter para establecer la duración de la película
    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    // Método getter para obtener la imagen de la película
    public String getImagen() {
        return imagen;
    }

    // Método setter para establecer la imagen de la película
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
}