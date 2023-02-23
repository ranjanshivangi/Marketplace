import React,{ useState, useEffect } from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getAllCertificate } from '../../services/certificateService';
import './addSkill.scss'
import {getEmployeeCertificates} from '../../services/employeeservice'; 

const AddCertificate = () => {
    const { id } = useParams();
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [certificate, setCertificate] = useState([]);
    const [SelectedEmployeeCertification, setSelectedEmployeeCertification] = useState([]);
    const [EmployeeCertificate,setEmployeeCertificate]=useState([]);

    useEffect(() => {
        getCertificates(); 
        getEmployeeCertificate();       
    }, [])

    const getEmployeeCertificate = () => {
      getEmployeeCertificates(id)
            .then((res) => {
                setEmployeeCertificate(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const getCertificates= () => {
      getAllCertificate()
            .then((res) => {
              console.log(res.data)
                const formattedCertificates = res.data.map((certificate) => ({
                    value: certificate.certificationsName,
                    label: certificate.certificationsName,
                  }));
                setCertificate(formattedCertificates);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleCompanyCheckbox = (event) => {
        const companyName = event.target.value;
        if (event.target.checked) {
          setSelectedEmployeeCertification([...SelectedEmployeeCertification, companyName]);
        } else {
          setSelectedEmployeeCertification(SelectedEmployeeCertification.filter((name) => name !== companyName));
        }
      };

    return (
    <div>
        <div className='course-select' >Certificate*
      <Select 
        id="course-select"
        options={certificate}
        value={selectedCertificate}
        onChange={setSelectedCertificate}
      /></div>
       
      <h4>Tell us where you put this skill to use:</h4>
      <p className='p-skill'>Select any item where this skill applies</p>
      <p className='p-experience'>Experience</p>
      {EmployeeCertificate.map((company) => (
        <div key={company.certificationsFrom}>
          <input
            type="checkbox"
            id={company.certificationsFrom}
            name={company.certificationsFrom}
            value={company.certificationsFrom}
            checked={SelectedEmployeeCertification.includes(company.certificationsFrom)}
            onChange={handleCompanyCheckbox}
          />
          <label htmlFor={company.certificationsFrom}>{company.certificationsFrom}</label>
        </div>
      ))}
      <p>Selected organisation: {SelectedEmployeeCertification.join(', ')}</p>
    </div>      
    );
}
export default AddCertificate