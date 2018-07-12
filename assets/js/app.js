//recuperar datos
//guardar datos
//imprimir datos

window.onload = () => {
  saveData(); //se escribe la funcion primero porque asi se puede ocupar en cualquier momento, asi es para funciones globales
  recoverData();
  clearData();
}

function saveData() {
  const btnSave = document.getElementById('save');
  btnSave.addEventListener('click', () => {
    //recupera y guarda la info
    localStorage.nombre = document.getElementById('first_name').value;
    localStorage.password = document.getElementById('password').value;
  });
}

//recuperar data
function recoverData() {
  const btnRecover = document.getElementById('recover');
  btnRecover.addEventListener('click', () => {
    document.getElementById('datos').innerHTML = localStorage.nombre
  });
}


//limpiar
function clearData() {
  const btnClear = document.getElementById('clear');
  btnClear.addEventListener('click', () => {
    document.getElementById('datos').innerHTML = '';
  });
}