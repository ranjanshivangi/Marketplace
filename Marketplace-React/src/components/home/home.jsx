import React from "react";
import homejson from './home.json';
import { Link } from "react-router-dom";
import './home.scss';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

import Card from '@mui/material/Card';
import { CardContent, Grid, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from "@mui/material";
import { getAllJobs } from "../../services/jobservice";

const Home = () => {
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

  return (
    <Grid container columnGap={3} style={{ height: 'auto', padding: '1rem', marginTop: '5rem' }}>
      <Grid item xs={12} md={2} lg={2} xl={2} style={{ height: 'auto' }}>
        <List sx={{ bgcolor: 'background.paper' }}>
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
      <Grid container xs={12} md={9} lg={9.5} xl={9.5} sx={{ bgcolor: 'background.paper', padding: '1rem' }}>
        {jobs.map((data) => {
          let location = [];
          let accountname = [];
          data.rrs.map((rr) => accountname.push(rr.accountName))
          data.rrs.map((rr) => location.push(rr.workLocation))
          return <Grid item xs={12} md={6} lg={4} padding={1} style={{ height: 'auto' }}>
            <Card>
              <CardContent>
                <div className="jobcontainer">
                  <Link to={`view/${data.jdid}`} className="link">
                    <div className="jobtitle"> {data.jobTitle}</div>
                  </Link>
                  <div className="workLocation">{accountname.filter((v, i) => accountname.indexOf(v) === i) + ","}
                  </div>
                  <div className="workLocation">Location :- {location.filter((v, i) => location.indexOf(v) === i) + ","}
                  </div>
                  <div className="experience">Experience :-{data.experience} Years+</div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        })}


      </Grid>
    </Grid>

    //     <Card className="jobconta solid greeniner">
    //       <CardContent>
    //         {jobs.map((data) => {
    //           let location=[];
    //           let accountname=[];
    //           data.rrs.map((rr)=>accountname.push(rr.accountName))
    //           data.rrs.map((rr)=>location.push(rr.workLocation))
    //           return <div>
    //             <Link to={`view/${data.jdid}`} className="link">
    //               <div className="jobtitle"> {data.jobTitle}</div>
    //             </Link>
    //             <div className="accountName"> 
    //               <div className="workLocation">{accountname.filter((v,i) =>accountname.indexOf(v) === i)+","} </div>
    //             </div>
    //             <div className="workLocation">Location :- {location.filter((v,i) =>location.indexOf(v) === i)+","}</div>
    //             <div className="experience">Experience :-{data.experience} Years+</div>
    //           </div>
    //         })}
    //       </CardContent>

    //     </Card>
    //   </div>
    // </div>
  );

}
export default Home;
