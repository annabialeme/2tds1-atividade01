import { Router } from "express"
const routes = Router()

import planetasRoutes from "./planetas.routes.js";

routes.get("/", (req, res) => {
    return res.status (200).send({ message: "Vaiii Sao Pauloooooo"})
}) 

routes.use ("/planetas", planetasRoutes)
export default routes