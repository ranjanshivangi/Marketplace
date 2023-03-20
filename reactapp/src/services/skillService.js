import axios from "axios";
import { SKILLS_API,EMPLOYEE_SKILLS_API} from "../config";

export const getAllSkills = async () => {
    let data = await axios.get(`${SKILLS_API}`);
    return data
}
export const getEmployeeSkills = async (id) => {
    let data = await axios.get(`${EMPLOYEE_SKILLS_API}/${id}`);
    return data
}