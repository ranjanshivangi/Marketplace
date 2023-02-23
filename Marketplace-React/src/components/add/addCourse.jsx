import React,{ useState, useEffect } from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getAllCourses } from '../../services/courseService';
import { getEmployeeCourses } from '../../services/courseService';

import './addSkill.scss'

const AddCourses = () => {
    const { id } = useParams();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [courses, setCourses] = useState([]);
    const [SelectedEmployeeCourse, setSelectedEmployeeCourse] = useState([]);
    const [EmployeeCourse,setEmployeeCourse]=useState([]);

    useEffect(() => {
        getCourses(); 
        getEmployeeCourse();       
    }, [])

    const getEmployeeCourse = () => {
      getEmployeeCourses(id)
            .then((res) => {
              
                setEmployeeCourse(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getCourses= () => {
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
        <div className='course-select' >Courses*
      <Select 
        id="course-select"
        options={courses}
        value={selectedCourse}
        onChange={setSelectedCourse}
      /></div>
      <h4>Tell us where you put this skill to use:</h4>
      <p className='p-skill'>Select any item where this skill applies</p>
      <p className='p-experience'>Experience</p>
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
      <p>Selected organisation: {SelectedEmployeeCourse.join(', ')}</p>
    </div>      
    );
}
export default AddCourses