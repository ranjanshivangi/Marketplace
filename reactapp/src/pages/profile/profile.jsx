import React from "react";
import './profile.scss';
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
import { getEmployeeProfile, getEmployeeHistory } from "../../services/employeeservice";
import { getEmployeeSkills } from "../../services/skillService";
import { getEmployeeCourses } from "../../services/courseService";
import { getEmployeeCertificates } from "../../services/certificateService";
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
import { useNavigate } from "react-router";
import AddSkills from "../../components/add/addSkill";
import AddCourses from "../../components/add/addCourse";
import AddCertificate from "../../components/add/addCertificate";
import AddExperience from "../../components/add/addExperiece";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import Shortlist from "../../components/shortlistemployee/Shortlist";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";

const Profile = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [profile, setProfile] = React.useState([]);
    const [skills, setSkills] = React.useState([]);
    const [courses, setCourses] = React.useState([]);
    const [certificates, setCertificates] = React.useState([]);
    const [history, setHistory] = React.useState([]);
    const [openSkill, setOpenSkill] = React.useState(false);
    const [openCourse, setOpenCourse] = React.useState(false);
    const [openCertificate, setOpenCertificate] = React.useState(false);
    const [openExperience, setOpenExperience] = React.useState(false);
    const [openshortList, setOpenShortList] = React.useState();
    const [openForCourse, setOpenForCorse] = React.useState([]);
    const [openForCertificate, setOpenForCertificate] = React.useState([]);
    const [errorList, setErrorList] = React.useState([]);


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
    const experienceClickOpen = () => {
        setOpenExperience(true);
    }
    const experienceClose = () => {
        setOpenExperience(false);
    }
    const shortListClose = () => {
        setOpenShortList(false);
    }
    const shortListOpen = () => {
        setOpenShortList(true);
    }
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
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);


            })
    }

    const getSkills = () => {
        getEmployeeSkills(id)
            .then((res) => {
                setSkills(res.data);
            })
            .catch((err) => {
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);

            })
    }
    const getCertificates = () => {
        getEmployeeCertificates(id)
            .then((res) => {
                
                setCertificates(res.data);
            })
            .catch((err) => {
                
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);

            })
    }
    const getCourses = () => {
        getEmployeeCourses(id)
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => {
                console.log(err);
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);
            })
    }
    const experience = () => {
        getEmployeeHistory(id)
            .then((res) => {
                const sortedHistory = res.data.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
                setHistory(sortedHistory);
            })
            .catch((err) => {
                console.log(err);
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);

            })
    }


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

    let value;
    const ratings = (skills) => {
        switch (skills) {
            case "Beginner": return 1;
            case "Intermediate": return 2;
            case "Advance": return 3;
            case "Expert": return 4;
        }

    }
    const status = (value) => {
        switch (value) {
            case 0: return "Unavailable";
            case 1: return "Available";
            case 2: return "Proposed";
        }

    }

    const handleEditSkill = () => {
        navigate(`/profile/skill/${id}`);
    }
    const handleEditCourse = () => {
        navigate(`/profile/course/${id}`);
    }
    const handleEditCertificate = () => {
        navigate(`/profile/certificate/${id}`);
    }

    const downloadPdfDocument = () => {
        const input = document.getElementById("pdf-container");
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "pt", "a1");
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`resume.pdf`);
            })
    }

    return (
        <>
            <Header />
            <div className="prf-container">
                {errorList.length > 0 ? <div className="banner">
                    <Banner errorList={errorList} />
                </div> : null}
                <Grid container style={{ height: 'auto', padding: '1rem' }} rowGap={2} id="pdf-container">

                    <Grid container style={{ borderBlockEnd: '5px solid #0FE4BD' }}>
                        <Grid item xs={12} sm={6} md={3} style={{ height: '30vh' }}>
                            <div className="profile">
                                <Avatar variant="square" className="prpfilrPic" src={`https://arci.emids.com/Documents/Photos/${id}.jpeg`} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} style={{ height: 'auto' }}>
                            <div className="Name">
                                <div className='name-header'>{profile.employeeName
                                }</div>
                                <div className="des">{profile.designation} | {profile.employeeId}</div>
                                <div className="para-containter para-containte">
                                    <div className="para"><span className="p1" >Status:</span> <span className="p2" >{status(profile.status)}</span></div>
                                    <div className="para"><span className="p1" >Manager:</span><span className="p2"> {profile.currentManager
                                    }</span></div>
                                    <div className="para"><span className="p1" >Project:</span><span className="p2" > {profile.currentProject}</span></div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }}>
                            {/* <img className="e-logo emids-icon" src={require('../../resources/emlogo.jfif')} /> */}
                            <div className="profile-action-icon-box">
                                <IconButton>
                                    <FileDownloadOutlinedIcon fontSize="large" color="action" onClick={downloadPdfDocument} />
                                </IconButton>
                                <IconButton>
                                    <AddCardIcon fontSize="large" color="action" onClick={shortListOpen} />
                                </IconButton>
                            </div>
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
                                <EditIcon className="edit-add-icon" onClick={handleEditSkill} />
                            </div>
                        </div>

                        <List dense={true} disablePadding={true}>
                            {skills.map((skill) => (
                                value = ratings(skill.proficiency),
                                <ListItem secondaryAction={
                                    <Rating name="read-only" size="small" value={value
                                    } readOnly max={4} />}>
                                    <ListItemText primary={skill.skillName} secondary={<span className="skilldetail">{` (${skill.experienceInMonths} months, ${new Date(skill.lastUsed).toLocaleDateString()
                                        })`}</span>} />
                                </ListItem>
                            ))}
                        </List>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>
                        <div className="tittle">Courses
                            <div className="edit-add-icon-wrap">
                                <AddIcon className="edit-add-icon" onClick={courseClickOpen}></AddIcon>
                                <EditIcon className="edit-add-icon" onClick={handleEditCourse} />
                            </div>
                        </div>

                        <List style={{ fontSize: '12px' }} dense={true} disableGutters={true} disablePadding={true} >
                            {courses.map((course, index) => (
                                <>
                                    <ListItemButton onClick={() => handleCourse(index)}>
                                        <ListItemText primary={course.isEmidsCourse === 1 ? `${course.courseName}` : `${course.nonEmidsCourseName}`} />
                                        {openForCourse.includes(index) ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={openForCourse.includes(index)} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding >
                                            {course.isEmidsCourse === 1 ? <>
                                                <ListItemText sx={{ pl: 4 }} secondary="Internal" />
                                                <ListItemText sx={{ pl: 4 }} secondary={new Date(course.courseCompletionDate).toLocaleDateString()} />
                                            </> : <>
                                                <ListItemText sx={{ pl: 4 }} secondary="External" />
                                                <ListItemText sx={{ pl: 4 }} secondary={new Date(course.courseCompletionDate).toLocaleDateString()} />
                                                <ListItemText sx={{ pl: 4 }} secondary={`from ${course.nonEmidsCoursePlatform}`} />
                                            </>}

                                        </List>
                                    </Collapse>
                                </>))}
                        </List>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ height: 'auto' }} padding={1}>

                        <div className="tittle">Certificates
                            <div className="edit-add-icon-wrap">
                                <AddIcon className="edit-add-icon" onClick={certificateClickOpen}></AddIcon>
                                <EditIcon className="edit-add-icon" onClick={handleEditCertificate} />
                            </div>
                        </div>
                        <List dense={true} disableGutters disablePadding>
                            {certificates.map((certificate, index) => (<>
                                <ListItemButton onClick={() => handleCertificate(index)}>
                                    <ListItemText primary={certificate.isStandardCertificate === 1 ? `${certificate.certificateName}` : `${certificate.nonStandardCertificateName}`} />
                                    {openForCertificate.includes(index) ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openForCertificate.includes(index)} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {certificate.isStandardCertificate === 1 ? <>
                                            <ListItemText sx={{ pl: 4 }} secondary="Internal" />
                                            <ListItemText sx={{ pl: 4 }} secondary={new Date(certificate.certificationsCompletionDate).toLocaleDateString()} />
                                            <ListItemText sx={{ pl: 4 }} secondary={`from ${certificate.standardIssuer}`} />
                                        </> : <>
                                            <ListItemText sx={{ pl: 4 }} secondary="External" />
                                            <ListItemText sx={{ pl: 4 }} secondary={new Date(certificate.certificationsCompletionDate).toLocaleDateString()} />
                                            <ListItemText sx={{ pl: 4 }} secondary={`from ${certificate.nonStandardIssuer}`} />
                                        </>}
                                    </List>
                                </Collapse> </>))}
                        </List>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} >
                            <div className="title">
                                <div className="add-icon-wrap">Experience </div>
                                <AddIcon className="add-icon" onClick={experienceClickOpen} ></AddIcon>
                            </div>

                        </Grid>
                        {history.map((company) => {                            
                            return <>
                                <Grid item xs={12} sm={6} md={4} style={{ height: 'auto' }} padding={1}>
                                    <Experience companyData={company} />
                                </Grid>
                            </>
                        })}
                    </Grid>
                    <div >
                        <BootstrapDialog
                            onClose={skillClose}
                            aria-labelledby="customized-dialog-title"
                            open={openSkill}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={skillClose}> Add Skills </BootstrapDialogTitle>
                            <DialogContent dividers className='dialogContent1'>
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
                            <DialogContent dividers className='dialogContent2'>
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
                            <DialogContent dividers className='dialogContent2'>
                                <AddCertificate></AddCertificate>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" href="#contained-buttons" onClick={certificateClose}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                        <BootstrapDialog
                            onClose={experienceClose}
                            aria-labelledby="customized-dialog-title2"
                            size="xxxl" style={{ maxWidth: '1200px' }}
                            open={openExperience}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={experienceClose}> Add Experience </BootstrapDialogTitle>
                            <DialogContent dividers className='dialogContent3'>
                                <AddExperience></AddExperience>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" href="#contained-buttons" onClick={experienceClose}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>


                        <BootstrapDialog
                            onClose={shortListClose}
                            aria-labelledby="customized-dialog-title2"
                            size="xxxl" style={{ maxWidth: '1200px' }}
                            open={openshortList}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={shortListClose}> ShortList </BootstrapDialogTitle>
                            <DialogContent dividers className='dialogContent1'>
                                <Shortlist></Shortlist>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" href="#contained-buttons" onClick={shortListClose}>
                                    ShortList
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </div>

                </Grid >
            </div>
        </>
    )
}

export default Profile