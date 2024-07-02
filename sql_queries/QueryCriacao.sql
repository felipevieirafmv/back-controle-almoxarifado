CREATE DATABASE IF NOT EXISTS AlmoxDB;
USE AlmoxDB;

CREATE TABLE Imagem (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Foto LONGTEXT NOT NULL
);

CREATE TABLE Endereco (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Cep INT NOT NULL,
    Cidade VARCHAR(100) NOT NULL,
    Bairro VARCHAR(100) NOT NULL,
    Rua VARCHAR(100) NOT NULL,
    Complemento VARCHAR(100),
    Uf CHAR(2) NOT NULL
);

CREATE TABLE TipoFuncionario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Funcionario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(80) NOT NULL,
    Matricula VARCHAR(20) NOT NULL,
    Senha LONGTEXT NOT NULL,
    Salt VARCHAR(200) NOT NULL,
    ImagemID INT,
    EnderecoID INT,
    TipoFuncionarioID INT,
    FOREIGN KEY (ImagemID) REFERENCES Imagem(ID),
    FOREIGN KEY (EnderecoID) REFERENCES Endereco(ID),
    FOREIGN KEY (TipoFuncionarioID) REFERENCES TipoFuncionario(ID)
);

CREATE TABLE TipoSala (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Sala (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Andar VARCHAR(50) NOT NULL,
    TipoSalaID INT,
    FOREIGN KEY (TipoSalaID) REFERENCES TipoSala(ID)
);

CREATE TABLE TipoEquipamento (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL
);

CREATE TABLE Equipamento (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Quantidade INT NOT NULL,
    Descricao VARCHAR(300),
    ImagemID INT,
    TipoEquipamentoID INT,
    FOREIGN KEY (ImagemID) REFERENCES Imagem(ID),
    FOREIGN KEY (TipoEquipamentoID) REFERENCES TipoEquipamento(ID)
);
