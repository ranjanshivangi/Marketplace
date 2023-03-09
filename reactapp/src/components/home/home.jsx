import React from "react";
import './home.scss';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardContent, Grid, List, ListItem, ListItemText, ListItemButton, ListItemIcon, CardActions } from "@mui/material";
import { getAllJobs } from "../../services/jobservice";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  const [jobs, setJobs] = React.useState([]);

  const getJobs = () => {
    getAllJobs()
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    getJobs()
  }, [])

  const handleMoreDetails = (id) => {
    navigate(`view/${id}`);
  }

  return (
    <Grid container columnGap={8} rowGap={5} style={{ height: 'auto', padding: '1rem', marginTop: '5rem' }}>
      <Grid item xs={12} sm={5} md={3} lg={2} style={{ height: 'auto' }}>
        <List sx={{ bgcolor: 'background.paper', borderRadius: '10px' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkOutlinedIcon color="action" fontSize="medium" />
              </ListItemIcon>
              <ListItemText primary="My Jobs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsIcon fontSize="medium" color="action" />
              </ListItemIcon>
              <ListItemText primary="Job Allert" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentTurnedInOutlinedIcon fontSize="medium" color="action" />
              </ListItemIcon>
              <ListItemText primary="Skill Assesment" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FeedIcon fontSize="medium" color="action" />
              </ListItemIcon>
              <ListItemText primary="Interview Prep" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon fontSize="medium" color="action" />
              </ListItemIcon>
              <ListItemText primary="Application Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid container xs={12} sm={12} md={8} lg={9} spacing={2}>
        {jobs.map((data) => {
          let location = [];
          let accountname = [];
          data.rrs.map((rr) => accountname.push(rr.accountName))
          data.rrs.map((rr) => location.push(rr.workLocation))

          return <Grid item xs={12} sm={6} md={6} lg={4} style={{ height: 'auto' }}>
            <Card sx={{ ':hover': { boxShadow: 10 } }}>
              <CardContent>
                <div className="jobcontainer">
                  <div className="jobtitle"> {data.jobTitle}</div>
                  {accountname.length !== 0 ? <div className="workLocation">{accountname.filter((v, i) => accountname.indexOf(v) === i) + ","}
                  </div> : null}
                  {accountname.length !== 0 ? <div className="workLocation">{location.filter((v, i) => location.indexOf(v) === i) + ","}
                  </div> : null}
                  <div className="workLocation">Exp: {data.experience}+</div>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" className="more-button" sx={{ backgroundColor: '#48d1cc' }} onClick={() => handleMoreDetails(data.jdid)}>More Details</Button>
              </CardActions>
            </Card>
          </Grid>
        })}
      </Grid>
    </Grid>
  )
}
export default Home;
