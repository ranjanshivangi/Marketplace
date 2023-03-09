import axios from "axios";
let host='https://localhost:44391/';

export const getAllSkills = async () => {
    let data = await axios.get(`${host}api/Skills`);
    return data
}
