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
import { getShortlistsByManagerId, deleteShortlistedEmployee } from "../../services/shortlistsService";

const ShortListCart = () => {

    const managerID = 'INEMP1734';
    const [shortlists, setShortlists] = React.useState([]);
    const [errorList, setErrorList] = React.useState([]);

    const getShortlists = () => {
        getShortlistsByManagerId(managerID)
            .then((res) => {
                console.log(res.data);
                setShortlists(res.data);
            })
            .catch((err) => {
                console.log(err);
                const errObj = {
                    message: err.message,
                    code: err.code,
                    data: err.response.data,
                    url: err.config.url
                }
                setErrorList([...errorList, errObj]);
            })
    }

    React.useEffect(() => {
        getShortlists()
    }, [])

    const uniqueRRs = shortlists.reduce((acc, cur) => {
        if (!acc.includes(cur.rrnumber
        )) {
            acc.push(cur.rrnumber
            );
        }
        return acc;
    }, []);
    const handleDelete = (shortlistsId) => {
        deleteShortlistedEmployee(shortlistsId)
            .then((res) => {
                console.log(res);
                getShortlists();

            })
            .catch((err) => {
                console.log(err);

            })
    }
    const status = (employeeStatus) => {
        switch (employeeStatus) {
            case 1:
                return 'Available';
            case 2:
                return 'Proposed';
        }
    }

    return (
        <Card className="cart">
            <CardContent>
                {uniqueRRs.map((rrNumber) => {
                    const RRData = shortlists.filter(item => item.rrnumber
                        === rrNumber);
                    return <>
                        <div className="cart-rr">{rrNumber}</div>
                        <Divider />
                        {
                            RRData.map((employee) => (
                                <List >
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="comments">
                                                <DeleteIcon onClick={() => handleDelete(employee.shortlistsId)} />
                                            </IconButton>
                                        }>
                                        <ListItemAvatar>
                                            <Avatar src={`https://arci.emids.com/Documents/Photos/${employee.shortlistedEmployeeId}.jpeg`} alt={employee.shortlistedEmployeeName} />
                                        </ListItemAvatar>
                                        <ListItemText primary={`${employee.shortlistedEmployeeId} - ${employee.shortlistedEmployeeName}`}
                                            secondary={
                                                <>
                                                    <div>Status : {status(employee.shortlistedEmployeeStatus)}</div>
                                                    <div>Shortlisted Skills : &nbsp;
                                                        {
                                                            employee.shortlistedSkills.map((skill) => (
                                                                <span>{skill.employeeSkillName
                                                                }, </span>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            }
                                        />

                                    </ListItem>
                                </List>
                            ))
                        }
                    </>
                })}
            </CardContent>
            <CardActions>
                <div className="cart-acion">
                    <Button variant="contained">Request WFM for Discussion</Button>
                </div>

            </CardActions>
        </Card>

    )
}
export default ShortListCart