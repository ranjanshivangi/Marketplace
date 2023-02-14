import React from "react";
import '../experience/experience.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { getEmployeeHistory } from "../../services/employeeservice";


const Experience = ({ companyName, companyData }) => {
    console.log("companydata", companyData)
    const [showMore, setShowMore] = React.useState(false);
    const [text] = React.useState("This project is basically a customer managment app in which we can add customers with their respective name, email, city, state and can perform CRUD operation and we can add individual orders for each customers.")

    const uniqueRole = companyData.reduce((acc, cur) => {
        if (!acc.includes(cur.role)) {
            acc.push(cur.role);
        }
        return acc;
    }, []);
    console.log("u", uniqueRole);
    return (
        <div className="expbox">
            <div className="company">{companyName}</div>
            {uniqueRole.map((role) => {
                const roleDetails = companyData.filter(item => item.role === role);

                console.log("roleD", roleDetails);
                return <>
                    <List dense={true}>
                        <ListItemButton alignItems="flex-start">
                            <ListItemIcon>
                                <RadioButtonCheckedIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={role}
                                secondary={roleDetails.map((details) => (
                                    <div className="project">
                                        <span className="project-name">{details.projectName}</span>
                                        <span className="date">- 02/15-02/23</span>
                                        {showMore ? text : `${text.substring(0, 100)}`}

                                        <span className="seemore" onClick={() => setShowMore(!showMore)
                                        }>
                                            {showMore ? "...see less" : "...see more"}
                                        </span>
                                    </div>
                                ))


                                } />

                        </ListItemButton>

                    </List>
                </>
            })}

        </div>)
}
export default Experience;