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

const Home = () => {
  return (
    <div className="jobpage">
      <div className="jobs">
        <Card className="menu">
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
        </Card>
        <Card className="jobcontainer">
          {homejson.map((data) => {
            return <div>
              <Link to={{
                pathname: `/view/${data.jdid}`,
                state: { data }
              }} >
                <div className="jobtitle"> {data.JobTitle}</div>
              </Link>
              <div className="accountName">{data.AccountName}</div>
              <div className="workLocation">Location :- {data.WorkLocation}</div>
              <div className="experience">Experience :-{data.Experience} Years+</div>

            </div>
          })}
        </Card>
      </div>
    </div>
  );

}
export default Home;
