import { Department } from "../database/model/department";
import { Region } from "../database/model/region";

export class DepartmentModel {
  async departmentListe(): Promise<Department[]> {
    const departmentsResponse = await Department.findAll({
      include: [
        {
          model: Region,
          attributes: { exclude: ["id"] },
        },
      ],
      raw: true,
      attributes: { exclude: ["regionId"] },
    });

    departmentsResponse.forEach((department: any) => {
      department["region"] = department["region.name"];
      delete department["region.name"];
    });

    return departmentsResponse;
  }
}
