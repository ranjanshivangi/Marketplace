import axios from "axios";
let host='https://localhost:7239/';

export const getAllRRs = async () => {
    let data = await axios.get(`${host}api/Rrs`);
    return data
}