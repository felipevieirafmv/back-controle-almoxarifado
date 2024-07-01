import express from "express";
import TipoSalaController from "../controller/TipoSalaController.js"
import TipoEquipamentoController from "../controller/TipoEquipamentoController.js"
import { upload, uploadImagem } from '../controller/ImagemController.js';
import SalaController from "../controller/SalaController.js";
import TipoFuncionarioController from "../controller/TipoFuncionarioController.js";

const routes = express.Router();

// TipoSala
routes.post("/api/tipoSala/", TipoSalaController.create)
routes.get("/api/tipoSala/", TipoSalaController.getAllTipoSala)
routes.get("/api/tipoSala/:id", TipoSalaController.getTipoSalaByID)
routes.put("/api/tipoSala/:id", TipoSalaController.updateTipoSala)
routes.delete("/api/tipoSala/:id", TipoSalaController.delete)

// TipoEquipamento
routes.post("/api/tipoEquipamento/", TipoEquipamentoController.create)
routes.get("/api/tipoEquipamento/", TipoEquipamentoController.getAllTipoEquipamento)
routes.get("/api/tipoEquipamento/:id", TipoEquipamentoController.getTipoEquipamentoByID)
routes.put("/api/tipoEquipamento/:id", TipoEquipamentoController.updateTipoEquipamento)
routes.delete("/api/tipoEquipamento/:id", TipoEquipamentoController.delete)

//Imagem
routes.post('/api/upload/', upload.single('foto'), uploadImagem);

// Sala

routes.post("/api/tipoSala/", TipoSalaController.create)
routes.get("/api/tipoSala/", TipoSalaController.getAllTipoSala)
routes.get("/api/tipoSala/:id", TipoSalaController.getTipoSalaByID)
routes.put("/api/tipoSala/:id", TipoSalaController.updateTipoSala)
routes.delete("/api/tipoSala/:id", TipoSalaController.delete)

// TipoEquipamento
routes.post("/api/tipoEquipamento/", TipoEquipamentoController.create)
routes.get("/api/tipoEquipamento/", TipoEquipamentoController.getAllTipoEquipamento)
routes.get("/api/tipoEquipamento/:id", TipoEquipamentoController.getTipoEquipamentoByID)
routes.put("/api/tipoEquipamento/:id", TipoEquipamentoController.updateTipoEquipamento)
routes.delete("/api/tipoEquipamento/:id", TipoEquipamentoController.delete)

//Imagem
routes.post('/api/upload/', upload.single('foto'), uploadImagem);

// Sala

routes.post("/api/sala/", SalaController.create)

// TipoFuncionario

routes.post("/api/tipoFuncionario", TipoFuncionarioController.create)


export { routes as default };