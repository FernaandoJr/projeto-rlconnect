function handleSubmitLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log(email.value, password.value);
    if (email.value === "teste@teste.com" && password.value === "teste") {
        alert("Login realizado com sucesso!");
        window.location.href = "./home.html";
        localStorage.setItem("loggedIn", true);
    } else {
        alert("Email ou senha incorretos!");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        email.focus();

        document.getElementById("error-message").innerHTML = "Email ou senha incorretos!";
        document.getElementById("error-message").style.display = "flex";

        timeout = 3000;
        setTimeout(() => {
            document.getElementById("error-message").style.display = "none";
        }, timeout);
    }
}
