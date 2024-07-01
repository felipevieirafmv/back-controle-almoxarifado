import express from "express";
import TipoSalaController from "../controller/TipoSalaController.js"
import SalaController from "../controller/SalaController.js";
import TipoFuncionarioController from "../controller/TipoFuncionarioController.js";

const routes = express.Router();

// TipoSala

routes.post("/api/tipoSala/", TipoSalaController.create)

// Sala

routes.post("/api/sala/", SalaController.create)

// TipoFuncionario

routes.post("/api/tipoFuncionario", TipoFuncionarioController.create)


export { routes as default };