function desencriptar() {
	let texto = document.getElementById("textoIngresado").value;
	if (texto.trim().length === 0) {
		document.getElementById("sin-mensaje").style.display = "block";
		document.getElementById("copiar-mensaje").style.display = "none";
		document.getElementById("textoResultado").value = "";
	} else {
		document.getElementById("sin-mensaje").style.display = "none";
		texto = texto.toLowerCase();
		texto = texto.replace(/enter/g, "e");
		texto = texto.replace(/imes/g, "i");
		texto = texto.replace(/ai/g, "a");
		texto = texto.replace(/ober/g, "o");
		texto = texto.replace(/ufat/g, "u");
		document.getElementById("textoResultado").value = texto;
	}
}