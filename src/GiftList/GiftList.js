import React from 'react';
import './GiftList.css';
import GiftItem from '../GiftItem/GiftItem';


class GiftList extends React.Component {
    constructor() {
        super()

        const giftMockData = [
            {name: "Scarf"},
            {name: "Card"},
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
        this.setState(previousState => {
            return {
                gifts: previousState.gifts.concat(<GiftItem name={this.state.giftToAdd}/>),
                giftToAdd: ""
            }
        })

        event.preventDefault();

        this.persistLocally(this.state.giftToAdd);
    }

    openIndexedDb() {
        var indexedDB = 
            window.indexedDB || 
            window.mozIndexedDB || 
            window.webkitIndexedDB || 
            window.msIndexedDB || 
            window.shimIndexedDB;

        var openRequest = indexedDB.open("MyDatabase", 1);

        openRequest.onupgradeneeded = function(event) {
            var database = event.target.result;
            database.createObjectStore("gifts", {keyPath: "id", autoIncrement: true});
        }

        return openRequest;
    }

    persistLocally(giftName) {
        console.log("Will attempt to persist " + giftName);
        
        var openRequest = this.openIndexedDb();

        openRequest.onsuccess = function(event) {
            console.log("Opened database successfully");
            var database = event.target.result;
            var transaction = database.transaction("gifts", "readwrite");
            var store = transaction.objectStore("gifts");

            var gift = {
                name: giftName,
            };

            var addRequest = store.add(gift);

            addRequest.onsuccess = function() {
                console.log("Successfully persisted " + giftName);
            }
        }
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