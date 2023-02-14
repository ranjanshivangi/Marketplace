import React from "react";
import '../experience/experience.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Experience = ({ companyName, companyData }) => {
    const [showMore, setShowMore] = React.useState(false);

    const uniqueRole = companyData.reduce((acc, cur) => {
        if (!acc.includes(cur.role)) {
            acc.push(cur.role);
        }
        return acc;
    }, []);

    return (
        <div className="expbox">
            <div className="company">{companyName}</div>
            {uniqueRole.map((role) => {
                const roleDetails = companyData.filter(item => item.role === role);
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
                                        <span className="date">{details.startDate}-{details.endDate}</span>
                                        {showMore ? details.description : `${details.description.substring(0, 50)}`}

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