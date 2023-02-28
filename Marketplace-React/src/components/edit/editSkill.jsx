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
import './editSkill.scss'
import { getEmployeeSkills } from '../../services/employeeservice'
import { useParams } from "react-router";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import EditSkillDialog from './editDialog';
   

const EditSkill = () => {
        const [openEditSkill, setOpenEditSkill] = React.useState(false);
        const [skills, setSkills] = React.useState([]);
        const [selectedSkill,setSelectedSkill]=React.useState();
         const getSkills = () => {
            getEmployeeSkills(id).then((res) =>
            {setSkills(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        useEffect(() => {
            getSkills();
        }, [])
        const { id } = useParams();
        let navigate = useNavigate();
        const handleEditSkill = () => {
            navigate(`/profile/${id}`);
        }
        const handleEachSkillEdit = (skillName) => {
            setOpenEditSkill(true);
            setSelectedSkill(skillName);
        };
        const handleEachSkillEditClose = () => {
            setOpenEditSkill(false);
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
            <div className='main-container'>
                <div className='containers'>
                    <div className='back-skill'>
                        <ArrowBackSharpIcon fontSize='large' className='back-icon' onClick={handleEditSkill} />
                        <h3 className='edit-skill-header'>Skills</h3></div>
                    {
                        skills.map((skill) => {
                            return <>
                                <div className='skill-icon-wrap' >
                                    <p className='p-skills'>{skill.skillName}<hr className="horizontal-line" /></p>
                                    <EditIcon onClick={()=>handleEachSkillEdit(skill.skillName)} />
                                </div>
                            </>
                        })
                    }
                    <div>

                    </div>
                </div>
                <div>
                    <BootstrapDialog
                        onClose={handleEachSkillEditClose}
                        aria-labelledby="customized-dialog-title"
                        open={openEditSkill}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleEachSkillEditClose}> Edit {selectedSkill} </BootstrapDialogTitle>
                        <DialogContent dividers className='dialogContent1'>
                            <EditSkillDialog></EditSkillDialog>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" href="#contained-buttons" onClick={handleEachSkillEditClose}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>
        )
    }

    export default EditSkill