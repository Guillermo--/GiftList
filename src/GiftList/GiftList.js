import React from 'react';
import './GiftList.css';
import GiftItem from '../GiftItem/GiftItem';


class GiftList extends React.Component {
    constructor() {
        super()

        this.state = {
            gifts: [],
            giftToAdd: ""
        }

        this.setupAllPersistedGifts();

        this.addGiftToList = this.addGiftToList.bind(this)
        this.captureGiftToAdd = this.captureGiftToAdd.bind(this)

    }

    captureGiftToAdd(event) {
        this.setState({giftToAdd: event.target.value})
    }

    addGiftToList(event) {
        this.persistGiftLocally(this.state.giftToAdd);

        this.setState(previousState => {
            return {
                gifts: previousState.gifts.concat(<GiftItem name={this.state.giftToAdd}/>),
                giftToAdd: ""
            }
        })

        event.preventDefault();
    }

    openIndexedDb() {
        var indexedDB = 
            window.indexedDB || 
            window.mozIndexedDB || 
            window.webkitIndexedDB || 
            window.msIndexedDB || 
            window.shimIndexedDB;

        var openRequest = indexedDB.open("MyDatabase", 1);

        openRequest.onupgradeneeded = (event) => {
            var database = event.target.result;
            database.createObjectStore("gifts", {keyPath: "id", autoIncrement: true});
        };

        return openRequest;
    }

    setupAllPersistedGifts() {

        this.openIndexedDb().onsuccess = (event) => {
            var allGifts = []
            var database = event.target.result;
            var transaction = database.transaction("gifts", "readonly");
            var store = transaction.objectStore("gifts");

            store.getAll().onsuccess = (event) => {
                allGifts = event.target.result;
            };

            transaction.oncomplete = () => {
                this.setState({
                    gifts: allGifts.map(gift => 
                        <GiftItem name={gift.name} key={gift.id}/>)
                });

                console.log("Got all the gifts from the database: \n", allGifts);
            }
        }
    }

    persistGiftLocally(giftName) {        

        this.openIndexedDb().onsuccess = (event) => {
            var database = event.target.result;
            var transaction = database.transaction("gifts", "readwrite");
            var store = transaction.objectStore("gifts");

            var gift = {
                name: giftName,
            };

            var addRequest = store.add(gift);

            addRequest.onsuccess = () => {
                console.log("Successfully persisted '" + giftName + "'");
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
                    <button className="addGiftButton" onClick={this.addGiftToList}>
                        <i className="fas fa-plus"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default GiftList;