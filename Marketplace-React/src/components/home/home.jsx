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
import { CardContent } from "@mui/material";
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
    <div className="jobpage">
      <div className="jobs">
        <Card className="menu">
          <CardContent>
            <div className="iconcss">
              <BookmarkOutlinedIcon color="action" fontSize="large" />
              <div className="icontext">My Jobs</div>
            </div >
            <div className="iconcss" >
              <NotificationsIcon fontSize="large" color="action" />
              <div className="icontext">Job Allert</div>
            </div >
            <div className="iconcss">
              <AssignmentTurnedInOutlinedIcon fontSize="large" color="action" />
              <div className="icontext">Skill Assessments</div>
            </div>
            <div className="iconcss">
              <FeedIcon fontSize="large" color="action" />
              <div className="icontext">Interview Prep</div>
            </div>
            <div className="iconcss">
              <SettingsIcon fontSize="large" color="action" />
              <div className="icontext">Application Settings</div>
            </div>
          </CardContent>

        </Card>
        <Card className="jobcontainer">
          <CardContent>
            {jobs.map((data) => {
              let location=[];
              let accountname=[];
              data.rrs.map((rr)=>accountname.push(rr.accountName))
              data.rrs.map((rr)=>location.push(rr.workLocation))
              return <div>
                <Link to={`view/${data.jdid}`} className="link">
                  <div className="jobtitle"> {data.jobTitle}</div>
                </Link>
                <div className="accountName"> 
                  <div className="workLocation">{accountname.filter((v,i) =>accountname.indexOf(v) === i)+","} </div>
                </div>
                <div className="workLocation">Location :- {location.filter((v,i) =>location.indexOf(v) === i)+","}</div>
                <div className="experience">Experience :-{data.experience} Years+</div>
              </div>
            })}
          </CardContent>

        </Card>
      </div>
    </div>
  );

}
export default Home;
