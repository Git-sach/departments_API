import express, { Request, Response } from "express";
import { DepartmentController } from "./controllers/departments";
import { PORT } from "./environement";
const cors = require("cors");

const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

const departmentController = new DepartmentController();
app.get("/departments", departmentController.departmentsList);

// faire avec un query param plutot
app.get("/departments/:name", departmentController.departmentsList);

app.get("*", (req: Request, res: Response) => {
  res.json({ test: "ok" });
});

app.listen(PORT);

// pour la mise en production, penser a faire npm install --production pour ne pas installer toutes les dépendances inutiles
// il faudra d'ailleur pousser sur le VPS que le index.js
