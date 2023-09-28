import {Router} from "express";
import AutosManager from "../dao/DB/AutosManager.js"

const router = Router();
const autosManager = new AutosManager()

router.get("/verAutos", async (req, res) => {

    const autos = await autosManager.getAll();
    res.render("autos", { autos })
})

export default router;