function cadastrar() {

    const nomeVar = input_nome.value;
    const emailVar = input_email.value;
    const senhaVar = input_senha.value;
    const telefoneVar = input_senha.value;
    const confirmacaoSenhaVar = input_confirmar.value;
    const arrobaEmail = emailVar.indexOf('@');
    const pontoEmail = emailVar.indexOf('.com');
    const caracteresEspeciais = ['!', '@', '#', '$', '*', '&', '%'];
    const senhaTemEspecial = caracteresEspeciais.some(caractere => senhaVar.includes(caractere));


    if (
        nomeVar == "" ||
        emailVar == "" ||
        telefoneVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        alert("Preencha todos os campos");

    } else if (arrobaEmail < 1) {
        alert("Email precisa ter @!");
    } else if (pontoEmail < 1) {
        alert("Email precisa ter uma extensão de domínio!");
    }
    else if(telefoneVar.length < 11){
       alert("Telefone incorreto!")
    }

    else if (senhaVar.length < 6 || confirmacaoSenhaVar.length < 6) {
        alert("Senhas devem ter pelo menos 6 caracteres");
    } else if (!senhaTemEspecial) {
        alert("A senha deve conter pelo menos um caractere especial (!, @, #, $, *, &, %)");
    }
    else if (senhaVar != confirmacaoSenhaVar) {
        alert("Senhas precisam ser iguais!");
    }

    else {

       alert("Cadastro realizado com sucesso");
       window.location.href="login.html";
    }
}