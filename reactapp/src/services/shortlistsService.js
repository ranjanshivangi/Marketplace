import axios from "axios";
import { SHORTLISTS_API } from "../config";

export const getShortlistsByManagerId = async (id) => {
    let data = await axios.get(`${SHORTLISTS_API}/${id}`);
    return data
}
export const deleteShortlistedEmployee = async (id) => {
    let data = await axios.delete(`${SHORTLISTS_API}/${id}`);
    return data
}

