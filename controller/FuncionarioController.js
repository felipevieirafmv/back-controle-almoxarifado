import Endereco from "../model/endereco.js";
import Funcionario from "../model/funcionario.js";
import TipoFuncionario from "../model/tipoFuncionario.js";
import Imagem from "../model/imagem.js";
import bcrypt from 'bcrypt';

export default class FuncionarioController
{
    static async create (req, res) {
        const { nome, matricula, senha, endereco, imagemID, tipoFuncionarioID  } = req.body;

        if(!nome || !matricula || !senha)
            return res.status(400).send({ message: "Não tem como criar um funcionario sem os dados!" })

        
        const tipoFuncionario = await TipoFuncionario.findByPk(tipoFuncionarioID)

        if(!tipoFuncionario)
            return res.status(400).send({ message: "Tipo do funcionário não encontrado" })

        const imagem = await Imagem.findByPk(imagemID)

        if(!imagem)
            return res.status(400).send({ message: "Imagem não encontrada"})

        try {
            const saltRounds = 10; 
            const salt = await bcrypt.genSalt(saltRounds);
    
            const hashedSenha = await bcrypt.hash(senha, salt);

            const endereco_func = 
            {
                Cep : endereco.cep,
                Cidade : endereco.cidade,
                Bairro : endereco.bairro,
                Rua : endereco.rua,
                Complemento : endereco.complemento,
                Uf : endereco.uf
            }

            const createEndereco = await Endereco.create(endereco_func);

            const funcionario = 
            {
                Nome : nome,
                Matricula : matricula,
                Senha : hashedSenha,
                Salt : salt,
                EnderecoID: createEndereco.ID,
                ImagemID: imagemID, 
                TipoFuncionarioID: tipoFuncionarioID
            }

             const createdFuncionario = await Funcionario.create(funcionario);

             return res.status(201).send({ message: "Funcionário cadastrado com sucesso", body: createdFuncionario });
    
        } catch (error) {
            console.error("Erro ao criar funcionário: ", error);
            return res.status(500).send({ error: error });
        }
    }
}