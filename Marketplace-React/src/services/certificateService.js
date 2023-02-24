import axios from "axios";
let host='https://localhost:44391/';

export const getAllCertificate = async () => {
    let data = await axios.get(`${host}api/Certifications`);
    return data
}