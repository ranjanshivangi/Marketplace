import React from "react";
import '../jobdescription/jobdescription.scss';
import RRDetails from "../../components/rrdetails/rrdetails";
import JDDetails from "../../components/jddetsails/jddetails";
import Header from "../../components/header/header";
import { useLocation } from "react-router";

const JobDescription = () => {
    const {jobDetails} = useLocation().state;
    return (
        <div className="container">
            <Header />
            <RRDetails jobDetails={jobDetails}/>
            <JDDetails jobDetails={jobDetails}/>
        </div>
    )
}
export default JobDescription;