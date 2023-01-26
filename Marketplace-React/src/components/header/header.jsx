import React from "react";
import './header.scss';
import logo from '../../resources/logo.png'
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    const onClickingHome = () => {
        navigate('/');
    }
    const onClickingJobs = () => {
        navigate('/');
    }
    const onClickingEmployees = () => {
        navigate('/employees');
    }
    return (
        <AppBar className="header">
            <Toolbar className="toolbar">
                <img src={logo} className="logo" />
                <Box className="searchbox">
                    <button type="submit" className='searchbutton'>
                        <SearchIcon htmlColor="grey" fontSize="medium" />
                    </button>
                    <input type="text" className="searchfield" placeholder="Search by skill or designation" />
                </Box>
                <Box className="iconsbox">
                    <IconButton size="medium" color="inherit" className="icon" onClick={onClickingHome}>
                        <HomeIcon htmlColor="grey" fontSize="large" />
                        <span className="iconstext">Home</span>
                    </IconButton>
                    <IconButton size="medium" color="inherit" className="icon" onClick={onClickingJobs}>
                        <BusinessCenterIcon htmlColor="grey" fontSize="large" />
                        <span className="iconstext">Jobs</span>
                    </IconButton>
                    <IconButton size="medium" color="inherit" className="icon" onClick={onClickingEmployees}>
                        <PeopleAltIcon htmlColor="grey" fontSize="large" />
                        <span className="iconstext">Employees</span>
                    </IconButton>
                    <IconButton size="medium" color="inherit" className="icon">
                        <AccountCircle htmlColor="grey" fontSize="large" />
                        <span className="iconstext">Me</span>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>

    )
}
export default Header

