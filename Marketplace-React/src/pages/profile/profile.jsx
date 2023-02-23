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
import EditIcon from '@mui/icons-material/Edit';
import Experience from "../../components/experience/experience";
import { getEmployeeProfile, getEmployeeSkills, getEmployeeCertificates, getEmployeeCourses, getEmployeeHistory } from "../../services/employeeservice";
import { useParams } from "react-router";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';

import AddSkills from "../../components/add/addSkill";
import AddCourses from "../../components/add/addCourse";
import AddCertificate from "../../components/add/addCertificate";

const Profile = () => {
    const { id } = useParams();
    const empProfileImgPath = `https://arci.emids.com/Documents/Photos/${id}.jpeg`;
    const [profile, setProfile] = React.useState([]);
    const [skills, setSkills] = React.useState([]);
    const [courses, setCourses] = React.useState([]);
    const [certificates, setCertificates] = React.useState([]);
    const [history, setHistory] = React.useState([]);
    const [openSkill, setOpenSkill] = React.useState(false);
    const [openCourse, setOpenCourse] = React.useState(false);
    const [openCertificate, setOpenCertificate] = React.useState(false);

    React.useEffect(() => {
        getProfile();
        getSkills();
        getCourses();
        getCertificates();
        experience();
    }, [])

    const skillClickOpen = () => {
        setOpenSkill(true);
    };
    const skillClose = () => {
        setOpenSkill(false);
    };
    const courseClickOpen = () => {
        setOpenCourse(true);
    };
    const courseClose = () => {
        setOpenCourse(false);
    };
    const certificateClickOpen = () => {
        setOpenCertificate(true);
    };
    const certificateClose = () => {
        setOpenCertificate(false);
    };
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    }

    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    const getProfile = () => {
        getEmployeeProfile(id)
            .then((res) => {
                setProfile(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getSkills = () => {
        getEmployeeSkills(id)
            .then((res) => {
                setSkills(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getCertificates = () => {
        getEmployeeCertificates(id)
            .then((res) => {
                setCertificates(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getCourses = () => {
        getEmployeeCourses(id)
            .then((res) => {
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
        if (skills.proficiency === "Beginner") {
            return 1;
        }
        else if (skills.proficiency === "Intermediate") {
            return 2;
        }
        else if (skills.proficiency === "Advance") {
            return 3;
        }
        else if (skills.proficiency === "Expert") {
            return 4;
        }
    }

    return (
        <Grid container style={{ height: 'auto', padding: '1rem' }} rowGap={2}>
            <Grid container style={{ borderBlockEnd: '5px solid #0FE4BD' }}>
                <Grid item xs={12} sm={6} md={3} style={{ height: '30vh' }}>
                    <div className="profile">
                        <Avatar variant="square" className="prpfilrPic" src={empProfileImgPath} alt={profile.name} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ height: 'auto' }}>
                    <div className="Name">
                        <div className='name-header'>{profile.name
                        }</div>
                        <div className="des">{profile.designation} | {profilejson.EmployID}</div>
                        <div className="para-containter para-containte">
                            <div className="para"><span className="p1" >Status:</span> <span className="p2" >{profile.status}</span></div>
                            <div className="para"><span className="p1" >Manager:</span><span className="p2"> {profile.currentManager
                            }</span></div>
                            <div className="para"><span className="p1" >Project:</span><span className="p2" > {profile.currentProject}</span></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }}>
                    <img className="e-logo emids-icon" src={require('../../resources/emlogo.jfif')} />

                    <div className="contact" >

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
                <div className="tittle">Skills
                    <div className="edit-add-icon-wrap">
                        <AddIcon className="edit-add-icon" onClick={skillClickOpen} ></AddIcon>
                        <EditIcon className="edit-add-icon" />
                    </div>
                </div>

                <List dense={true} disablePadding={true}>
                    {skills.map((skill) => (
                        value = ratings(skill),
                        <ListItem secondaryAction={
                            <Rating name="read-only" size="small" value={value
                            } readOnly max={4} />}>
                            <ListItemText primary={skill.skillName} secondary={<span className="skilldetail">{` (${skill.experience
                                } yrs, ${skill.lastUsed
                                })`}</span>} />
                        </ListItem>
                    ))}
                </List>

            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                <div className="tittle">Courses
                    <div className="edit-add-icon-wrap">
                        <AddIcon className="edit-add-icon" onClick={courseClickOpen}></AddIcon>
                        <EditIcon className="edit-add-icon" />
                    </div>
                </div>

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

                <div className="tittle">Certificates
                    <div className="edit-add-icon-wrap">
                        <AddIcon className="edit-add-icon" onClick={certificateClickOpen}></AddIcon>
                        <EditIcon className="edit-add-icon" />
                    </div>
                </div>
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
                    const companyData = history.filter(item => item.companyName === company).sort((a, b) => a.endDate - b.endDate);
                    return <>
                        <Grid item xs={12} sm={6} md={4} style={{ height: 'auto' }} padding={1}>
                            <Experience companyName={company} companyData={companyData} />
                        </Grid>
                    </>
                })}
            </Grid>
            <div>
                <BootstrapDialog
                    onClose={skillClose}
                    aria-labelledby="customized-dialog-title"
                    open={openSkill}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={skillClose}> Add Skills </BootstrapDialogTitle>
                    <DialogContent dividers className='dialogContent'>
                        <AddSkills></AddSkills>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" href="#contained-buttons" onClick={skillClose}>
                            Save changes
                        </Button>
                    </DialogActions>                  
                </BootstrapDialog>
                <BootstrapDialog
                    onClose={courseClose}
                    aria-labelledby="customized-dialog-title"
                    open={openCourse}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={courseClose}> Add Couress </BootstrapDialogTitle>
                    <DialogContent dividers className='dialogContent'>
                        <AddCourses></AddCourses>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" href="#contained-buttons" onClick={courseClose}>
                            Save changes
                        </Button>
                    </DialogActions>                  
                </BootstrapDialog>

                <BootstrapDialog
                    onClose={certificateClose}
                    aria-labelledby="customized-dialog-title"
                    open={openCertificate}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={certificateClose}> Add Certificates </BootstrapDialogTitle>
                    <DialogContent dividers className='dialogContent'>
                        <AddCertificate></AddCertificate>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" href="#contained-buttons" onClick={certificateClose}>
                            Save changes
                        </Button>
                    </DialogActions>                  
                </BootstrapDialog>
                
            </div>
        </Grid >

    )
}
export default Profile