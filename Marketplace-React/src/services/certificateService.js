import axios from "axios";
let host='https://localhost:7239/';

export const getAllCertificate = async () => {
    let data = await axios.get(`${host}api/Certifications`);
    return data
}