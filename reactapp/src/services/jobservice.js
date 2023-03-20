import axios from "axios";
import { JOBS_API } from "../config";
export const getAllJobs = async () => {
    let data = await axios.get(`${JOBS_API}`);
    return data
}
export const getJobsById = async (id) => {
    let data = await axios.get(`${JOBS_API}/${id}`);
    return data
}