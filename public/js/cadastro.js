document.getElementById('Cadastrar').addEventListener('click', function (e) {
    e.preventDefault();

    const nomeVar = document.getElementById('input_nome').value;
    const emailVar = document.getElementById('input_email').value;
    const senhaVar = document.getElementById('input_senha').value;
    const telefoneVar = document.getElementById('input_telefone').value;
    const confirmacaoSenhaVar = document.getElementById('input_confirmar').value;
    const arrobaEmail = emailVar.indexOf('@');
    const pontoEmail = emailVar.indexOf('.com');
    const caracteresEspeciais = ['!', '@', '#', '$', '*', '&', '%'];
    const senhaTemEspecial = caracteresEspeciais.some(caractere => senhaVar.includes(caractere));

    if (
        nomeVar === "" ||
        emailVar === "" ||
        telefoneVar === "" ||
        senhaVar === "" ||
        confirmacaoSenhaVar === ""
    ) {
        alert("Preencha todos os campos");
    } else if (arrobaEmail < 1) {
        alert("Email precisa ter @!");
    } else if (pontoEmail < 1) {
        alert("Email precisa ter uma extensão de domínio!");
    } else if (telefoneVar.length < 11) {
        alert("Telefone incorreto!");
    } else if (senhaVar.length < 6 || confirmacaoSenhaVar.length < 6) {
        alert("Senhas devem ter pelo menos 6 caracteres");
    } else if (!senhaTemEspecial) {
        alert("A senha deve conter pelo menos um caractere especial (!, @, #, $, *, &, %)");
    } else if (senhaVar !== confirmacaoSenhaVar) {
        alert("Senhas precisam ser iguais!");
    } else {
        const novoUsuario = {
            nome: nomeVar,
            email: emailVar,
            senha: senhaVar,
            telefone: telefoneVar
        };

        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoUsuario)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }
            return response.json();
        })
        .then(data => {
            alert("Cadastro realizado com sucesso");
            window.location.href = "login.html";
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Houve um problema ao cadastrar. Tente novamente mais tarde.");
        });
    }
});
