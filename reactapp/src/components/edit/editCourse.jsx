import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react'
import './editCourse.scss'
import { getEmployeeCourses } from '../../services/employeeservice'
import { useParams } from "react-router";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import EditCourseDialog from './editCourseDialog';
import Header from '../header/header';


const EditCourse = () => {
    const [openEditCourse, setOpenEditCourse] = React.useState(false);
    const [courses, setCourses] = React.useState([]);
    const [selectedCourse, setSelectedCourse] = React.useState();
    const getcourses = () => {
        getEmployeeCourses(id).then((res) => {
            setCourses(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getcourses();
    }, [])
    const { id } = useParams();
    let navigate = useNavigate();
    const handleEditCourse = () => {
        navigate(`/profile/${id}`);
    }
    const handleEachCourseEdit = (courseName) => {
        setOpenEditCourse(true);
        setSelectedCourse(courseName);
    };
    const handleEachCourseEditClose = () => {
        setOpenEditCourse(false);
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

    return (
        <>
            <Header></Header>
            <div style={{ marginTop: '10%' }}>
                <div className='main-container'>
                    <div className='containers'>
                        <div className='back-course'>
                            <ArrowBackSharpIcon fontSize='large' className='back-icon' onClick={handleEditCourse} />
                            <h3 className='edit-course-header'>Courses</h3></div>
                        {
                            courses.map((Course) => {
                                return <>
                                    <div className='course-icon-wrap' >
                                        <p className='p-courses'>{Course.courseName}</p>
                                        <EditIcon onClick={() => handleEachCourseEdit(Course.courseName)} />
                                    </div>
                                </>
                            })
                        }
                        <div>

                        </div>
                    </div>
                    <div>
                        <BootstrapDialog
                            onClose={handleEachCourseEditClose}
                            aria-labelledby="customized-dialog-title"
                            open={openEditCourse}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleEachCourseEditClose}> Edit Course*</BootstrapDialogTitle>
                            <DialogContent dividers className='dialogContent4'>
                                <EditCourseDialog />
                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" href="#contained-buttons" onClick={handleEachCourseEditClose}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCourse