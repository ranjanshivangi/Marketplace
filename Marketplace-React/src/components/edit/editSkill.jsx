import React, { useEffect, useState } from 'react'
import './editSkill.scss'
import { getEmployeeSkills } from '../../services/employeeservice'
import { useParams } from "react-router";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
const EditSkill = () => {
    const [skills, setSkills] = React.useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    const handleEditSkill = () => {
        navigate(`/profile/${id}`);
    }
    useEffect(() => {
        getSkills();
    }, [])
    const getSkills = () => {
        getEmployeeSkills(id)
            .then((res) => {
                setSkills(res.data);
               
            })
            .catch((err) => {
                console.log(err);
            })
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
                                <EditIcon  />
                            </div>
                        </>
                    })
                }
                <div>

                </div>
            </div>

        </div>

    )
}

export default EditSkill