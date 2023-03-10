import axios from "axios";
let host='https://localhost:4430/';

export const getAllCertificate = async () => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Certifications`);
    return data
}
export const getEmployeeCertificate = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/EmployeeCertifications/${id}`);
    return data
}