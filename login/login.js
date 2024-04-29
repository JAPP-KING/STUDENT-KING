const contenedor = document.getElementById('contenedor');
const registrarseBtn = document.getElementById('registrarse');
const inicioSesionBtn = document.getElementById('inicio-sesion');

registrarseBtn.addEventListener('click', () => {
    contenedor.classList.add("activo");
});

inicioSesionBtn.addEventListener('click', () => {
    contenedor.classList.remove("activo");
});