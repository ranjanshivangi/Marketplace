import React from "react";
import './banner.scss';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { AlertTitle } from "@mui/material";
import { useNavigate } from "react-router";

const Banner = (props) => {
    const navigate = useNavigate();
    const handleOnclick =()=>{
        navigate('/error', {state : props.errorList})
    }
    return (
        <Alert severity="error" sx={{backgroundColor: '#FCF55F'}}
            action={
                <Button variant="text" onClick={handleOnclick} color="error">
                    Know More
                </Button>
            }
        >
            <AlertTitle>Failed to load data in this page</AlertTitle>
            
        </Alert>
    )
}
export default Banner