import express from "express";
import TipoSalaController from "../controller/TipoSalaController.js"
import SalaController from "../controller/SalaController.js";

const routes = express.Router();

// TipoSala

routes.post("/api/tipoSala/", TipoSalaController.create)

// Sala

routes.post("/api/sala/", SalaController.create)

export { routes as default };