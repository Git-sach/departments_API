import { Department } from "../database/model/department";

export class DepartmentModel {
    departmentListe(): Promise<any> {
        return Department.findAll();
    }
}

// export const departmentListe = () => {
//     return Department.findAll();
// };