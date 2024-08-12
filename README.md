# Tabla de contenidos

:black_small_square: [Descripción](#descripción)

:black_small_square: [Arquitectura](#arquitectura)

:black_small_square: [Requisitios](#requisitos)

:black_small_square: [Instalación](#instalación)

:black_small_square: [Notas de Instalación](#notas-de-instalación)

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

:black_small_square: Visual Studio Code - [vscode](https://code.visualstudio.com/)

:black_small_square: Docker - [docker](https://www.docker.com/)

:black_small_square: Git- [git](https://git-scm.com/)

Adicional, algún cliente de administación de base de datos para MongoDB con interfaz gráfica, se listan los más comúnes, en este proyecto se utiliza `Studio 3T` en su versión gratuita.

:black_small_square: Cliente Studio 3T - [Studio 3T](https://studio3t.com/es/)

:black_small_square: Cliente Robo 3T - [Robo 3T](https://robomongo.org/)

:black_small_square: Cliente MongoDB Compass - [MongoDB Compass](https://www.mongodb.com/products/tools/compass)





# Instalación

:warning: **No olvidar**

Antes de realizar la instalación, asegurarse que ya se esta ejecutando Docker.

Seguidamente en el sistema local (su computadora), desde la consola o terminal, ubicarse en algún directorio y descargar el repositorio.

```bash
$ git clone https://github.com/TrulyDigital/mongodb-tutorial-database.git 
```

Ingresar al repositorio desde la consola.

```bash
$ cd mongodb-tutorial-database
```

El archivo de configuración e instalación, que se llama `docker-compose.yaml`, tiene creado una red interna personalizada para contenedores, entonces, para que la instalación funcione correctamente, lo **primero** que se debe hacer es crear esta red por medio de comandos de docker.

Especificamente la sección en el `docker-compose.yaml` donde esta descrito la red interna personalizada es la siguiente :eye_speech_bubble::

```yaml
    networks:
      - development-net

networks:
  development-net:
    external: true
```

Crear la red interna personalizada.

```bash
$ docker network create development-net
```

Ejecutar el archivo de configuración `docker-compose.yaml`.

```bash
$ docker-compose up -d
```

:exclamation: **Importante**

Este proceso puede toma unos minutos dependiendo las capacidades de la computadora local y de la conexión a internet, el proceso mas demorado es descargar la imágen docker de MongoDB del repositorio de [dockerhub](https://hub.docker.com/), todo esto sucede automáticamente.

Al final del proceso, si la red interna personalizada fue creada correctamente y se descargo la imágen docker de MongoDB, en la consola se deben ver al final los siguientes mensajes.

```bash
 Container mongodb-tutorial-database  Creating
 Container mongodb-tutorial-database  Created
 Container mongodb-tutorial-database  Starting
 Container mongodb-tutorial-database  Started
```

La ejecución del contenedor se puede verificar con el siguiente comando, y el contenedor aparece con el nombre `mongodb-tutorial-database`.

```bash
$ docker ps
```

:white_check_mark: **Voilà**

Ya tienes instalada una base de datos de MongoDB lista para pruebas de desarrollo.





# Notas de Instalación

:loudspeaker: Red interna de Docker personalizada

La configuración de la red en el archivo `docker-compose.yaml` esta intencionalmente definida de esta manera, pensando en las mejores prácticas de implementación y en las arquitecturas de software para el despliegue, cuando en un futuro esta base de datos se instale en producción, es mejor controlar directamente la red de Docker a la que pertenece la base de datos de MongoDB y no dejar que Docker gestione esto por nosotros. 

Sin embargo, si se desea que docker sea el que gestione directamente la creación y eliminación de la red, se debe actualizar la siguiente sección del archivo `docker-compose.yaml`, de esto:

```yaml
    networks:
      - development-net

networks:
  development-net:
    external: true
```

A esto:

```yaml
    networks:
      - development-net

networks:
  development-net:
```

Solamente eliminar la líena `external: true`.

:loudspeaker: Listar las redes existentes en Docker

```bash
$ docker network list
```

:loudspeaker: Eliminar una red en Docker

```bash
$ docker network rm [NOMBRE_DE_LA_RED]
```

Ejemplo

```bash
$ docker network rm development-net
```









