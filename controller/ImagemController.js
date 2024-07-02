import multer from 'multer';
import Imagem from '../model/Imagem.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImagem = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    try {
        const base64Image = req.file.buffer.toString('base64');

        for (let index = 0; index < 20; index++) {
            console.log("\n")
        }
        console.log(base64Image.length)
        for (let index = 0; index < 20; index++) {
            console.log("\n")
        }

        const novaImagem = await Imagem.create({ Foto: base64Image });
        res.send('Imagem salva com sucesso!');
    } catch (err) {
        console.error('Erro ao salvar a imagem:', err);
        res.status(500).send('Erro ao salvar a imagem.');
    }
};

export { upload, uploadImagem };
