import axios from "axios";
import { EMPLOYEE_API } from "../config"; 

export const getEmployee=async()=>{
    let data=await axios.get(`${EMPLOYEE_API}`);
    return data
}

export const getEmployeeProfile = async (id) => {
    let data = await axios.get(`${EMPLOYEE_API}/${id}`);
    return data
}




export const getEmployeeHistory = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployementHistories/${id}`);
    return data
}
