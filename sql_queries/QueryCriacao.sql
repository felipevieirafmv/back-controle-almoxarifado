use master
go

if exists(select * from sys.databases where name = 'AlmoxDB')
	drop database AlmoxDB
go

create database AlmoxDB
go

use AlmoxDB
go

create table Imagem
(
	ID int identity primary key,
	Foto varbinary(MAX) not null
)
go

create table Endereco
(
	ID int identity primary key,
	Cep int not null,
	Cidade varchar(100) not null,
	Bairro varchar(100) not null,
	Rua varchar(100) not null,
	Complemento varchar(100),
	Uf char(2) not null,
)
go

create table TipoFuncionario
(
	ID int identity primary key,
	Nome varchar(50) not null
)
go

create table Funcionario
(
	ID int identity primary key,
	Nome varchar(80) not null,
	Matricula varchar(20) not null,
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	ImagemID int references Imagem(ID),
	EnderecoID int references Endereco(ID),
	TipoFuncionarioID int references TipoFuncionario(ID)
)
go

create table TipoSala
(
	ID int identity primary key,
	Nome varchar(50) not null
)
go

create table Sala
(
	ID int identity primary key,
	Nome varchar(50) not null,
	Andar varchar(50) not null,
	TipoSalaID int references TipoSala(ID)
)
go

create table TipoEquipamento
(
	ID int identity primary key,
	Nome varchar(50) not null
)
go

create table Equipamento
(
	ID int identity primary key,
	Nome varchar(100) not null,
	Quantidade int not null,
	Descricao varchar(300),
	ImagemID int references Imagem(ID),
	TipoEquipamentoID int references TipoEquipamento(ID)
)
go