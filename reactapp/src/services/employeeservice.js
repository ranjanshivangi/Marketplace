import axios from "axios";


export const getEmployee=async()=>{
    let data=await axios.get(`${process.env.REACT_APP_HOST}api/Employees`);
    return data
}

export const getEmployeeProfile = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Employees/${id}`);
    return data
}

export const getEmployeeSkills = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployeeSkills/${id}`);
    return data
}

export const getEmployeeCourses = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployeeCourses/${id}`);
    return data
}

export const getEmployeeCertificates = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployeeCertifications/${id}`);
    return data
}

export const getEmployeeHistory = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployementHistories/${id}`);
    return data
}
