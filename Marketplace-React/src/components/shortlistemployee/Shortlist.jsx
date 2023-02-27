import React,{useState,useEffect} from 'react'
import './Shortlist.scss'
import Select from 'react-select';
import { getAllSkills } from '../../services/skillService';
import {getAllRRs} from '../../services/rrService';
const Shortlist = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [skills, setSkills] = useState([]);
    const [selectedRR, setSelectedRR] = useState(null);
    const [RR, setRR] = useState([]);
    useEffect(() => {
        getAllRR();
        getAllSkill();  
      }, [])

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

      const getAllRR = () => {
        getAllRRs()
          .then((res) => {
            const formattedSkills = res.data.map((skill) => ({
              value: skill.rrnumber,
              label: skill.rrnumber,
            }));
    
            setRR(formattedSkills);
          })
          .catch((err) => {
            console.log(err);
          })
      }

    return (
      <>
       <div className='pad-buttom' >RR Number*
        <Select
          id="skill-select"
          options={RR}
          value={selectedRR}
          onChange={setSelectedRR}
        /></div>
      <div className='pad-buttom' >Required Skill*
        <Select
          id="skill-select"
          options={skills}
          value={selectedSkill}
          onChange={setSelectedSkill}
        /></div>
        
      </>
    );
}

export default Shortlist