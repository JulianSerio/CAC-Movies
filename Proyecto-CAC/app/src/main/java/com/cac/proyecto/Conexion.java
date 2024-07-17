package com.cac.proyecto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    private Connection connection;  // Manejador de la base de datos 

    public Conexion() {
        try {
            // Paso 1: Cargar dinámicamente el driver de MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Paso 2: Establecer la conexión con la base de datos 'peliculas_cac_java' en localhost
            this.connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/peliculas_cac_java",  // URL de conexión JDBC para MySQL
                "root",  // Nombre de usuario de la base de datos (cambia según tu configuración)
                "aguanteSQLITO"  // Contraseña de la base de datos (cambia según tu configuración)
            );
        } catch (ClassNotFoundException e) {
            e.printStackTrace();  // Imprimir el error en caso de no encontrar el driver
        } catch (SQLException e) {
            e.printStackTrace();  // Imprimir el error en caso de problemas con la conexión a la base de datos
        }
    }

    // Método para obtener la conexión GETTER
    public Connection getConnection() {
        return connection;  // Devuelve el objeto Connection establecido
    }

    // Método para cerrar la conexión
    public void close() {
        try {
            // Verificar si la conexión no es nula y está abierta, entonces cerrarla
            if (connection != null && !connection.isClosed()) {
                connection.close();  // Cierra la conexión a la base de datos
            }
        } catch (SQLException e) {
            e.printStackTrace();  // Imprimir el error en caso de problemas al cerrar la conexión
        }
    }
}