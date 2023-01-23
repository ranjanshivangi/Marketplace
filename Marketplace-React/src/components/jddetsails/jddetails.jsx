import React from "react";
import './jddetails.scss'
import jd from '../data/jd.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";

const JDDetails = () => {
    const data = useLocation().state;

    return (
        <Card className="jd">
            <CardContent>
                <Typography variant="h5" component="div">
                    About the job
                </Typography>
                <h5>WHO ARE WE</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {data.about}
                </Typography>
                <h5>JOB SUMMARY</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {data.jobSummary}
                </Typography>
                <h5>ROLES AND RESPONSIBILITIES</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {data.rolesandResponsiblities}
                </Typography>
                <h5>MUST HAVE SKILLS</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {data.mustHaveSkills}
                </Typography>
                <h5>GOOD TO HAVE SKILLS</h5>
                <Typography color="text.secondary" variant="p" className="text">
                    {data.nicetohaveSkills}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default JDDetails;