import axios from "axios";
let host='https://localhost:7239/';

export const getAllSkills = async () => {
    let data = await axios.get(`${host}api/Skills`);
    return data
}
