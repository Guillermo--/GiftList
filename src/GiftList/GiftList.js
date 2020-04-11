import React from 'react';
import './GiftList.css';
import GiftItem from '../GiftItem/GiftItem';
import DesktopBreakPoint from '../responsive_utils/DesktopBreakPoint';
import TabletBreakPoint from '../responsive_utils/TabletBreakPoint';
import PhoneBreakPoint from '../responsive_utils/PhoneBreakPoint';

const giftMockData = [
    {name: "Scarf"},
    {name: "Card"},
    {name: "Vaccum"},
]

const gifts = giftMockData.map(gift => <GiftItem name={gift.name}/>)


class GiftList extends React.Component {

    addGiftToList() {
        console.log("Attempting to add new gift")
    }

    render() {
        return (
            <div className="giftListContainer">
                <div className="giftList">
                    {gifts}
                </div>
                <div className="addGiftBar">
                    <input className="addGiftInput" type="text" name="addGift" placeholder="Add a gift..."/>
                    <button className="addGiftIcon" onClick={this.addGiftToList}>
                        <i className="fas fa-plus"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default GiftList;