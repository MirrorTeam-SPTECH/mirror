document.getElementById('autenticar').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('input_email').value;
    const senha = document.getElementById('input_senha').value;

    if (email == "" || senha == "") {
        alert("Preencha todos os campos!");
        return false;
     } 

    fetch('http://localhost:3000/usuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        
        if (!response.ok) {
            throw new Error('Nenhum usuario encontrado');
        }
        return response.json();
    })
    .then(data => {
      console.log(data);
      console.log( data.find(data => data.email === email && data.senha === senha));

      if (!data.find(data => data.email === email && data.senha === senha)) {
        alert('Email ou senha inválidos');
        return false;
      } 
      alert('Login realizado com sucesso');
      window.location.href = "/"
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um problema com o login. Tente novamente mais tarde.');
    });
});