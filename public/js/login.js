function autenticar() {
    const emailVar = input_email.value;
    const senhaVar = input_senha.value;
   
       if (emailVar == "" || senhaVar == "") {
           
           alert("Preencha todos os campos!");
           return false;
       }
   
       console.log("FORM LOGIN: ", emailVar);
       console.log("FORM SENHA: ", senhaVar);
   
       fetch("/usuarios/autenticar", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               emailServer: emailVar,
               senhaServer: senhaVar
           })
       }).then(function (resposta) {
           console.log("ESTOU NO THEN DO entrar()!")
   
           if (resposta.ok) {
               console.log(resposta);
   
               resposta.json().then(json => {
                   console.log(json);
                   console.log(JSON.stringify(json));
   
                       alert("Login realizado com sucesso")
                       window.location.href="index.html";
   
               });
   
           } else {
               alert("Email ou senha incorreto!")
               console.log("Houve um erro ao tentar realizar o login!");
   
               resposta.text().then(texto => {
                   console.error(texto);
               });
           }
   
       }).catch(function (erro) {
           console.log(erro);
       })
   
       return false;
   }
   

