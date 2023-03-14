import React from "react";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useLocation } from "react-router";
import './errorhandler.scss';
import ReactReadMoreReadLess from "react-read-more-read-less";

const ErrorHandler = () => {
    const location = useLocation();    
    
    return (
        <Stack className="error-container" spacing={2}>
            {location.state?.map((error) => (
                <Alert severity="error">
                    <AlertTitle>{error.code} : {error.message} </AlertTitle>
                    <strong>{error.url}</strong>
                    <div>
                    <ReactReadMoreReadLess
                        charLimit={140}
                        readMoreText={"...more"}
                        readLessText={"...less"}
                        readMoreClassName="error-more"
                        readLessClassName="error-more"
                    >
                        {error.data}
                    </ReactReadMoreReadLess>
                    </div>
                    

                </Alert>
            ))}
        </Stack>

    )
}
export default ErrorHandler