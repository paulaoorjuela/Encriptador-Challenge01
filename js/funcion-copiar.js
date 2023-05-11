function copiarAlPortapapeles() {
	let copiarTexto = document.getElementById("textoResultado");
	if (copiarTexto.value.trim().length === 0) {
		document.getElementById("sin-mensaje").style.display = "block";
		document.getElementById("copiar-mensaje").style.display = "none";
	} else {
		copiarTexto.select();
		document.execCommand("copy");
		document.getElementById("sin-mensaje").style.display = "none";
		document.getElementById("copiar-mensaje").style.display = "block";

	}
}

let botonCopiar = document.getElementById('boton-copiar');

botonCopiar.addEventListener('click', () => {
	document.getElementById("textoIngresado").value = "";
  setTimeout(() => {
    let copiarMensaje = document.getElementById('copiar-mensaje');
    copiarMensaje.style.display = 'none';
  }, 1050); });
