import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getAllSkills } from '../../services/skillService';
import { getEmployeeHistory } from '../../services/employeeservice'
import { getEmployeeCourses } from '../../services/courseService';
import { getEmployeeCertificate } from '../../services/certificateService';
import './addSkill.scss'

const proficiencyOptions = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'expert', label: 'Expert' }];


const AddSkills = () => {
  const { id } = useParams();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skills, setSkills] = useState([]);
  const [selectedProficiency, setSelectedProficiency] = useState(null);

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [employeeCourse, setEmployeeCourse] = useState([]);
  const [employeeCertificate, setEmployeeCertificate] = useState([]);

  const [projectName, setProjectName] = useState([]);
  const [courseFrom, setcourseFrom] = useState([]);
  const [certificateFrom, setCertificateFrom] = useState([]);

  useEffect(() => {
    getSkills();
    getAllSkill();  
  }, [])
  const getSkills = () => {
    getEmployeeHistory(id)
      .then((res) => {
        setProjectName(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

    getEmployeeCourses(id)
      .then((res) => {
        setcourseFrom(res.data)
      })
      .catch((err) => {
        console.log(err);
      })

    getEmployeeCertificate(id)
      .then((res) => {
        setCertificateFrom(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const getAllSkill = () => {
    getAllSkills()
      .then((res) => {
        const formattedSkills = res.data.map((skill) => ({
          value: skill.skillName,
          label: skill.skillName,
        }));

        setSkills(formattedSkills);
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
  const handleCourseFromCheckbox = (event) => {
    const courseFromName = event.target.value;
    if (event.target.checked) {
      setEmployeeCourse([...employeeCourse, courseFromName]);
    } else {
      setEmployeeCourse(employeeCourse.filter((name) => name !== courseFromName));
    }
  };
  const handleCertificateFromCheckbox = (event) => {
    const certificateFromName = event.target.value;
    if (event.target.checked) {
      setEmployeeCertificate([...employeeCertificate, certificateFromName]);
    } else {
      setEmployeeCertificate(employeeCertificate.filter((name) => name !== certificateFromName));
    }
  };

  return (
    <div>
      <div className='padding-bottom' >Skill*
        <Select
          id="skill-select"
          options={skills}
          value={selectedSkill}
          onChange={setSelectedSkill}
        /></div>
      <div> Proficiency
        <Select
          id="proficiency-select"
          options={proficiencyOptions}
          value={selectedProficiency}
          onChange={setSelectedProficiency}
        /></div>

      <div>
        
        <h3 className='h3'>Tell us where you learnt this skill:</h3>
        <p className='p-skill'>Select any item where this skill applies</p>
        <p className='p-checkbox-header'>Experience</p>
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
        </div>
        <div>
        <p className='p-checkbox-header'>Course</p>
        {courseFrom.map((course) => (
          <div key={course.courseFrom}>

            <input
              type="checkbox"
              id={course.courseName}
              name={course.courseName}
              value={course.courseName}
              checked={employeeCourse.includes(course.courseName)}
              onChange={handleCourseFromCheckbox}
            />
            <label className='checkbox-lebel' htmlFor={course.courseName}>{course.courseName}</label>
          </div>
        ))}
        <p className='p-list'>Selected Courses: {employeeCourse.join(', ')}</p>
        </div>
        <div className='selection-container'>
        <p className='p-checkbox-header'>Certification</p>
        {certificateFrom.map((certificate) => (
          <div key={certificate.certificationsName}>
            <input
              type="checkbox"
              id={certificate.certificationsName}
              name={certificate.certificationsName}
              value={certificate.certificationsName}
              checked={employeeCertificate.includes(certificate.certificationsName)}
              onChange={handleCertificateFromCheckbox}
            />
            <label className='checkbox-lebel' htmlFor={certificate.certificationsName}>{certificate.certificationsName}</label>
          </div>
        ))}
        <p className='p-list'>Selected Certification: {employeeCertificate.join(', ')}</p>

        </div>
    </div>
  );
}
export default AddSkills