import express from "express";
import EmpresaController from "../controllers/empresaController.js";

const router = express.Router();

router
    .get("/empresas", EmpresaController.listarEmpresas)

    
export default router;