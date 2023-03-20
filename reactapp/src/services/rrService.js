import axios from "axios";
import { RRS_API } from "../config";

export const getAllRRs = async () => {
    let data = await axios.get(`${RRS_API}`);
    return data
}