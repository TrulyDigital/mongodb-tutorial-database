# Tabla de contenidos

:black_small_square: [Descripción](#descripción)

:black_small_square: [Arquitectura](#arquitectura)

:black_small_square: [Requisitios](#requisitos)

:black_small_square: [Instalación](#instalación)

:black_small_square: [Conexión](#conexión)

:black_small_square: [Explicación de Docker Compose](#explicación-de-docker-compose)

:black_small_square: [Explicación de Scripts de Inicialización](#explicación-de-scripts-de-inicialización)

:black_small_square: [Explicación de gitignore](#explicación-de-gitignore)





# Descripción

Este proyecto permite instalar una base de datos MongoDB en el sistema local, utilizando Docker.

Los temas principales contemplados en la documentacion del proyecto son:

:heavy_check_mark: **Objetivo**:

Instalar de manera rápida una base de datos MongoDB en el sistema local para propósitos de desarrollo y pruebas, con una configuración muy cercana a una instalación real en un ambiente de producción.

:heavy_check_mark: **Objetivo**:

Gestión básica de Usuarios y Roles en MongoDB

:heavy_check_mark: **Objetivo**:

Cargar datos al inicio de la base de datos automatizando el proceso con scripts (JavaScript).

:heavy_check_mark: **Objetivo**:

Entender las configuraciones aplicadas en el archivo `docker-compose.yaml`.

:heavy_check_mark: **Objetivo**:

Conectarse a la base de datos desde un cliente con interfaz gráfica.

:heavy_check_mark: **Objetivo**:

Consultas básicas en la base de datos.






# Requisitos

Para la implementación e instalación de la base de datos MongoDB con docker, debe estar instalado y configurado en el sistema local el siguiete software.

Adicional, algún cliente de administación de base de datos para MongoDB con interfaz gráfica, se listan los más comúnes, en este proyecto se utiliza `Studio 3T` en su versión gratuita.

:black_small_square: Visual Studio Code - [vscode](https://code.visualstudio.com/)

:black_small_square: Docker - [docker](https://www.docker.com/)

:black_small_square: Git- [git](https://git-scm.com/)

:black_small_square: Cliente Studio 3T - [Studio 3T](https://studio3t.com/es/)

:black_small_square: Cliente Robo 3T - [Robo 3T](https://robomongo.org/)

:black_small_square: Cliente MongoDB Compass - [MongoDB Compass](https://www.mongodb.com/products/tools/compass)





# Instalación

En el sistema local (su computadora), desde la consola o terminal, ubicarse en algún directorio y descargar el repositorio.

```bash
$ git clone https://github.com/TrulyDigital/mongodb-tutorial-database.git 
```

Ingresar al repositorio desde la consola.

```bash
$ cd mongodb-tutorial-database
```

El archivo de configuración e instalación, que se llama `docker-compose.yaml`, tiene creado una red interna personalizada para contenedores, entonces para que funcione la instalación, lo **primero** que se debe hacer es crear esta red, especificamente esta es la parte donde se configura la red en el `docker-compose.yaml`.

```yaml
    networks:
      - development-net

networks:
  development-net:
    external: true
```



