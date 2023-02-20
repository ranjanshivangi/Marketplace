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
import { getEmployeeProfile, getEmployeeSkills, getEmployeeCertificates, getEmployeeCourses, getEmployeeHistory } from "../../services/employeeservice";
import { useParams } from "react-router";

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = React.useState([]);
    const [skills, setSkills] = React.useState([]);
    const [courses, setCourses] = React.useState([]);
    const [certificates, setCertificates] = React.useState([]);
    const [history, setHistory] = React.useState([]);

    React.useEffect(() => {
        getProfile();
        getSkills();
        getCourses();
        getCertificates();
        experience();
    }, [])

    const getProfile = () => {
        getEmployeeProfile(id)
            .then((res) => {
                console.log(res.data);
                setProfile(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getSkills = () => {
        getEmployeeSkills(id)
            .then((res) => {
                console.log(res.data);
                setSkills(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getCertificates = () => {
        getEmployeeCertificates(id)
            .then((res) => {
                console.log(res.data);
                setCertificates(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getCourses = () => {
        getEmployeeCourses(id)
            .then((res) => {
                console.log(res.data);
                setCourses(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const experience = () => {
        getEmployeeHistory(id)
            .then((res) => {
                setHistory(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [openForCourse, setOpenForCorse] = React.useState([]);
    const [openForCertificate, setOpenForCertificate] = React.useState([]);
    const handleCourse = (currentIndex) => {
        if (openForCourse.includes(currentIndex)) {
            const newOpen = openForCourse.filter((element) => {
                return element !== currentIndex;
            });
            setOpenForCorse(newOpen);
        } else {
            const newOpen = [...openForCourse];
            newOpen.push(currentIndex);
            setOpenForCorse(newOpen);
        }

    };
    const handleCertificate = (currentIndex) => {
        if (openForCertificate.includes(currentIndex)) {
            const newOpen = openForCertificate.filter((element) => {
                return element !== currentIndex;
            });
            setOpenForCertificate(newOpen);
        } else {
            const newOpen = [...openForCertificate];
            newOpen.push(currentIndex);
            setOpenForCertificate(newOpen);
        }

    };

    const uniqueCompanies = history.reduce((acc, cur) => {
        if (!acc.includes(cur.companyName)) {
            acc.push(cur.companyName);
        }
        return acc;
    }, []);

    let value;
    const ratings = (skills) => {
        if (skills.proficiency == "Beginner") {
            return 1;
        }
        else if (skills.proficiency == "Intermediate") {
            return 2;
        }
        else if (skills.proficiency == "Advance") {
            return 3;
        }
        else if (skills.proficiency == "Expert") {
            return 4;
        }
    }

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
                        <div className='name-header'>{profile.name
                        }</div>
                        <div className="des">{profile.designation} | {profilejson.EmployID}</div>
                        <div className="para-containter">
                            <div className="para"><span className="p1" >Status:</span> <span className="p2" >{profile.status}</span></div>
                            <div className="para"><span className="p1" >Manager:</span><span className="p2"> {profile.currentManager
                            }</span></div>
                            <div className="para"><span className="p1" >Project:</span><span className="p2" > {profile.currentProject}</span></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }}>
                    <div className="contact" >
                        <img className="e-logo" src={require('../../resources/emlogo.jfif')} />
                        <div className="icon-container">
                            <div className="icons">
                                <EmailIcon />
                                <span className="p2">{profile.emailId
                                }</span>
                            </div>
                            <div className="icons">
                                <CallIcon />
                                <span className="p2">{profile.phoneNumber

                                }</span>
                            </div>
                            <div className="icons">
                                <LocationOnIcon />
                                <span className="p2">{profile.location
                                }</span>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">About</div>
                <div className="about">{profile.about}</div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Skills</div>

                <List dense={true} disablePadding={true}>
                    {skills.map((skill) => (
                        value = ratings(skill),
                        <ListItem secondaryAction={
                            <Rating name="read-only" size="small" value={value
                            } readOnly max={4} />}>
                            <ListItemText disableTypography primary={skill.skillName} secondary={<span className="skilldetail">{` (${skill.experience
                                } yrs, ${skill.lastUsed
                                })`}</span>} />
                        </ListItem>
                    ))}
                </List>

            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Courses</div>

                <List style={{ fontSize: '12px' }} dense={true} disableGutters={true} disablePadding={true} >
                    {courses.map((course, index) => (<><ListItemButton onClick={() => handleCourse(index)}>
                        <ListItemText primary={course.courseName} />{openForCourse.includes(index) ? <ExpandLess /> : <ExpandMore />}</ListItemButton><Collapse in={openForCourse.includes(index)} timeout="auto" unmountOnExit><List component="div" disablePadding > <ListItemText sx={{ pl: 4 }} secondary={`- ${course.courseType
                            }`} /> <ListItemText sx={{ pl: 4 }} secondary={`- ${course.courseCompletionDate
                                }`} /> <ListItemText sx={{ pl: 4 }} secondary={`- from ${course.courseFrom
                                    }`} /></List>
                        </Collapse></>))}
                </List>

            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Certificates</div>
                <List dense={true} disableGutters disablePadding>
                    {certificates.map((certificate, index) => (<>
                        <ListItemButton onClick={() => handleCertificate(index)}>
                            <ListItemText primary={certificate.certificationsName
                            } />
                            {openForCertificate.includes(index) ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openForCertificate.includes(index)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemText sx={{ pl: 4 }} secondary={`- ${certificate.certificationsType
                                    }`} />
                                <ListItemText sx={{ pl: 4 }} secondary={`- ${certificate.certificationsCompletionDate}`} />
                                <ListItemText sx={{ pl: 4 }} secondary={`- from ${certificate.certificationsFrom
                                    }`} />
                            </List>
                        </Collapse> </>))}
                </List>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} >
                    <div className="tittle">Experience</div>
                </Grid>
                {uniqueCompanies.map((company) => {
                    const companyData = history.filter(item => item.companyName === company);
                    return <>
                        <Grid item xs={12} sm={6} md={4} style={{ height: 'auto' }} padding={1}>
                            <Experience companyName={company} companyData={companyData} />
                        </Grid>
                    </>
                })}
            </Grid>
        </Grid >
    )
}
export default Profile