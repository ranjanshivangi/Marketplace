import React from "react";
import ShortlistJson from './shortlist.json';
import Card from '@mui/material/Card';
import './shortlistcart.scss';
import { CardActions, CardContent } from "@mui/material";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ShortListCart = () => {
    return (
        <Card className="cart">
            <CardContent>
                {ShortlistJson.map((shortlist) => (
                    <>
                        <div className="cart-rr">{shortlist.RR}</div>
                        <Divider />
                        {shortlist.Employee.map((employee) => (
                            <List >
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <DeleteIcon />
                                        </IconButton>
                                    }>
                                    <ListItemAvatar>
                                        <Avatar src={`https://arci.emids.com/Documents/Photos/${employee.EmpID}.jpeg`} alt={employee.EmpName} />
                                    </ListItemAvatar>
                                    <ListItemText primary={`${employee.EmpID}-${employee.EmpName}`} secondary={`Skill Assigned: ${employee.SkillAssigned}`} />

                                </ListItem>
                            </List>

                        ))}
                    </>
                ))}

            </CardContent>
            <CardActions>
                <div className="cart-acion">
                    <Button variant="contained">Request WFM for Interview</Button>
                </div>

            </CardActions>
        </Card>

    )
}
export default ShortListCart