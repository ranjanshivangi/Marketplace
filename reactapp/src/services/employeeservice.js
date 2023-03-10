import axios from "axios";
import env from "react-dotenv";

let host='https://localhost:4430/';

export const getEmployee=async()=>{
    let data=await axios.get(`${host}api/Employees`);
    return data
}

export const getEmployeeProfile = async (id) => {
    let data = await axios.get(`${host}api/Employees/${id}`);
    return data
}

export const getEmployeeSkills = async (id) => {
    let data = await axios.get(`${host}api/EmployeeSkills/${id}`);
    return data
}

export const getEmployeeCourses = async (id) => {
    let data = await axios.get(`${host}api/EmployeeCourses/${id}`);
    return data
}

export const getEmployeeCertificates = async (id) => {
    let data = await axios.get(`${host}api/EmployeeCertifications/${id}`);
    return data
}

export const getEmployeeHistory = async (id) => {
    let data = await axios.get(`${host}api/EmployementHistories/${id}`);
    return data
}
