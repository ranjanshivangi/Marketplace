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
        <Grid container style={{ height: 'auto' }}>
            <Grid container style={{ borderBlockEnd: '3px solid #0FE4BD' }}>
                <Grid item xs={12} sm={6} md={3} style={{ height: '35vh' }}>
                    <div className="Profile">
                        <img className="prpfilrPic" src={require('../../resources/profilePic.jfif')} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ height: 'auto' }}>
                    <div className="Name">
                        <p className='name-header' style={{ fontSize: '36px' }}>{profilejson.Name}</p>
                        <h2 className="des">{profilejson.Desigation} | {profilejson.EmployID}</h2>
                        <div className="para-containter">
                            <div className="para"><h3>Status:</h3> <p className="p" >{profilejson.Status}</p></div>
                            <div className="para"><h3>Manager:</h3><p className="p" > {profilejson.CurrentManager}</p></div>
                            <div className="para"><h3>Project:</h3><p className="p" > {profilejson.CurrentProject}</p></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }}>
                    <div className="contact" >
                        <img className="e-logo" src={require('../../resources/emlogo.jfif')} />
                        <div style={{ marginTop: '5%' }}>
                            <div className="contact-icon-con"><div className="contact-icon"><EmailIcon /></div>
                                <div className="p">Nagashree.Mahendrakar@emids.com</div></div>
                            <div className="contact-icon-con"><div className="contact-icon"><CallIcon /></div> <div className="p">8956214783</div></div>
                            <div className="contact-icon-con"><div className="contact-icon"><LocationOnIcon /></div> <div className="p">Durgapur, West Bengal, India</div></div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto', marginLeft: '2%', marginTop: '1%' }}>
                <div className="tittle">About</div>
                <div className="about" style={{ marginLeft: '1%' }}>{profilejson.AboutMe}</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto', marginLeft: '1%', marginTop: '1%' }}>
                <div className="tittle">Skills</div>
                <div className="about">
                    <List dense={true} disableGutters={true} disablePadding={true}>
                        {profilejson.Skills.map((skill) => (
                            <ListItem secondaryAction={<Rating name="read-only" size="small" value={skill.Proficiency} readOnly max={4} />}>
                                <ListItemText disableTypography primary={skill.SkillName} secondary={<span className="skilldetail">{` (${skill.Experience} yrs, ${skill.LastUsed})`}</span>} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto', marginLeft: '1%', marginTop: '1%' }}>
                <div className="tittle">Courses</div>
                <div className="about">
                    <List style={{ fontSize: '12px' }} dense={true} disableGutters={true} disablePadding={true}>
                        {profilejson.Courses.map((course, index) => (<><ListItemButton onClick={() => setOpenForCourse(openForCourse === index ? -1 : index)}>
                            <ListItemText primary={course.Name} />{openForCourse === index ? <ExpandLess /> : <ExpandMore />}</ListItemButton><Collapse in={openForCourse === index} timeout="auto" unmountOnExit><List component="div" disablePadding> <ListItemText sx={{ pl: 4 }} secondary={`- ${course.Type}`} /> <ListItemText sx={{ pl: 4 }} secondary={`- ${course.Date}`} /> <ListItemText sx={{ pl: 4 }} secondary={`- from ${course.From}`} /></List>
                            </Collapse></>))}
                    </List>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={2} style={{ height: 'auto', marginLeft: '1%', marginTop: '1%' }}>
                <div className="tittle">Certificates</div>
                <div className="about">
                    <List dense={true} disableGutters disablePadding>{profilejson.Certification.map((certificate, index) => (<>
                        <ListItemButton onClick={() => setOpenForCertificate(openForCertificate === index ? -1 : index)}>
                            <ListItemText primary={certificate.Name} />{openForCertificate === index ? <ExpandLess /> : <ExpandMore />}</ListItemButton><Collapse in={openForCertificate === index} timeout="auto" unmountOnExit> <List component="div" disablePadding> <ListItemText sx={{ pl: 4 }} secondary={`- ${certificate.Type}`} /> <ListItemText sx={{ pl: 4 }} secondary={`- ${certificate.Date}`} /> <ListItemText sx={{ pl: 4 }} secondary={`- from ${certificate.From}`} />  </List>
                        </Collapse> </>))}
                    </List>
                </div>
            </Grid>

            <Grid item xs={12} style={{ height: 'auto', marginLeft: '1.5%', marginTop: '2%' }} flexDirection="row">
                <div className="tittle">Experience</div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ height: 'auto', marginLeft: '1.5%' }}>
                    <Experience />
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{ height: 'auto'}}>
                    <Experience />
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }}>
                    <Experience />
                </Grid>
        

        </Grid>
    )
}
export default Profile