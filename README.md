![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Buscador de Cócteles

Este es el repositorio creado para la realización del ejercicio de evaluación del módulo 2 de Adalab.

**Buscador de cócteles** es una aplicación web interactiva que contiene un listado de bebidas y cócteles de todo el mundo, y nos permite marcar y desmarcar las bebidas como favoritas y guardarlas en el local storage.

La web dispone de un buscador, con botón de búsqueda y de reseteo. Una sección llamada **Lista** en la que aparecen los resultados de la búsqueda; y otra sección llamada **Cócteles favoritos**, en la que se pueden ir acumulando los cócteles seleccionados por la usuaria y guardados en el local storage.

### La aplicación funciona siguiendo estos pasos:

- Tras introducir una bebida en el buscador, al pulsar el botón de `Buscar`, los resultados de la búsqueda aparecerán en el apartado **Lista**. Cada resultado se visualizará en formato tarjeta, con el nombre de la bebida y la fotografía correspondiente.

- Al hacer click en cada **tarjeta de cócteles**, la usuaria puede añadirlos a la sección de **Cócteles favoritos**. Esta sección se encontrará en las versiones desktop y tablet, a la izquierda de los resultados de búsqueda, y en la versión móvil, seguidamente debajo. La lista de **favoritos** puede actualizarse tanto haciendo click en las tarjetas de los resultados de la búsqueda, como en el propio listado de favoritos, haciendo click en el icono `X` de eliminar.

- Es posible eliminar de una vez todos los **Cócteles favoritos**, haciendo click en el botón `Eliminar favoritos`, que se encuentra al final del listado. Esta operación los eliminará también del local storage.

- Por último, se pueden resetear tanto los **Cócteles favoritos** como los **resultados de la última búsqueda**, haciendo click en el botón de `Reset`.


## Herramientas y lenguajes de programación:

- VISUAL STUDIO CODE (VSC) 
- HTML 
- JS 
- GIT / GITHUB 
- SASS / SCSS 
- API 


## API

Al hacer click en el botón de `Buscar`, la aplicación se conecta al API abierto [TheCocktailDB](https://www.thecocktaildb.com/api.php)



## Guía para clonar este repositorio en tu dispositivo


- Clona este repositorio en tu dispositivo local usando los siguientes comandos:

```
https://github.com/Adalab/modulo-2-evaluacion-final-marina-fdz.git
```

```
git clone
```

- Instala las dependencias del proyecto usando npm:

```
npm install
```

- Abre la aplicación web:

```
npm start
```

- La aplicación se ejecutará en su navegador establecido por defecto.


## Authors

- [@marina-fdz](https://www.github.com/marina-fdz)