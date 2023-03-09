import React from 'react'
import { useState, useEffect } from 'react'
import { getEmployeeCertificate } from '../../services/certificateService';
import { useParams } from "react-router";
import './editCertificateDialog.scss'
import Select from 'react-select';
import TextField from '@mui/material/TextField';


const EditCertificateDialog = () => {
    
    const { id } = useParams();
    const [certificatesName, setCertificatesName] = useState([]);
    const [selectedCertificates, setSelectedCertificates] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
   
   
    
    useEffect(() => {
        getEmployeeCertificates();
    }, [])
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    const getEmployeeCertificates = () => { 
      getEmployeeCertificate(id)
            .then((res) => {
                console.log(res.data)
                setCertificatesName(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    } 

    return (
        <>
            <div>
                <div className='padding-bottom'>Certificate name*
                    <Select
                        id="Certificates-select"
                        options={certificatesName}
                        value={selectedCertificates} 
                        onChange={setSelectedCertificates}
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
                <div>Assosiated with :</div>
                <TextField id="outlined-basic" variant="outlined" style={{width:'100%'}} />
            </div>
        </>
    )
}
export default EditCertificateDialog 