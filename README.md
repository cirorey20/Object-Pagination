# Objeto Pagination JS

## Introduccion

Con hacer una nueva instancia del objeto `var pag = new Pagination(array, number)` vamos a poder pasarle el array con los datos que queremos que se pagine y un segundo argumento opcional que nos va a servir para elegir la cantidad de paginas que queremos que se muestren, si no le pasamos ningun numero va a tomar por defecto 3.

Llamando ala propiedad `pag.itemsCurrent` nos va a devolver los primeros datos que hayan de la paginacion 1
Si queremos ver los siguientes datos primero seteamos el numero de paginacion con el metodo `pag.setPagCurrent(num)` y luego llamamos devuelta `pag.itemsCurrent`

El metodo `pag.showPaginadoFull()` nos va a devolver la cantidad de paginas que hay

### Metodos:

---

```sh
npm install
```
