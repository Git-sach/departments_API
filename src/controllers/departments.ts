import { Request, Response, NextFunction } from "express";
import { DepartmentModel } from "../models/departments";


export class DepartmentController {

    private departmentModel: DepartmentModel;

    constructor() {
        this.departmentModel = new DepartmentModel();
    }

     departmentsList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const departments: any = await this.departmentModel.departmentListe();
            res.status(200).json(departments);
        } catch (e) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}