function validarCPF() {
    var cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/[- .]/g, "");
    console.log(cpf);

    let resto1 = 0;
    let resto2 = 0;
    let mult1 = 10;
    let mult2 = 11;
    let validarPrimeiro;
    let validarSegundo;

    if (cpf[0] == cpf[1] && cpf[1] == cpf[2] && cpf[2] == cpf[3] && cpf[3] == cpf[4] && cpf[4] == cpf[5] && cpf[5] == cpf[6] && cpf[6] == cpf[7] && cpf[7] == cpf[8]) {
        document.getElementById("error-message").innerHTML = "CPF inválido!";
        document.getElementById("error-message").style.display = "flex";
        document.getElementById("cpf").style.border = "1px solid red";
        return;
    }
    // exemplo: 52998224725
    if (cpf.length == 11) {
        // somatoria dos primeiros 9
        for (i = 0; i < 9; i++) {
            resto1 += cpf[i] * mult1;
            mult1--;
        }

        //verifica resto 10 = 0
        if (resto1 == 10) {
            resto1 = 0;
        }

        // somatoria dos primeiro 11
        for (i = 0; i < 10; i++) {
            resto2 += cpf[i] * mult2;
            mult2--;
        }

        if (resto2 == 10) {
            resto2 = 0;
        }

        validarPrimeiro = (resto1 * 10) % 11;
        validarSegundo = (resto2 * 10) % 11;
    }

    if (validarPrimeiro == cpf[9] && validarSegundo == cpf[10]) {
        document.getElementById("error-message").style.display = "none";
        document.getElementById("cpf").style.border = "1px solid green";
    } else {
        document.getElementById("error-message").innerHTML = "CPF inválido!";
        document.getElementById("error-message").style.display = "flex";
        document.getElementById("cpf").style.border = "1px solid rgb(239 68 68)";
    }
}
