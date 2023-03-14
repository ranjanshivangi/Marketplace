import React from 'react'
import Header from "../../components/header/header";
import EditSkill from '../../components/edit/editSkill.jsx'
import './EditSkills.scss'
const EditSkills = () => {
  return (
    <div className='container-main'>
      <div> <Header /></div>
      <div className='editskill-component'> <EditSkill/></div>     
        
    </div>
  )
}

export default EditSkills