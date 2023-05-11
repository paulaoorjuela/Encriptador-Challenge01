function encriptar() {
	let texto = document.getElementById("textoIngresado").value;
	if (texto.trim().length === 0) {
		document.getElementById("sin-mensaje").style.display = "block";
		document.getElementById("copiar-mensaje").style.display = "none";
		document.getElementById("textoResultado").value = "";
	} else {
		document.getElementById("sin-mensaje").style.display = "none";
		texto = texto.toLowerCase();
		texto = texto.replace(/e/g, "enter");
		texto = texto.replace(/i/g, "imes");
		texto = texto.replace(/a/g, "ai");
		texto = texto.replace(/o/g, "ober");
		texto = texto.replace(/u/g, "ufat");
		document.getElementById("textoResultado").value = texto;
	}
}
