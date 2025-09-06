window.onload = function (e) {

    var botaoEntrar = document.getElementById("botaoEntrar");

    var putEmail = document.getElementById("txtEmail");

    var putSenha = document.getElementById("txtSenha");

    txtEmail.focus();

    botaoEntrar.onclick = function (e) {
        e.preventDefault();

        var email = putEmail.value;
        var senha = putSenha.value;

        if (email == "") {
            exibirMensagemErro("E-mail obrigatório")
        }
        else if (senha == "") {
            exibirMensagemErro("Senha obrigatória")
        }
        else {
            realizarLogin(email)
        }

        function exibirMensagemErro(mensagem) {
            var spanErro = document.getElementById("spanErro");
            spanErro.innerText = mensagem;
            spanErro.style.display = "block";

            setTimeout(function () {
                spanErro.style.display = "none";
            }, 4000);
        }

        function realizarLogin(email) {
            var data = JSON.stringify({
                "email": email,
                "senha": senha
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {

                    var loginResult = JSON.parse(this.responseText);

                    if (loginResult.sucesso) {
                        alert('Login realizado com sucesso');

                    }

                    else {
                        exibirMensagemErro(result.mensagem)
                    }
                }
            });

            xhr.open("POST", "https://localhost:44380/api/animeflix/login");
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(data);
        }
    }







}