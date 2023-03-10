import axios from "axios";
//let host='https://localhost:4430/';

export const getAllSkills = async () => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Skills`);
    return data
}
