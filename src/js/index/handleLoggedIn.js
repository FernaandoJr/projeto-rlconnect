const loggedIn = localStorage.getItem("loggedIn");

console.log("loggedIn", loggedIn);

if (loggedIn === null || loggedIn === "false") {
    window.location.href = "./index.html";
    alert("Você precisa estar logado para acessar esta página.");
}
