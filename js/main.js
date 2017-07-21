var productos = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(compra) {
  this.compra = compra.toLowerCase();
  this.producttID = (productos.length + 1);
};

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () {
  var html = '';
  var num = 0;
  html += this.producttID+ " "+ this.compra.toUpperCase() + '<br>';
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (var i=0; i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

//funcion para imprimir todos las frutas
function printAll(){
  printHTML(mergeHTML());
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addCompra = document.getElementById('nuevacompra');
addCompra.onclick = function() {
  swal({
            title: "¿Que fruta desea agregar?",
            text: "Ingrese el nombre de la fruta a agregar",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        },
            function(inputValue){
              if (inputValue === false) return false;

              if (inputValue === "") {
                  swal.showInputError("Debes ingresar una fruta");
                  return false
              }
            var compra = inputValue;

            swal("Perfecto", "Escribiste: " + compra, "success");
                var product  = new Producto (compra);
                productos.push(product);
                printAll();                              
      });
};
