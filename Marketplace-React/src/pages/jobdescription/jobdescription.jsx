import React from "react";
import '../jobdescription/jobdescription.scss';
import RRDetails from "../../components/rrdetails/rrdetails";
import JDDetails from "../../components/jddetsails/jddetails";
import Header from "../../components/header/header";

const JobDescription = () => {
    return (
        <div className="container">
            <Header />
            <RRDetails />
            <JDDetails />
        </div>
    )
}
export default JobDescription;