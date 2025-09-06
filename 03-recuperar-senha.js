window.onload = function (e) {

    var botaoEnviar = document.getElementById("txtBtn");
    var txtEmail = document.getElementById("txtEmail");

    botaoEnviar.onclick = function (e) {

        var email = txtEmail.value;

        if (email == "") {
            mensagemErro("Campo Obrigatório")
        }
        else {
            enviar(email);
        }

    }

    function mensagemErro(mensagem) {
        var span = document.getElementById("txtSpan");

        span.innerText = mensagem;
        span.style.display = "block"

        setTimeout(function(){ 
        span.style.display = "none"}, 4000)
    }

    function enviar(email) {
        var data = JSON.stringify({
            "email": email
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var emailResult = JSON.parse(this.responseText);

                if (emailResult.sucesso) {
                    alert("Um link foi encaminhado ao seu e-mail");
                }
                else {
                    mensagemErro(emailResult.mensagem);
                }
            }
        });

        xhr.open("POST", "https://localhost:44380/api/animeflix/recuperar");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);

    }
}