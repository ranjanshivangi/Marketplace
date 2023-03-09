import React from "react";
import './rrdetails.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarsIcon from '@mui/icons-material/Stars';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined'
import QuizIcon from '@mui/icons-material/Quiz';

const RRDetails = ({ jobDetails }) => {

    const rrs = jobDetails.rrs;
    const rrsLength = rrs?.length;

    const rrsSortedDates = jobDetails.rrs?.map((rr) => new Date(rr.startDate).toLocaleDateString()).sort((a, b) => (new Date(a).getTime() - new Date(b).getTime()));
    const earliestStartDate = rrsSortedDates?.[0];

    let interviewValues = [];
    jobDetails.rrs?.map(rr => interviewValues.push(rr.clientInterview));
    interviewValues = [...new Set(interviewValues)];

    let statusValues = [];
    jobDetails.rrs?.map(rr => statusValues.push(rr.status));
    statusValues = [...new Set(statusValues)];

    const status = (value) => {
        switch (value) {
            case 0: return 'CLOSED';
            case 1: return 'OPEN';
            case 2: return 'ON HOLD';
        }

    }
    const clientInterview = (value) => {
        switch (value) {
            case true: return 'Yes';
            case false: return 'No';
        }
    }
    return (
        <Card className="rr">
            <CardContent>
                <Typography variant="h5" component="div">
                    {jobDetails.jobTitle}
                </Typography>
                <Typography className="rrfieldsbox">
                    <div className="rrfields">
                        <BusinessCenterIcon htmlColor="gray" />
                        {
                            jobDetails.rrs?.slice(0, 5).map((rr) => {
                                return (<div className="text2">{rr.rrnumber}, </div>
                                )
                            })
                        }
                        {rrsLength > 5 ? <div className="text2"> + {rrsLength - 5} more</div> : null}
                    </div>
                    <div className="rrfields">
                        <CalendarMonthIcon htmlColor="gray" />
                        <div className="text2">{earliestStartDate}</div>
                    </div>
                    <div className="rrfields">
                        <StarsIcon htmlColor="gray" />
                        <div className="text2">Exp: {jobDetails.experience}+</div>
                    </div>
                    <div className="rrfields">
                        <QuizIcon htmlColor="gray" />
                        <div className="text2">Client Interview Required? &nbsp;
                            {clientInterview(interviewValues?.[0])}
                        </div>
                    </div>
                    <div className="rrfields">
                        <TrackChangesOutlinedIcon htmlColor="green" />
                        <div className="text2"> {status(statusValues?.[0])}
                        </div>
                    </div>
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">Apply</Button>
                <Button variant="outlined" size="small">Save</Button>
            </CardActions>
        </Card>
    )
}
export default RRDetails;