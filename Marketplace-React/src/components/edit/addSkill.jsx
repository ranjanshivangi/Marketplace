import React from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getAllSkills } from '../../services/skillService';
import List from '@mui/material/List';
// import { colourOptions } from '../data';
const options = [
    { value: '.net', label: '.Net' },
    { value: 'react', label: 'React' },
    { value: 'mysql', label: 'MySql' }];


const AddSkills = () => {
      
    const [skills, setSkills] = React.useState("");
   
    React.useEffect(() => {
        getSkills();        
    }, [])

    const getSkills = () => {
        getAllSkills()
            .then((res) => {
                console.log(res.data);
                setSkills(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleSelectChange = (selectedOption) => {
        setSkills(selectedOption.value);
        console.log(selectedOption.value)
      };
    return (
        <>
       
            <Select
               
                
                value={skills}
                onChange={handleSelectChange}
                options={options} />
              
        
       
        {/* <List dense={true} disablePadding={true}>
                    {skills.map((skill) => (
                        value = ratings(skill),
                            <ListItemText primary={skill.skillName} secondary={<span className="skilldetail">{` (${skill.experience
                                } yrs, ${skill.lastUsed
                                })`}</span>} />
                    ))}
            </List> */}
        </>
        
    );
}
export default AddSkills