import React from "react";
import './profile.scss';
import profilejson from './profile.json';
import { Grid } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import Experience from "../../components/experience/experience";

const Profile = () => {
    const [openForCourse, setOpenForCourse] = React.useState(-1);
    const [openForCertificate, setOpenForCertificate] = React.useState(-1);
    return (
        <Grid container style={{ height: 'auto', padding: '1rem' }} rowGap={2}>
            <Grid container style={{ borderBlockEnd: '5px solid #0FE4BD' }}>
                <Grid item xs={12} sm={6} md={3} style={{ height: '30vh' }}>
                    <div className="profile">
                        <img className="prpfilrPic" src={require('../../resources/profilePic.jfif')} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ height: 'auto' }}>
                    <div className="Name">
                        <div className='name-header'>{profilejson.Name}</div>
                        <div className="des">{profilejson.Desigation} | {profilejson.EmployID}</div>
                        <div className="para-containter">
                            <div className="para"><span className="p1" >Status:</span> <span className="p2" >{profilejson.Status}</span></div>
                            <div className="para"><span className="p1" >Manager:</span><span className="p2"> {profilejson.CurrentManager}</span></div>
                            <div className="para"><span className="p1" >Project:</span><span className="p2" > {profilejson.CurrentProject}</span></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }}>
                    <div className="contact" >
                        <img className="e-logo" src={require('../../resources/emlogo.jfif')} />
                        <div className="icon-container">
                            <div className="icons">
                                <EmailIcon />
                                <span className="p2">Nagashree.Mahendrakar@emids.com</span>
                            </div>
                            <div className="icons">
                                <CallIcon />
                                <span className="p2">8956214783</span>
                            </div>
                            <div className="icons">
                                <LocationOnIcon />
                                <span className="p2">Durgapur, West Bengal, India</span>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">About</div>
                <div className="about">{profilejson.AboutMe}</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Skills</div>

                <List dense={true} disablePadding={true}>
                    {profilejson.Skills.map((skill) => (
                        <ListItem secondaryAction={
                            <Rating name="read-only" size="small" value={skill.Proficiency} readOnly max={4} />}>
                            <ListItemText disableTypography primary={skill.SkillName} secondary={<span className="skilldetail">{` (${skill.Experience} yrs, ${skill.LastUsed})`}</span>} />
                        </ListItem>
                    ))}
                </List>

            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Courses</div>

                <List style={{ fontSize: '12px' }} dense={true} disableGutters={true} disablePadding={true} >
                    {profilejson.Courses.map((course, index) => (<><ListItemButton onClick={() => setOpenForCourse(openForCourse === index ? -1 : index)}>
                        <ListItemText primary={course.Name} />{openForCourse === index ? <ExpandLess /> : <ExpandMore />}</ListItemButton><Collapse in={openForCourse === index} timeout="auto" unmountOnExit><List component="div" disablePadding> <ListItemText sx={{ pl: 4 }} secondary={`- ${course.Type}`} /> <ListItemText sx={{ pl: 4 }} secondary={`- ${course.Date}`} /> <ListItemText sx={{ pl: 4 }} secondary={`- from ${course.From}`} /></List>
                        </Collapse></>))}
                </List>

            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Certificates</div>
                <List dense={true} disableGutters disablePadding>
                    {profilejson.Certification.map((certificate, index) => (<>
                        <ListItemButton onClick={() => setOpenForCertificate(openForCertificate === index ? -1 : index)}>
                            <ListItemText primary={certificate.Name} />
                            {openForCertificate === index ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openForCertificate === index} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemText sx={{ pl: 4 }} secondary={`- ${certificate.Type}`} />
                                <ListItemText sx={{ pl: 4 }} secondary={`- ${certificate.Date}`} />
                                <ListItemText sx={{ pl: 4 }} secondary={`- from ${certificate.From}`} />
                            </List>
                        </Collapse> </>))}
                </List>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} >
                    <div className="tittle">Experience</div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ height: 'auto' }} padding={1}>
                    <Experience />
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ height: 'auto' }} padding={1}>
                    <Experience />
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ height: 'auto' }} padding={1}>
                    <Experience />
                </Grid>
            </Grid>



        </Grid>
    )
}
export default Profile