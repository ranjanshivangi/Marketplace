import axios from "axios";
import { CERTIFICATION_API,EMPLOYEE_CERTIFICATION_API } from "../config";

export const getAllCertificate = async () => {
    let data = await axios.get(`${CERTIFICATION_API}`);
    return data
}



export const getEmployeeCertificates = async (id) => {
    let data = await axios.get(`${EMPLOYEE_CERTIFICATION_API}/${id}`);
    return data
}
