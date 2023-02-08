import React from "react";
import './employees.scss';
import Header from "../../components/header/header";
import Grid from '@mui/material/Grid';
import employeejson from "../../components/employeecard/employee.json";
import EmployeeCard from "../../components/employeecard/employeecard";

const Employees = () => {
    return (
        <div className="container">
            <Header />
            <Grid container spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ width: '70%', marginTop: '5rem', padding: '.5rem' }}>                
                {
                    employeejson.map((emp) => (                        
                        <Grid item xs={12} sm={6} md={4} lg={3} className="employeebox" >
                            <EmployeeCard employeeObj={emp}/>                        
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
export default Employees;