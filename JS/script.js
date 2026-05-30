function encontrarPalabraMasLarga() {
    const texto = document.getElementById("texto").value;

    // Paso 1: Convertir el texto en un arreglo de palabras
    const palabras = texto.split(" ");

    // Paso 2: Inicializar la palabra más larga
    let longestWord = "";

    // Paso 3: Sliding Window
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longestWord.length) {
            longestWord = palabras[i];
        }
    }

    // Paso 4: Mostrar resultado
    document.getElementById("resultado").textContent =
        `La palabra más larga es: "${longestWord}"`;
}