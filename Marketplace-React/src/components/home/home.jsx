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

const Home = () => {
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
            {homejson.map((data) => {
              return <div>
                <Link to={`view/${data.jdid}`} state={{ jobDetails: data }} >
                  <div className="jobtitle"> {data.JobTitle}</div>
                </Link>
                <div className="accountName">{data.AccountName}</div>
                <div className="workLocation">Location :- {data.WorkLocation}</div>
                <div className="experience">Experience :-{data.Experience} Years+</div>

              </div>
            })}
          </CardContent>

        </Card>
      </div>
    </div>
  );

}
export default Home;
