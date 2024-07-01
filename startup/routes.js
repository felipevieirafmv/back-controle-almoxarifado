import express from "express";
import TipoSalaController from "../controller/TipoSalaController.js"

const routes = express.Router();

// TipoSala

routes.post("/api/tipoSala/", TipoSalaController.create)

export { routes as default };