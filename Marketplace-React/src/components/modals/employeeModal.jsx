import React from 'react'
import './employeeModal.scss'
import { InputBase } from '@mui/material';

const EmployeeModal = () => {
  const [value, setValue] = React.useState()

  return (
    <div>
      <div className="form-box">
        <form>
          
            <label>Name:</label>
              <InputBase
                className="edit-input"
                value={value}
                onChange={event => {
                  setValue(event.target.value)
                }}
                inputProps={{ 'aria-label': 'search google maps' }}>
              </InputBase>
            
            <label>Designation:</label>
              <InputBase
                className="edit-input"
                value={value}
                onChange={event => {
                  setValue(event.target.value)
                }}
                inputProps={{ 'aria-label': 'search google maps' }}>
              </InputBase>
            
            <label>Status:</label>
              <InputBase
                className="edit-input"
                value={value}
                onChange={event => {
                  setValue(event.target.value)
                }}
                inputProps={{ 'aria-label': 'search google maps' }}>
              </InputBase>
          
            <label>Mobile Number:</label>
              <InputBase
                className="edit-input"
                value={value}
                onChange={event => {
                  setValue(event.target.value)
                }}
                inputProps={{ 'aria-label': 'search google maps' }}>
              </InputBase>
            
            <label>About:</label>
              <InputBase
                className="edit-input"
                value={value}
                onChange={event => {
                  setValue(event.target.value)
                }}
                inputProps={{ 'aria-label': 'search google maps' }}>
              </InputBase>
            
         
        </form>
        
      </div>

    </div>
  )
}

export default EmployeeModal