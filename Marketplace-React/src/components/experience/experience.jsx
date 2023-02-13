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
            <h3>EMIDS</h3>
            <p>02/15-02/23</p>
            <List disablePadding>
                <ListItem disablePadding >
                    <ListItemButton disableGutters alignItems="flex-start">
                        <ListItemIcon>
                            <RadioButtonCheckedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Senior Software Engineer"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="div"
                                        variant="h8"
                                        color="rgb(24, 24, 145)"
                                    >
                                        ERIKA
                                    </Typography >
                                   
                                    {showMore ? text : `${text.substring(0, 100)}`}
                                    
                                    <span className="seemore" onClick={() => setShowMore(!showMore)
                                    }>
                                        {showMore ? "...see less" : "...see more"}
                                    </span>
                                </React.Fragment>
                            } />

                    </ListItemButton>
                </ListItem>
            </List>
            <List disablePadding>
                <ListItem disablePadding >
                    <ListItemButton disableGutters alignItems="flex-start">
                        <ListItemIcon>
                            <RadioButtonCheckedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Software Engineer"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        color="rgb(24, 24, 145)"
                                    >
                                        TALENT MARKETPLACE
                                    </Typography>
                                    {showMore ? text : `${text.substring(0, 100)}`}
                                    
                                    <span className="seemore" onClick={() => setShowMore(!showMore)
                                    }>
                                        {showMore ? "...see less" : "...see more"}
                                    </span>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        color="rgb(24, 24, 145)"
                                    >
                                        CUSTOMER MANAGEMENT SYSTEM
                                    </Typography>
                                    {showMore ? text : `${text.substring(0, 100)}`}
                                    
                                    <span className="seemore" onClick={() => setShowMore(!showMore)
                                    }>
                                        {showMore ? "...see less" : "...see more"}
                                    </span>
                                </React.Fragment>
                            } />

                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )

}
export default Experience;