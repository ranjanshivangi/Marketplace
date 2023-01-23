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
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import { useLocation } from "react-router-dom";

const RRDetails = () => {
    const data = useLocation().state;
  
    return (
        <Card className="rr">
            <CardContent>
                <Typography variant="h5" component="div">
                    {data.JobTitle}
                </Typography>
                <Typography color="text.secondary" variant="p" className="text">
                Chargebee . Bangalore, India . 1 day ago . 12 applicants
                </Typography>
                <Typography className="rrfieldsbox">
                    <div className="rrfields">
                        <BusinessCenterIcon style={{ color: 'gray' }} />
                        <div className="text2">RR/1492/2022</div>
                    </div>
                    <div className="rrfields">
                        <CalendarMonthIcon style={{ color: 'gray' }}/>
                        <div className="text2">Product Engineering</div>
                    </div>
                    <div className="rrfields">
                        <PeopleIcon style={{ color: 'gray' }}/>
                        <div className="text2">Payer</div>
                    </div>
                    <div className="rrfields">
                        <BusinessCenterIcon style={{ color: 'gray' }}/>
                        <div className="text2">Exp: 4+</div>
                    </div>
                    <div className="rrfields">
                        <PeopleIcon style={{ color: 'gray' }}/>
                        <div className="text2">26-Sept-2022</div>
                    </div>
                    <div className="rrfields">
                        <LightModeOutlinedIcon style={{ color: 'gray' }} />
                        <div className="text2">Client interview? True</div>
                    </div>
                    <div className="rrfields">
                        <TrackChangesOutlinedIcon style={{ color: 'gray' }} />
                        <div className="text2">OPEN</div>
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