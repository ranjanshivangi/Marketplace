import React from "react";
import './profile.scss';
import profilejson from './profile.json';
import { Grid } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Profile = () => {
    return (
        <Grid container style={{ border: '1px solid black', width: '100vw', height: 'auto' }}>
            <Grid item xs={12} sm={6} md={4} style={{ border: '1px solid black', width: '30vw', height: '30vh' }}> Profile Picture
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ border: '1px solid black', height: '30vh' }}>
                <div className="Name">
                    <h1>{profilejson.Name}</h1>
                    <h2>{profilejson.Desigation} | {profilejson.EmployID}</h2>
                    <p>Status: {profilejson.Status}</p>
                    <p>Manager: {profilejson.CurrentManager}</p>
                    <p>Project: {profilejson.CurrentProject}</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ border: '1px solid black', height: '30vh' }}> Contact
                <MailOutlineIcon />
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ border: '1px solid black', height: '30vh' }}> About
            </Grid>
            <Grid item xs={6} sm={3} md={2} style={{ border: '1px solid black', height: '30vh' }}> Skills
            </Grid>
            <Grid item xs={6} sm={3} md={2} style={{ border: '1px solid black', height: '30vh' }}> Courses
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ border: '1px solid black', height: '30vh' }}> Certificates
            </Grid>
            <Grid item xs={12} style={{ border: '1px solid black', width: '20vw', height: '30vh' }}> Experience
            </Grid>

        </Grid>
    )
}
export default Profile