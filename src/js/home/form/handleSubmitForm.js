function handleSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const rank = document.getElementById("rank").value;
    const preferredModes = document.getElementById("preferred-modes").value;

    if (validarCPF() === false) {
        // console.log("cpf invalid");

        document.getElementById("label-cpf").style.color = "red";
        document.getElementById("cpf-error-message").innerHTML = "Nome inválido!";
        document.getElementById("cpf-error-message").style.display = "flex";
        document.getElementById("cpf").style.border = "1px solid red";
    } else {
        document.getElementById("label-cpf").style.color = "green";
        document.getElementById("cpf-error-message").style.display = "none";
        document.getElementById("cpf").style.border = "1px solid green";
    }

    if (name.length < 3) {
        // console.log("name invalid");

        document.getElementById("label-name").style.color = "red";
        document.getElementById("name-error-message").innerHTML = "Nome inválido!";
        document.getElementById("name-error-message").style.display = "flex";
        document.getElementById("name").style.border = "1px solid red";
    } else {
        document.getElementById("label-name").style.color = "green";
        document.getElementById("name-error-message").style.display = "none";
        document.getElementById("name").style.border = "1px solid green";
    }

    if (validarEmail(email) === null) {
        // console.log("email invalid");

        document.getElementById("label-email").style.color = "red";
        document.getElementById("email-error-message").innerHTML = "Email inválido!";
        document.getElementById("email-error-message").style.display = "flex";
        document.getElementById("email").style.border = "1px solid red";
    } else {
        document.getElementById("label-email").style.color = "green";
        document.getElementById("email-error-message").style.display = "none";
        document.getElementById("email").style.border = "1px solid green";
    }

    if (name.length < 3 || validarEmail(email) === null || validarCPF() === false) {
        console.log("form invalid");
        return;
    } else {
        console.log("form valid");

        document.getElementById("name").value = ""; // Clear name input
        document.getElementById("email").value = ""; // Clear email input
        document.getElementById("cpf").value = ""; // Clear CPF input

        document.getElementById("label-name").style.color = "rgb(75 85 99)"; // Set name label color to green
        document.getElementById("label-email").style.color = "rgb(75 85 99)"; // Set email label color to green
        document.getElementById("label-cpf").style.color = "rgb(75 85 99)"; // Set CPF label color to green

        document.getElementById("email").style.border = "1px solid rgb(209 213 219)"; // Set email input border to green
        document.getElementById("name").style.border = "1px solid rgb(209 213 219)"; // Set name input border to green
        document.getElementById("cpf").style.border = "1px solid rgb(209 213 219)"; // Set CPF input border to green

        document.getElementById("success-toast").style.bottom = "0px"; // Hide success toast
        document.getElementById("success-toast").style.opacity = 1; // Show success toast

        setTimeout(() => {
            document.getElementById("success-toast").style.opacity = 0; // Hide success toast after 3 seconds
            document.getElementById("success-toast").style.bottom = "-100px"; // Hide success toast after 3 seconds
        }, 3000);
    }
}

function validarCPF() {
    console.log("validarCPF");
    var cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/[- .]/g, "");

    let resto1 = 0;
    let resto2 = 0;
    let mult1 = 10;
    let mult2 = 11;
    let validarPrimeiro = 0;
    let validarSegundo = 0;

    if (cpf[0] == cpf[1] && cpf[1] == cpf[2] && cpf[2] == cpf[3] && cpf[3] == cpf[4] && cpf[4] == cpf[5] && cpf[5] == cpf[6] && cpf[6] == cpf[7] && cpf[7] == cpf[8]) {
        return false;
    }

    console.log("cpf", cpf);

    if (cpf.length < 11) {
        return false;
    }

    // exemplo: 52998224725
    if (cpf.length == 11) {
        // somatoria dos primeiros 9
        for (i = 0; i < 9; i++) {
            resto1 += cpf[i] * mult1;
            mult1--;
        }

        //verifica resto 10 = 0
        if (resto1 === 10) {
            resto1 = 0;
        }

        // somatoria dos primeiro 11
        for (i = 0; i < 10; i++) {
            resto2 += cpf[i] * mult2;
            mult2--;
        }

        //verifica resto 10 = 0
        if (resto2 === 10) {
            resto2 = 0;
        }

        validarPrimeiro = (resto1 * 10) % 11;
        console.log("validarPrimeiro", validarPrimeiro);
        validarSegundo = (resto2 * 10) % 11;
        console.log("validarSegundo", validarSegundo);

        // se o resto for 10, o digito é 0
        if (validarSegundo == 10) {
            validarSegundo = 0;
        }

        // se o resto for 10, o digito é 0
        if (validarPrimeiro == 10) {
            validarPrimeiro = 0;
        }

        if (validarPrimeiro == cpf[9] && validarSegundo == cpf[10]) {
            console.log("cpf valid");
            return true;
        } else {
            return false;
        }
    }
}

const validarEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
