import axios from "axios";


export const getAllRRs = async () => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Rrs`);
    return data
}