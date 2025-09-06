window.onload = function (e) {

    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtNome = document.getElementById("txtNome");

    var txtSobreNome = document.getElementById("txtSobreNome");

    var txtUser = document.getElementById("txtUser");

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    var txtData = document.getElementById("txtData");

    var txtEmailRecuperar = document.getElementById("txtEmailRecuperar");

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;
        var sobrenome = txtSobreNome.value;
        var usuario = txtUser.value;
        var email = txtEmail.value;
        var senha = txtSenha.value;
        var nascimento = txtData.value;
        var recuperarEmail = txtEmailRecuperar.value;

        if (nome == "") {
            mensagemErro("Campo NOME obrigatório")

        }
        else if (sobrenome == "") {
            mensagemErro("Campo SOBRENOME obrigatório")

        }
        else if (usuario == "") {
            mensagemErro("Campo USUÁRIO obrigatório")

        }
        else if (email == "") {
            mensagemErro("Campo EMAIL obrigatório")

        }
        else if (senha == "") {
            mensagemErro("Campo SENHA obrigatório")

        }
        else if (nascimento== "") {
            mensagemErro("Campo DATA obrigatório")

        }
        else if (recuperarEmail == "") {
            mensagemErro("Campo EMAIL PARA RECUPERAR SENHA obrigatório")

        }
        else {
            mensLogin(usuario);

        }
        function mensagemErro(mensagem) {

            var span = document.getElementById("spnErro");

            span.innerText = mensagem;
            span.style.display = "block";


            setTimeout(function () {
                span.style.display = "none";
            }, 4000 )

        }

        function mensLogin(usuario) {
            var data = JSON.stringify({
                "nome": nome,
                "sobrenome": sobrenome,
                "usuario": usuario,
                "email": email,
                "senha": senha,
                "nascimento": nascimento,
                "recuperarEmail": recuperarEmail
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var cadastroResult = JSON.parse(this.responseText)

                    if (cadastroResult.sucesso) {
                        alert('Cadastro realizado com sucesso');
                    }
                    else {
                        mensagemErro(result.mensagem);

                    }
                }
            });

            xhr.open("POST", "https://localhost:44380/api/animeflix/cadastro");
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(data);

        }

    }
}