import React from "react";
import '../employees/employees.scss';
import Header from "../../components/header/header";
import Grid from '@mui/material/Grid';
import employeejson from "../../components/employee/employee.json";
import EmployeeCard from "../../components/employee/employeecard";

const Employees = () => {
    return (
        <div className="container">
            <Header />
            <Grid container spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ width: '70%', marginTop: '1rem', padding: '.5rem' }}>                
                {
                    employeejson.map((emp) => (
                        
                        <Grid item xs={3} className="employeebox">
                            <EmployeeCard employeeObj={emp}/>                        
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
export default Employees;