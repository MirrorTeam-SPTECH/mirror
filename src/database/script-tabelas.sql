create database Mirror;
use Mirror;

create table contato(
idContato int primary key auto_increment,
nome varchar(45),
email varchar(100),
assunto varchar(45),
mensagem varchar(100)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(45)
);

        

