import React ,{useEffect,useState}from 'react'
import './editSkill.scss'
import {getEmployeeSkills} from '../../services/employeeservice'
import { useParams } from "react-router";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
const EditSkill = () => {
    const [skills, setSkills] = React.useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    const handleEditSkill =()=>{
        navigate(`/profile/${id}`);
    }
    useEffect(()=>{
        getSkills();
    },[])
    const getSkills = () => {
        getEmployeeSkills(id)
            .then((res) => {
                setSkills(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
  return (
  
    

    <div className='main-container'>

        <div className='containers'>
            <div><ArrowBackSharpIcon fontSize='large' onClick={handleEditSkill}/>Skills</div>
            {
                skills.map((skill)=>{
                    return<>
                    <div>{skill.skillName}  <EditIcon /></div>
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