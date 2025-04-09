document.getElementById("cpf").addEventListener("input", function (e) {
    var valor = e.target.value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    e.target.value = valor;
});
