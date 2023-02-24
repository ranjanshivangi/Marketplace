import React,{ useState, useEffect } from 'react'
import Select from 'react-select';
import { useParams } from "react-router";
import { getAllCertificate } from '../../services/certificateService';
import './addCertificate.scss'
import {getEmployeeCertificates} from '../../services/employeeservice'; 

const AddCertificate = () => {
    const { id } = useParams();
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [certificate, setCertificate] = useState([]);
    const [SelectedEmployeeCertification, setSelectedEmployeeCertification] = useState([]);
    const [EmployeeCertificate,setEmployeeCertificate]=useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        getCertificates(); 
        getEmployeeCertificate();       
    }, [])
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
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
        <div className='padding-bottom' >Certificate*
      <Select 
        id="course-select"
        options={certificate}
        value={selectedCertificate}
        onChange={setSelectedCertificate}
      /></div>
       <div className='padding-bottom'>Certificate Type :  
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
      
    </div>      
    );
}
export default AddCertificate