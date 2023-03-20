import React from 'react'
import { useState, useEffect } from 'react'
import { getEmployeeHistory } from '../../services/employeeservice'
import { getEmployeeCourses } from '../../services/courseService';
import { getEmployeeCertificates } from '../../services/certificateService';
import { useParams } from "react-router";
import './editSkillDialog.scss'

const EditSkillDialog = () => {
    const { id } = useParams();
    const [projectName, setProjectName] = useState([]);
    const [courseName, setCourseName] = useState([]);
    const [certificateName, setCertificateName] = useState([]);

    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const[selectedCourses,setSelectedCourses]=useState([]);
    const[selectedCertificates,setSelectedCertificates]=useState([]);
    useEffect(() => {
        getSkillsFrom();    
      }, [])

    const getSkillsFrom = () => {
    getEmployeeHistory(id)
      .then((res) => {
        console.log(res.data)
        setProjectName(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      getEmployeeCourses(id)
      .then((res) => {
        console.log(res.data)
        setCourseName(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

      getEmployeeCertificates(id)
      .then((res) => {
        console.log(res.data)
        setCertificateName(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
    const handleProjectCheckbox = (event) => {
        const companyName = event.target.value;
        if (event.target.checked) {
          setSelectedCompanies([...selectedCompanies, companyName]);
        } else {
          setSelectedCompanies(selectedCompanies.filter((name) => name !== companyName));
        }
      };
      const handleCourseCheckbox = (event) => {
        const courseName = event.target.value;
        if (event.target.checked) {
            setSelectedCourses([...selectedCourses, courseName]);
        } else {
            setSelectedCourses(selectedCourses.filter((name) => name !== courseName));
        }
      };
      const handleCertificateCheckbox = (event) => {
        const courseName = event.target.value;
        if (event.target.checked) {
          setSelectedCertificates([...selectedCertificates, courseName]);
        } else {
          setSelectedCertificates(selectedCertificates.filter((name) => name !== courseName));
        }
      };
  return (
    <div>
        <div>    
    <h3 className='e-h3'>Tell us where you put this skill to use:</h3>
    <p className='ep-skill'>Select any item where this skill applies applies</p>
    <p className='ep-checkbox-header'>Projects :</p>
    {projectName.map((company) => (
      <div key={company.projectName}>
        <input
          type="checkbox"
          id={company.projectName}
          name={company.projectName}
          value={company.projectName}
          checked={selectedCompanies.includes(company.projectName)}
          onChange={handleProjectCheckbox}
        />
        <label className='e-checkbox-lebel' htmlFor={company.ProjectName}>{company.projectName}</label>
      </div>
    ))}
    <p className='ep-checkbox-header'>Courses :</p>
    {courseName.map((course) => (
      <div key={course.courseName}>
        <input
          type="checkbox"
          id={course.courseName}
          name={course.courseName}
          value={course.courseName}
          checked={selectedCourses.includes(course.courseName)}
          onChange={handleCourseCheckbox}
        />
        <label className='e-checkbox-lebel' htmlFor={course.courseName}>{course.courseName}</label>
      </div>
    ))}
    <p className='ep-checkbox-header'>Certifications :</p>
    {certificateName.map((certificate) => (
      <div key={certificate.certificationsName}>
        <input
          type="checkbox"
          id={certificate.certificationsName}
          name={certificate.certificationsName}
          value={certificate.certificationsName}
          checked={selectedCertificates.includes(certificate.certificationsName)}
          onChange={handleCertificateCheckbox}
        />
        <label className='e-checkbox-lebel' htmlFor={certificate.certificationsName}>{certificate.certificationsName}</label>
      </div>
    ))}
    </div>
    </div>
  )
}
export default EditSkillDialog