import React from "react";
import '../jobdescription/jobdescription.scss';
import RRDetails from "../../components/rrdetails/rrdetails";
import JDDetails from "../../components/jddetsails/jddetails";
import Header from "../../components/header/header";
import { useParams } from "react-router";
import { getJobsById } from "../../services/jobservice";

const JobDescription = () => {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = React.useState([]);
    const getJobDetails = () => {
        getJobsById(id)
            .then((res) => {
                setJobDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        getJobDetails()
    }, [])

    return (
        <div className="container">
            <Header />
            <RRDetails jobDetails={jobDetails} />
            <JDDetails jobDetails={jobDetails} />
        </div>
    )
}
export default JobDescription;