import React,{ useState, useEffect } from 'react'
import Select,{ components }from 'react-select';
import { useParams } from "react-router";
import { getAllSkills } from '../../services/skillService';
import {getEmployeeHistory} from '../../services/employeeservice'

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
    const [employementHistory,setEmployementHistory]=useState([]);
    useEffect(() => {
        getSkills(); 
        getEmployementHistory();       
    }, [])

    const getSkills = () => {
        getEmployeeHistory(id)
            .then((res) => {
                console.log(res.data)
                setEmployementHistory(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getEmployementHistory = () => {
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
    return (
    <div>
      <Select
        id="skill-select"
        options={skills}
        value={selectedSkill}
        onChange={setSelectedSkill}
      />
       <Select
        id="proficiency-select"
        options={proficiencyOptions}
        value={selectedProficiency}
        onChange={setSelectedProficiency}
      />
       <div>
      <h2>{skills.skillName}</h2>
     
      <h3>Acquired from:</h3>
      {employementHistory.map((company) => (
        <div key={company.companyName}>
          <input
            type="checkbox"
            id={company.companyName}
            name={company.companyName}
            value={company.companyName}
            checked={selectedCompanies.includes(company.companyName)}
            onChange={handleCompanyCheckbox}
          />
          <label htmlFor={company.companyName}>{company.companyName}</label>
        </div>
      ))}
      <p>Selected companies: {selectedCompanies.join(', ')}</p>
    </div>
    </div>      
    );
}
export default AddSkills