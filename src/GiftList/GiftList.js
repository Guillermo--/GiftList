import React from 'react';
import './GiftList.css';
import GiftItem from '../GiftItem/GiftItem';
import DesktopBreakPoint from '../responsive_utils/DesktopBreakPoint';
import TabletBreakPoint from '../responsive_utils/TabletBreakPoint';
import PhoneBreakPoint from '../responsive_utils/PhoneBreakPoint';


function GiftList() {
    return (
        <div className="giftListContainer">
            <div className="giftList">
                <GiftItem name="Scarf"/>
                <GiftItem name="Card"/>
                <GiftItem name="Allowance"/>
            </div>
            <div className="addGiftBar">
                <input className="addGiftInput" type="text" name="addGift" placeholder="Add a gift..."/>
                <i className="addGiftIcon fas fa-plus"/>
            </div>
        </div>
    )
}

export default GiftList;