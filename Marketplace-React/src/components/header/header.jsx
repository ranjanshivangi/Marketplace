import React from "react";
import '../header/header.scss'
import logo from "../../resources/logo.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {

  return (
    <div className="head">
        <img className="logo" src={logo}/>
        <div className="searchbar">
            <SearchOutlinedIcon htmlColor="grey"/>
            <input type="search" name="search" id="search" size="50" placeholder="Search by title,skill or company"></input>
        </div>
    </div>
  )
}

export default Header;