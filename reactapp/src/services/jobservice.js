import axios from "axios";

export const getAllJobs = async () => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Jobs`);
    return data
}
export const getJobsById = async (id) => {
    let data = await axios.get(`${process.env.REACT_APP_HOST}api/Jobs/${id}`);
    return data
}