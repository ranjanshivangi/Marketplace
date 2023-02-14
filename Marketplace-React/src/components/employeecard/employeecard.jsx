import React from "react";
import './employeecard.scss';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { getEmployee } from "../../services/employeeservice";

const EmployeeCard = (props) => {

    const img = `${props.employeeObj.imgURL}`;
    
    return (            
            <Card sx={{ ':hover': { boxShadow: 10 }, height: '350px', width: '300px', fontFamily: 'Arial, Helvetica, sans-serif', borderRadius: '10px' }}>
            <Box className="cardheader">
                <Avatar alt={props.employeeObj.name} src={img} sx={{ width: 100, height: 100 }} />
                
                <div className="emp">
                    <div className="empname">
                        {props.employeeObj.name}</div>
                    <div className="empdesignation">{props.employeeObj.designation}</div>
                </div>
            </Box>
            <CardContent className="empcontent">
            <Typography color="text.secondary" variant="body2" component="div">
                    Email: {props.employeeObj.emailId}
                </Typography>
                <Typography color="text.secondary" variant="body2" component="div">
                    Location: {props.employeeObj.location}
                </Typography>
                <Typography color="text.secondary" variant="body2" component="div">
                    Status: {props.employeeObj.status}
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="medium" >Know More</Button>
            </CardActions>            
        </Card>
        
        
       
    )
}
export default EmployeeCard