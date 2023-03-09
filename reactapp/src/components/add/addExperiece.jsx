import React, { useState } from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import './addExperience.scss'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox, FormControlLabel } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { getAllSkills } from '../../services/skillService';

const jobTitileOptions = [
    { value: 'software Engineer', label: 'Software Engineer' },
    { value: 'senior software Engineer', label: 'Senior software Engineer' },
    { value: 'tech lead', label: 'Tech Lead' },
    { value: 'architech', label: 'Architech' },
    { value: 'Senior Architect', label: 'Senior Architect' },
]
const employementTypeOptions = [
    { value: 'full-time', label: 'Full-Time' },
    { value: 'part-time', label: 'Part-Time' },
    { value: 'Self-Employed', label: 'Self-Employed' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'internship', label: 'Internship' },
    { value: 'trainee', label: 'Trainee' }
]

const AddExperiece = () => {

    const { id } = useParams();
    const [selectedJobTitle, setselectedJobTitle] = useState(null);
    const [jobTitle, setJobTitle] = useState(null);
    const [employementType, setEmployementType] = useState(null);
    const [selectedEmployementType, setSelectedEmployementType] = useState(null);

    const [endDate, setEndDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [skills, setSkills] = useState([]);


    React.useEffect(() => {
        setJobTitle(jobTitileOptions);
        setEmployementType(employementTypeOptions);
   
        getAllSkill();
    }, [])
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);

    };

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

    return (
        <>
            <div  >Designation*
                <Select
                    style={{minheight:'90px'}}
                    size='max'
                    options={jobTitle}
                    value={selectedJobTitle}
                    onChange={setselectedJobTitle}
                /></div>
            <div  className='e-employement-type'>Employement Type
                <Select
                    options={employementType}
                    value={selectedEmployementType}
                    onChange={setSelectedEmployementType}
                /></div>

            <div className='e-company-name' >Company Name*
            </div>
            <TextField
                style={{ width: '100%' }}
                required
                id="outlined-required"
                placeholder="Ex: Microsoft"
            />
             <div className='company-name' >Project Name*
            </div>
            <TextField
                style={{ width: '100%' }}
                required
                id="outlined-required"
                
            />
            <div  className='e-location'>Location
            </div>
            <TextField
                style={{ width: '100%' }}
                required
                id="outlined-required"
                placeholder="Ex: Noida,Banglore"
            />

            <div className='e-checkbox'>
            <FormControlLabel
                control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
                label="I am currently working in this role"
            />
            </div>
            
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(newValue) => {
                            setStartDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                {isChecked ? "" :
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                }
            </div>

            <div className='e-description'>
                <div>Description</div>
                <TextareaAutosize
                    aria-label="empty textarea"

                    style={{ width: '100%', maxWidth: '600px', minHeight: '80px' }}
                />
            </div>
            <div className='skills'>


                <div className='e-sill-select' >Skill*
                    <div>We recommend adding your top 5 used in this role. They’ll also appear in your Skills section.</div>
                    <Select
                        id="skill-select"
                        options={skills}
                        value={selectedSkill}
                        onChange={setSelectedSkill}
                        isMulti
                    /></div>
            </div>
        </>
    )
}

export default AddExperiece

