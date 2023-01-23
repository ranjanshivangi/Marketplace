import React from "react";
import homejson from './home.json'
import '../home/home.scss';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const Home = () => {
  return (
    <div className="jobpage">
      <div className="jobs">
          <div className="menu">
            <div className="iconcss">
              <BookmarkOutlinedIcon color="action" fontSize="large"/> 
              <div className="icontext">My Jobs</div>
            </div >
            <div className="iconcss" >
              <NotificationsIcon fontSize="large" color="action"/>
              <div className="icontext">Job Allert</div>
            </div >
            <div className="iconcss">
              <AssignmentTurnedInOutlinedIcon fontSize="large" color="action"/>
              <div className="icontext">Skill Assessments</div>
            </div>
            <div className="iconcss">
              <FeedIcon fontSize="large" color="action" />
              <div className="icontext">Interview Prep</div>
            </div>
            <div className="iconcss">
              <SettingsIcon fontSize="large" color="action"/>
              <div className="icontext">Application Settings</div>
            </div>
          </div>
            <div className="jobcontainer">
            {homejson.map((data)=>{ 
              return<div>
                <div  className="jobtitle"> {data.JobTitle}</div>
                <div className="accountName">{data.AccountName}</div>
                <div className="workLocation">Location :- {data.WorkLocation}</div>
                <div className="experience">Experience :-{data.Experience} Years+</div>
                </div>
              })}
        </div>
      </div>
    </div>

  )

}
export default Home;
