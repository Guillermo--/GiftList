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
            gifts: giftMockData.map(gift => <GiftItem name={gift.name}/>),
            giftToAdd: ""
        }

        this.addGiftToList = this.addGiftToList.bind(this)
        this.captureGiftToAdd = this.captureGiftToAdd.bind(this)

    }

    captureGiftToAdd(event) {
        this.setState({giftToAdd: event.target.value})
    }

    addGiftToList(event) {
        event.preventDefault()

        this.setState(previousState => {
            return {
                gifts: previousState.gifts.concat(<GiftItem name={this.state.giftToAdd}/>),
                giftToAdd: ""
            }
        })
    }

    render() {
        return (
            <div className="giftListContainer">
                <div className="giftList">{this.state.gifts}</div>

                <form className="addGiftBar">
                    <input 
                        className="addGiftInput" 
                        onChange={this.captureGiftToAdd} 
                        value={this.state.giftToAdd}
                        type="text" 
                        placeholder="Add a gift..."
                    />
                    <button className="addGiftIcon" onClick={this.addGiftToList}>
                        <i className="fas fa-plus"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default GiftList;