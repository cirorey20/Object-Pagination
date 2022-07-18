// run `node index.js` in the terminal
let apiData = [
  { id: 0, name: 'Campera' },
  { id: 1, name: 'Gafas' },
  { id: 2, name: 'Galera' },
  { id: 3, name: 'Corbata' },
  { id: 4, name: 'Remera' },
  { id: 5, name: 'Pantalon' },
  { id: 6, name: 'Short' },
  { id: 7, name: 'Buzo' },
];

class Pagination {
  constructor(data, quantityItems) {
    this.pagDat = data;

    this.pagCurrent = 1;
    this.itemsPagina = !quantityItems ? 3 : quantityItems; //elementos quiero que haya en cada pagina

    this.itemsCurrent = this.pagedLogic();
    this.pageNumbers = [];
  }
  setPagCurrent(numeroPagina) {
    //setter de la pagina donde voy quiero hacer click
    this.pagCurrent = numeroPagina;
    this.pagedLogic();
  }

  pagedLogic() {
    if (this.pagCurrent === 1) {
      //renderizamos los primeros item en la propiedad itemsCurrent
      let iEndPagina = this.pagCurrent * this.itemsPagina;

      let iFirtsPagina = iEndPagina - this.itemsPagina;
      let iCurrent = this.pagDat.slice(iFirtsPagina, iEndPagina);
      //let iCurrent = iEndPagina;
      return (this.itemsCurrent = iCurrent);
    } else {
      //PERO SI USO EL METODO setPagCurrent() hacemos el cambio
      let iEndPagina = this.pagCurrent * this.itemsPagina;

      let iFirtsPagina = iEndPagina - this.itemsPagina;
      let iCurrent = this.pagDat.slice(iFirtsPagina, iEndPagina);
      //let iCurrent = iEndPagina;
      this.itemsCurrent = iCurrent;
    }
  }

  showPaginadoFull() {
    //logica de paginado
    let lengthPag = this.pagDat.length;
    let pages = [];
    for (let i = 1; i < Math.ceil(lengthPag / this.itemsPagina); i++) {
      pages.push(i);
    }
    pages.push(pages.length + 1); //esto puede que funcione o puede que no
    return (this.pageNumbers = pages);
  }
} //End Class Pagination

let pag = new Pagination(apiData, 2);
console.log('Cantidad de paginados: ', pag.showPaginadoFull());
console.log('PagCurrent: ', pag.pagCurrent);
console.log('Items en la pagina 1: ', pag.itemsCurrent, '\n');

pag.setPagCurrent(2);
console.log('Cantidad de paginados: ', pag.showPaginadoFull());
console.log('PagCurrent: ', pag.pagCurrent);
console.log('Items en la pagina 2: ', pag.itemsCurrent, '\n');

pag.setPagCurrent(3);
console.log('Cantidad de paginados: ', pag.showPaginadoFull());
console.log('PagCurrent: ', pag.pagCurrent);
console.log('Items en la pagina 3: ', pag.itemsCurrent, '\n');

pag.setPagCurrent(4);
console.log('Cantidad de paginados: ', pag.showPaginadoFull());
console.log('PagCurrent: ', pag.pagCurrent);
console.log('Items en la pagina 3: ', pag.itemsCurrent, '\n');
