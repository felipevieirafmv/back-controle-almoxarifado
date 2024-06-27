CREATE LOGIN Felipe
WITH PASSWORD = 'senha';
go

-- Nome do servidor
SELECT @@SERVERNAME AS 'ServerName';

-- Lista de bancos de dados
SELECT name AS 'AlmoxDB'
FROM sys.databases
WHERE database_id > 4; -- Ignora bancos de sistema como master, tempdb, etc.

-- Informações do usuário
SELECT name AS 'LoginName', type_desc AS 'LoginType'
FROM sys.server_principals
WHERE name = 'Felipe'; -- Substitua com o nome de usuário desejado


DECLARE @porta VARCHAR(10);

-- Consulta para ler a porta do registro do sistema
EXEC xp_instance_regread 
    N'HKEY_LOCAL_MACHINE', 
    N'Software\Microsoft\Microsoft SQL Server\MSSQLServer\SuperSocketNetLib\Tcp\IPAll', 
    N'TcpPort', 
    @porta OUTPUT;

-- Retorna a porta configurada
SELECT @porta AS 'Porta_SQL_Server';