import React from "react";
import './myRRs.scss';
import Header from "../../components/header/header";
import RRTree from "../../components/rrTree/rrTree";

const MyRRs = () => {
    
    return (
        <div className="container">
            <Header />
            <div className="myrr-container">
                
                <RRTree />
            </div>

        </div>


    )
}
export default MyRRs;