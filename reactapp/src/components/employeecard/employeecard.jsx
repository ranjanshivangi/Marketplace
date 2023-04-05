import React from "react";
import './employeecard.scss';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { getEmployeeSkills } from "../../services/skillService";


const EmployeeCard = (props) => {
    const { id } = useParams();
    const [skills, setSkill] = React.useState([]);

    React.useEffect(() => {
        getSkill();
    }, [])
    const getSkill = () => {
        getEmployeeSkills(props.employeeObj.employeeId)
            .then((res) => {
                setSkill(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let navigate = useNavigate();
    const empProfileImgPath = `https://arci.emids.com/Documents/Photos/${props.employeeObj.employeeId}.jpeg`;
    const handleKnowMore = () => {
        navigate(`/profile/${props.employeeObj.employeeId}`);
    }

    return (
        <Card sx={{ ':hover': { boxShadow: 10 }, height: '400px', width: '300px', borderRadius: '10px' }}>
            <Box className="cardheader">
                <Avatar alt={props.employeeObj.employeeName} src={empProfileImgPath} sx={{ width: 100, height: 100 }} />

                <div className="emp">
                    <div className="empname">
                        {props.employeeObj.employeeName}</div>
                    <div className="empdesignation">{props.employeeObj.designation}</div>
                </div>
            </Box>
            <CardContent className="empcontent">
                <Typography color="text.secondary" variant="body2" component="div">
                    {props.employeeObj.emailId}
                </Typography>
                <Typography color="text.secondary" variant="body2" component="div">
                    Location: {props.employeeObj.location}
                </Typography>
                <Typography color="text.secondary" variant="body2" component="div">
                    Status : {(() => {
                        switch (props.employeeObj.status) {
                            case 0: return "Available";
                            case 1: return "Not available";
                            case 2: return "Proposed";
                            default: return "";
                        }
                    })()}

                </Typography>
                <Typography color="text.secondary" variant="body2" component="div" style={{ display: 'flex', flexDirection: 'row' }}>
                    Skills:<List dense={true} disableGutters={true} disablePadding={true} style={{ display: 'flex', flexDirection: 'row' }}>
                        {skills.map((skill, index) => (<React.Fragment key={index}>
                            {index !== 0 && ", "}
                            <ListItemText primary={skill.skillName} style={{ fontSize: '10px', marginTop: '0px' }} />
                           
                        </React.Fragment>
                        ))}
                    </List>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" onClick={handleKnowMore}>Know More</Button>
            </CardActions>
        </Card>



    )
}
export default EmployeeCard