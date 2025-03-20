const API_URL = 'http://localhost:3000/login';  

document.getElementById('loginAplicacao').addEventListener('click', function(){
    window.location.href = "./login.html";
});  

document.getElementById('cadastroAplicacao').addEventListener('click', function(){
    window.location.href = "./cadastro.html";
});  

document.getElementById('autenticar').addEventListener('click', function (e) {  
    e.preventDefault();  
    
    const email = document.getElementById('input_email').value;  
    const senha = document.getElementById('input_senha').value;  

    if (email === "" || senha === "") {  
        alert("Preencha todos os campos!");  
        return;  
    }  

    if (!validarEmail(email)) {  
        alert("Email inválido!");  
        return;  
    }  

    fetch(API_URL, {  
        method: 'GET',  
        headers: {  
            'Content-Type': 'application/json',  
        }  
    })  
    .then(response => {  
        if (!response.ok) {  
            throw new Error('Nenhum usuário encontrado');  
        }  
        return response.json();  
    })  
    .then(data => {  
        const usuario = data.find(user => user.email === email && user.senha === senha);  

        if (!usuario) {  
            alert('Email ou senha inválidos');  
            return;  
        }  
        
        alert('Login realizado com sucesso');  
        window.location.href = "/";  
    })  
    .catch(error => {  
        console.error('Erro:', error);  
        alert('Houve um problema com o login. Tente novamente mais tarde.');  
    });  
});  


function validarEmail(email) {  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return re.test(String(email).toLowerCase());  
}  