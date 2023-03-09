import React from "react";
import './shortlist.scss';
import Header from "../../components/header/header";
import ShortListCart from "../../components/shortlistcart/shortlistcart";

const ShortList=()=>{
    return (
        <div className="cart-container">
            <Header/>
            <ShortListCart/>
        </div>
    )
}
export default ShortList