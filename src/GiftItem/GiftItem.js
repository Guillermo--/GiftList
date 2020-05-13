import React from 'react';
import './GiftItem.css';

function GiftItem(props) {
    return(
        <div className="giftItemContainer">
            <button className="pinIcon"><i className="fas fa-thumbtack"/></button>
            <div className="giftName">{props.name}</div>
        </div>
    )
}

export default GiftItem;