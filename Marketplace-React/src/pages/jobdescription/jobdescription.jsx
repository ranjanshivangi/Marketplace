import React from "react";
import '../jobdescription/jobdescription.scss';
import RRDetails from "../../components/rrdetails/rrdetails";
import JDDetails from "../../components/jddetsails/jddetails";


const JobDescription = () => {
return (
    <div className="container">    
    <RRDetails/>
    <JDDetails/>
    </div>
    
)
}
export default JobDescription;