import axios from "axios";
let host='https://localhost:4430/';

export const getAllRRs = async () => {
    let data = await axios.get(`${host}api/Rrs`);
    return data
}