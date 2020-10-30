import React, { useState,useEffect} from "react";
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import './TinderCards.css';

function TinderCards() {
const [people, setPeople] = useState([]);

useEffect(()=>{
    const unsubscribe = database
    .collection("people")
    .onSnapshot(snapshot => 
    setPeople(snapshot.docs.map(doc => doc.data())));

    return ()=> {
        unsubscribe();
    };

},[]);

    return (
        <div>
         <div className="tinderCards__cardContainer">
            {people.map((person) =>(
                <TinderCard
                className ="swipe"
                key={person.name}
                key={person.designation}
                preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{backgroundImage: `url(${person.url})`}} className="card"
                    >
                        <h1>{person.name}</h1>
                        <h3>{person.designation}</h3>
                    </div>
                </TinderCard>
                ))}
        </div>
        </div>
    );
}

export default TinderCards;
