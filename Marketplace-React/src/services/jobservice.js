import axios from "axios";

export const getAllJobs = async () => {
    let data = await axios.get('https://localhost:44391/api/Job');
    return data
}
export const getJobsById = async (id) => {
    let data = await axios.get(`https://localhost:44391/api/Job/${id}`);
    return data
}