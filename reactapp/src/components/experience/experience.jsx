import React from "react";
import '../experience/experience.scss';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Divider } from "@mui/material";
const Experience = ({ companyData }) => {
    console.log("data", companyData);

    const uniqueRole = companyData.projects.reduce((acc, cur) => {
        if (!acc.includes(cur.role)) {
            acc.push(cur.role);
        }
        return acc;
    }, []);

    return (

        <div className="expbox">

            <div className="company">{companyData.xemployeerCompanyName}</div>
            {uniqueRole.map((role) => {
                const roleDetails = companyData.projects.filter(item => item.role === role).sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
                console.log("role", roleDetails);
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
                                        <Divider variant="full width"/>
                                        <span className="project-name">{details.projectName}</span>
                                        <span className="date">{new Date(details.startDate).toLocaleDateString()}-{new Date(details.endDate).toLocaleDateString()}</span>
                                        <ReactReadMoreReadLess
                                            charLimit={85}
                                            readMoreText={"..see more"}
                                            readLessText={"..see less"}
                                            readMoreClassName="seemore"
                                            readLessClassName="seemore"
                                        >
                                            {details.notes}
                                        </ReactReadMoreReadLess>

                                    </div>
                                ))
                                }
                            />
                        </ListItemButton>
                    </List>
                </>
            })}

        </div>)
}
export default Experience;
