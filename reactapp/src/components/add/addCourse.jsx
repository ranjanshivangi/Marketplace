import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getAllCourses } from '../../services/courseService';
import { getEmployeeCourses } from '../../services/courseService';

const AddCourses = () => {
  const { id } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [SelectedEmployeeCourse, setSelectedEmployeeCourse] = useState([]);
  const [EmployeeCourse, setEmployeeCourse] = useState([]);

  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    getCourses();
    getEmployeeCourse();
  }, [])

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const getEmployeeCourse = () => {
    getEmployeeCourses(id)
      .then((res) => {

        setEmployeeCourse(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const getCourses = () => {
    getAllCourses()
      .then((res) => {
        const formattedCourses = res.data.map((courses) => ({
          value: courses.courseName,
          label: courses.courseName,
        }));
        setCourses(formattedCourses);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const handleCompanyCheckbox = (event) => {
    const companyName = event.target.value;
    if (event.target.checked) {
      setSelectedEmployeeCourse([...SelectedEmployeeCourse, companyName]);
    } else {
      setSelectedEmployeeCourse(SelectedEmployeeCourse.filter((name) => name !== companyName));
    }
  };

  return (
    <div>
      <div className='padding-bottom'>Course name*
        <Select
          id="course-select"
          options={courses}
          value={selectedCourse}
          onChange={setSelectedCourse}
        /></div>
      <div className='padding-bottom'>Course Type :  
      <div>
        <label>
          <input
            type="radio"
            value="Internal"
            checked={selectedOption === 'Internal'}
            onChange={handleOptionChange}
          />
          Internal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="External"
            checked={selectedOption === 'External'}
            onChange={handleOptionChange}
          />
          External
        </label>
      </div>
      </div>
      <div>Assosiated with : </div>
      {EmployeeCourse.map((company) => (
        <div key={company.courseFrom}>
          <input
            type="checkbox"
            id={company.courseFrom}
            name={company.courseFrom}
            value={company.courseFrom}
            checked={SelectedEmployeeCourse.includes(company.courseFrom)}
            onChange={handleCompanyCheckbox}
          />
          <label htmlFor={company.courseFrom}>{company.courseFrom}</label>
        </div>
      ))}
    </div>
  );
}
export default AddCourses