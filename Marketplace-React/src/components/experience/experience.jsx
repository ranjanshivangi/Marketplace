import React from "react";
import '../experience/experience.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Typography } from "@mui/material";


const Experience = () => {
    const [showMore, setShowMore] = React.useState(false);
    const [text] = React.useState("This project is basically a customer managment app in which we can add customers with their respective name, email, city, state and can perform CRUD operation and we can add individual orders for each customers.")
    return (
        <div className="expbox">
            <div className="company">Emids</div>
            <div className="date">02/15-02/23</div>
            <List dense={true}>
                <ListItemButton alignItems="flex-start">
                    <ListItemIcon>
                        <RadioButtonCheckedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Senior Software Engineer"
                        secondary={<div className="project">
                            <span className="project-name">Erika</span>
                            {showMore ? text : `${text.substring(0, 100)}`}

                            <span className="seemore" onClick={() => setShowMore(!showMore)
                            }>
                                {showMore ? "...see less" : "...see more"}
                            </span>
                        </div>} />
                        
                </ListItemButton>
                <ListItemButton alignItems="flex-start">
                    <ListItemIcon>
                        <RadioButtonCheckedIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Software Engineer"
                        secondary={<div className="project">
                           <span className="project-name">Talent Market Place</span>
                            {showMore ? text : `${text.substring(0, 100)}`}

                            <span className="seemore" onClick={() => setShowMore(!showMore)
                            }>
                                {showMore ? "...see less" : "...see more"}
                            </span>
                            
                        </div>} />
                        
                </ListItemButton>
            </List>            
        </div> )
}
export default Experience;