import axios from "axios";
let host='https://localhost:4430/';

export const getAllCertificate = async () => {
    let data = await axios.get(`${host}api/Certifications`);
    return data
}
export const getEmployeeCertificate = async (id) => {
    let data = await axios.get(`${host}api/EmployeeCertifications/${id}`);
    return data
}