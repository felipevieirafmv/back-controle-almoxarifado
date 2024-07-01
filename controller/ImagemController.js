import multer from 'multer';
import Imagem from '../model/Imagem.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImagem = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    try {
        const novaImagem = await Imagem.create({ Foto: req.file.buffer });
        res.send('Imagem salva com sucesso!');
    } catch (err) {
        console.error('Erro ao salvar a imagem:', err);
        res.status(500).send('Erro ao salvar a imagem.');
    }
};

export { upload, uploadImagem };
