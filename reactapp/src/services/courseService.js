import axios from "axios";
import { COURSES_API,EMPLOYEE_COURSES_API } from "../config";

export const getAllCourses = async () => {
    let data = await axios.get(`${COURSES_API}`);
    return data
}
export const getEmployeeCourses = async (id) => {
    let data = await axios.get(`${EMPLOYEE_COURSES_API}/${id}`);
    return data
}

