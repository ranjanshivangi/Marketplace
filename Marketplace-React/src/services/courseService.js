import axios from "axios";
let host='https://localhost:7239/';

export const getAllCourses = async () => {
    let data = await axios.get(`${host}api/Courses`);
    return data
}
export const getEmployeeCourses = async (id) => {
    let data = await axios.get(`${host}api/EmployeeCourses/${id}`);
    return data
}

