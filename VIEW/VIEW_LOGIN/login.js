function fazerLogin() {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
 
    const usuarioValido = "admin";
    const senhaValida = "admin";

    if (usuario === usuarioValido && senha === senhaValida) {
        window.location.href = "/VIEW/VIEW_MENU/view_menu.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}