import React from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getEmployeeSkills} from "../../services/employeeservice";
import List from '@mui/material/List';
// import { colourOptions } from '../data';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }];


const EditSkills = () => {
    const { id } = useParams();
    
    const [skills, setSkills] = React.useState([]);
    // const op={skills.map((skill) => (
    //     value = ratings(skill),
    //         <ListItemText primary={skill.skillName}  />
    // ))}

    const [selectedOption, setSelectedOption] = React.useState(null);
    React.useEffect(() => {
        getSkills();        
    }, [])

    const getSkills = () => {
        getEmployeeSkills(id)
            .then((res) => {
                console.log(res.data);
                setSkills(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSkills}
                options={options} />
        </div>
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
export default EditSkills