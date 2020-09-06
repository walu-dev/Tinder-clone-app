import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]); //this is the same ass const people=[]

  //Piece of code that runs based on a condition/ if stsatement for react
  useEffect(() => {
    //this will run once when the component loads, and never again
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, [people]);

  return (
    <div>
      <div className="tinder-cards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
//pushing new items to the array
//normal way or dad way
//const people = [];
//people.push('soony','jane')
//react way
//setPeople([...people,'soony','jane' ])

//{people.map} loops through the people return them from first till the last
//when you have a list always give keys
//cause allows react to efficiently re-render a list
//makes your app supper fast
//onSnaphot takes a photo of the database
