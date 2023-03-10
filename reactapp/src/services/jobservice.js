import axios from "axios";

let host='https://localhost:4430/';

export const getAllJobs = async () => {
    let data = await axios.get(`${host}api/Jobs`);
    return data
}
export const getJobsById = async (id) => {
    let data = await axios.get(`${host}api/Jobs/${id}`);
    return data
}