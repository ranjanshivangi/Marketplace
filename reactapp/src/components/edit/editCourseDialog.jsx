import React from 'react'
import { useState, useEffect } from 'react'
import { getEmployeeCourses } from '../../services/courseService';
import { useParams } from "react-router";
import './editCourseDialog.scss'
import Select from 'react-select';
import TextField from '@mui/material/TextField';


const EditCourseDialog = () => {
    
    const { id } = useParams();
    const [courseName, setCourseName] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
   
   
    
    useEffect(() => {
        getEmployeeCourse();
        // setSelectedCourse(selectedCourseName.course)
    }, [])
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    const getEmployeeCourse = () => { 
        getEmployeeCourses(id)
            .then((res) => {
                console.log(res.data)
                setCourseName(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    } 

    return (
        <>
            <div>
                <div className='padding-bottom'>Course name*
                    <Select
                        id="course-select"
                        options={courseName}
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
                <div>Assosiated with :</div>
                <TextField id="outlined-basic" variant="outlined" style={{width:'100%'}} />
            </div>
        </>
    )
}
export default EditCourseDialog