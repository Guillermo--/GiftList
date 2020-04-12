import React from 'react';
import './GiftList.css';
import GiftItem from '../GiftItem/GiftItem';


class GiftList extends React.Component {
    constructor() {
        super()

        const giftMockData = [
            {name: "Scarf"},
            {name: "Card"},
            {name: "Vaccum"},
        ]

        this.state = {
            gifts: giftMockData.map(gift => <GiftItem name={gift.name}/>)
        }

        this.addGiftToList = this.addGiftToList.bind(this)
    }

    addGiftToList() {
        this.setState(previousState => {
            return {
                gifts: previousState.gifts.concat("New Gift")
            }
        })
    }

    render() {
        return (
            <div className="giftListContainer">
                <div className="giftList">
                    {this.state.gifts}
                </div>
                <form className="addGiftBar">
                    <input className="addGiftInput" type="text" name="addGift" placeholder="Add a gift..."/>
                    <button className="addGiftIcon" onClick={this.addGiftToList}>
                        <i className="fas fa-plus"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default GiftList;