import React from 'react';
import './GiftItem.css';

function GiftItem(props) {
    return(
        <div className="giftItemContainer">
            <button className="pinIcon"><i className="fas fa-thumbtack"/></button>
            <div className="giftName">{props.name}</div>
            <button className="menuIcon"><i className="fas fa-ellipsis-v"/></button>
        </div>
    )
}

export default GiftItem;