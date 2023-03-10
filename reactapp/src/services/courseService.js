import axios from "axios";


export const getAllCourses = async () => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Courses`);
    return data
}
export const getEmployeeCourses = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployeeCourses/${id}`);
    return data
}

