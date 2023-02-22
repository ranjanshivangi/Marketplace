import React from "react";
import './employees.scss';
import Header from "../../components/header/header";
import Grid from '@mui/material/Grid';
import employeejson from "../../components/employeecard/employee.json";
import EmployeeCard from "../../components/employeecard/employeecard";
import { getEmployee } from "../../services/employeeservice";

const Employees = () => {
    const [employee, setEmployee] = React.useState([]);
    const[img,setImg]=React.useState();
    const getEmp = () => {
        getEmployee()
            .then((res) => {
                setEmployee(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    React.useEffect(() => {
        getEmp();
        
    }, [])

    return (<>        
        <div className="container">
            <Header />
            <Grid container spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ width: '95%', marginTop: '5rem', padding: '.5rem' }}>                
                {
                    employee.map((emp) => (                        
                        <Grid item xs={12} sm={6} md={4} lg={2.4} className="employeebox" >
                            <EmployeeCard employeeObj={emp}/>                        
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    
    </>
    )
}
export default Employees;