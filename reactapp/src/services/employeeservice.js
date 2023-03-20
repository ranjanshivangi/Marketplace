import axios from "axios";
import { EMPLOYEE_API ,EMPLOYEMENT_HISTORY_API} from "../config"; 

export const getEmployee=async()=>{
    let data=await axios.get(`${EMPLOYEE_API}`);
    return data
}

export const getEmployeeProfile = async (id) => {
    let data = await axios.get(`${EMPLOYEE_API}/${id}`);
    return data
}


export const getEmployeeHistory = async (id) => {
    let data = await axios.get(`${EMPLOYEMENT_HISTORY_API}/${id}`);
    return data
}
