import axios from "axios";
let host='https://localhost:4430/';

export const getAllSkills = async () => {
    let data = await axios.get(`${host}api/Skills`);
    return data
}
