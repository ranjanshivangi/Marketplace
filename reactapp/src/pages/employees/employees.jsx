import React from "react";
import './employees.scss';
import Header from "../../components/header/header";
import Grid from '@mui/material/Grid';
import EmployeeCard from "../../components/employeecard/employeecard";
import { getEmployee } from "../../services/employeeservice";
import Banner from "../../components/banner/banner";

const Employees = () => {
    const [employee, setEmployee] = React.useState([]);
    const [errorList, setErrorList] = React.useState([]);

    const getEmp = () => {
        getEmployee()
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((err) => {
                console.log(err);
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);
            })
    }

    React.useEffect(() => {
        getEmp();

    }, [])

    return (<>
        <div className="container">
            <Header />
            <div className="employee-container">
            {errorList.length > 0 ? <div className="banner">
                <Banner errorList={errorList} />
            </div> : null}
            <Grid container spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ width: '95%', padding: '.5rem' }}>
                {
                    employee.map((emp) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} className="employeebox" >
                            <EmployeeCard employeeObj={emp} />
                        </Grid>
                    ))
                }
            </Grid>
            </div>
        </div>

    </>
    )
}
export default Employees;