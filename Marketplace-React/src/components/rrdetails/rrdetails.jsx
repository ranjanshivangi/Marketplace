import React from "react";
import './rrdetails.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined'
import QuizIcon from '@mui/icons-material/Quiz';

const RRDetails = ({ jobDetails }) => {
    let statusValue;
    const status = (value) => {
        switch (value) {
            case 0: return 'CLOSED';
            case 1: return 'OPEN';
            case 2: return 'ON HOLD';
            default: return 'UNKNOWN';
        }
    }
    let interviewValue;
    const clientInterview = (value) => {
        switch (value) {
            case true: return 'Yes';
            case false: return 'No';
            default: return 'UNKNOWN';
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
                        <BusinessCenterIcon style={{ color: 'gray' }} />
                        {jobDetails.rrs?.map((rr) =>
                            <div className="text2">{rr.rrnumber}, </div>
                        )}
                    </div>
                    <div className="rrfields">
                        <CalendarMonthIcon style={{ color: 'gray' }} />
                        {jobDetails.rrs?.map((rr) =>
                            <div className="text2">{rr.startDate}, </div>
                        )}
                    </div>
                    <div className="rrfields">
                        <PeopleIcon style={{ color: 'gray' }} />
                        {jobDetails.rrs?.map((rr) =>
                            <div className="text2">{rr.bu}, </div>
                        )}
                    </div>
                    <div className="rrfields">
                        <BusinessCenterIcon style={{ color: 'gray' }} />
                        <div className="text2">Exp: {jobDetails.experience}+</div>
                    </div>
                    <div className="rrfields">
                        <PeopleIcon style={{ color: 'gray' }} />
                        {jobDetails.rrs?.map((rr) =>
                            <div className="text2">{rr.proficiency}, </div>
                        )}
                    </div>
                    <div className="rrfields">
                        <QuizIcon style={{ color: 'gray' }} />
                        <div className="text2">Client Interview Required?</div>
                        {jobDetails.rrs?.map((rr) => {
                            interviewValue = clientInterview(rr.clientInterview);
                            return <div className="text2">{interviewValue}, </div>
                        }
                        )}
                    </div>
                    <div className="rrfields">
                        <TrackChangesOutlinedIcon style={{ color: 'green' }} />
                        {jobDetails.rrs?.map((rr) => {
                            statusValue = status(rr.status);
                            return <div className="text2">{statusValue}, </div>
                        })}
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