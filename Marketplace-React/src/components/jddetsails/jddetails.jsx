import React from "react";
import './jddetails.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const JDDetails = ({ jobDetails }) => {
    return (
        <Card className="jd">
            <CardContent>
                <Typography variant="h5" component="div">
                    About the job
                </Typography>
                <h5>WHO ARE WE</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {jobDetails.about}
                </Typography>
                <h5>JOB SUMMARY</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {jobDetails.jobSummary}
                </Typography>
                <h5>ROLES AND RESPONSIBILITIES</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {jobDetails.rolesandResponsiblities}
                </Typography>
                <h5>MUST HAVE SKILLS</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {jobDetails.mustHaveSkills}
                </Typography>
                <h5>GOOD TO HAVE SKILLS</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {jobDetails.nicetohaveSkills}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default JDDetails;