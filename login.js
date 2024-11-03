function mudarSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form onsubmit="return validateLogin()">
            <label for="username">Usuario</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Entrar</button>
        </form>
        <p id="error-message" style="color: red; display: none;">Usuário ou senha incorretos.</p>
    </div>

    <script>
        function validateLogin() {
            // Dados de login de exemplo
            const correctUsername = "Tinho";
            const correctPassword = "fogo";

            // Obtendo os valores dos campos de entrada
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Verificando se os dados são corretos
            if (username === correctUsername && password === correctPassword) {
                // Redireciona para a segunda página
                window.location.href = "botafogo.html";
                return false; // Evita o envio do formulário
            } else {
                // Mostra mensagem de erro
                document.getElementById("error-message").style.display = "block";
                return false; // Evita o envio do formulário
            }
        }
    </script>
</body>
</html>