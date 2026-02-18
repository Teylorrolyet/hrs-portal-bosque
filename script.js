let entries = [];

// Inicialización
window.onload = () => {
  checkLogin();
  load();
  startClock();
};

// Login
function login(){
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;

  if(!user || pass.length !== 4){
    alert('Datos inválidos');
    return;
  }

  localStorage.setItem('user', user);
  localStorage.setItem('pass', pass);
  checkLogin();
}

function logout(){
  localStorage.removeItem('user');
  localStorage.removeItem('pass');
  location.reload();
}

function checkLogin(){
  if(localStorage.getItem('user')){
    document.getElementById('login').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
  }
}

// Guardar
function saveEntry(){
  const date = document.getElementById('date').value;
  const inT = document.getElementById('in').value;
  const outT = document.getElementById('out').value;

  if(!date){
    alert('Seleccione fecha');
    return;
  }

  const total = calcHours(inT,outT);

  const item = {date,in:inT,out:outT,total};

  entries.unshift(item);
  save();
  render();
}

function calcHours(a,b){
  const i = new Date('2000-01-01 '+a);
  const o = new Date('2000-01-01 '+b);

}