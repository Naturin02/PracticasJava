// Ejercicio 1
function checkAge() {
    const age = document.getElementById('edad').value;
    let message;
    if (age >= 0 && age <= 99) {
        message = age >= 18 ? "Ya puede conducir." : "No puede conducir.";
    } else {
        message = "Edad inválida. Ingrese una edad entre 0 y 99.";
    }
    document.getElementById('result1').textContent = message;
}

// Ejercicio 2
function gradeScale() {
    const grade = document.getElementById('grade').value;
    let evaluation;
    if (grade >= 0 && grade < 3) {
        evaluation = "Muy deficiente";
    } else if (grade >= 3 && grade < 5) {
        evaluation = "Insuficiente";
    } else if (grade >= 5 && grade < 6) {
        evaluation = "Suficiente";
    } else if (grade >= 6 && grade < 7) {
        evaluation = "Bien";
    } else if (grade >= 7 && grade < 9) {
        evaluation = "Notable";
    } else if (grade >= 9 && grade <= 10) {
        evaluation = "Sobresaliente";
    } else {
        evaluation = "Nota inválida";
    }
    document.getElementById('result2').textContent = evaluation;
}

// Ejercicio 3
function concatStrings() {
    let texts = [];
    while (true) {
        let text = prompt("Ingrese un texto (o presione 'Cancelar' para terminar):");
        if (text === null) break;
        texts.push(text);
    }
    document.getElementById('result3').textContent = texts.join("-");
}

// Ejercicio 4
function calculateDNILetter() {
    const dni = document.getElementById('dni').value;
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        const letter = letters.charAt(dni % 23);
        document.getElementById('result4').textContent = `La letra del DNI es: ${letter}`;
    } else {
        alert("Número de DNI inválido. Inténtelo de nuevo.");
    }
}
