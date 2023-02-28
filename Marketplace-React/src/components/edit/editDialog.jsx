import React from 'react'
import { useState, useEffect } from 'react'
import { getEmployeeHistory } from '../../services/employeeservice'
import { useParams } from "react-router";
import '../add/addSkill.scss'

const EditSkillDialog = () => {
    const { id } = useParams();
    const [projectName, setProjectName] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    useEffect(() => {
        getSkills();
        
      }, [])

    const getSkills = () => {
    getEmployeeHistory(id)
      .then((res) => {
        console.log(res.data)
        setProjectName(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
    const handleCompanyCheckbox = (event) => {
        const companyName = event.target.value;
        if (event.target.checked) {
          setSelectedCompanies([...selectedCompanies, companyName]);
        } else {
          setSelectedCompanies(selectedCompanies.filter((name) => name !== companyName));
        }
      };
  return (
    <div>
        <div>
        
    <h3 className='h3'>Tell us where you put this skill to use:</h3>
    <p className='p-skill'>Select any item where this skill applies applies</p>
    <p className='p-checkbox-header'>Projects</p>
    {projectName.map((company) => (
      <div key={company.projectName}>
        <input
          type="checkbox"
          id={company.projectName}
          name={company.projectName}
          value={company.projectName}
          checked={selectedCompanies.includes(company.projectName)}
          onChange={handleCompanyCheckbox}
        />
        <label className='checkbox-lebel' htmlFor={company.ProjectName}>{company.projectName}</label>
      </div>
    ))}
    <p className='p-list'>Selected Projects: {selectedCompanies.join(', ')}</p>
    </div></div>
  )
}
export default EditSkillDialog