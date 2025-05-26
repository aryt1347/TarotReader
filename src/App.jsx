import { useState } from "react";
import tarotData from "./tarot.json";
import "./index.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [readingType, setReadingType] = useState();

  
   const drawCards = (type) => {
    setReadingType(type);
    const shuffled = [...tarotData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setCards(selected);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Lady Macabre Free Tarot Card Readings</h1>
      <h3>Choose Reading Type:</h3>
      <p>Center yourself, hold your question in your heart, and when you're ready, click the button to uncover your cards.</p>
       <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => drawCards("love")}>Get Love Reading</button>
        {/* <button onClick={() => drawCards("general")}>General</button>
        <button onClick={() => drawCards("money")}>Money & Career</button> */}
      </div>

      <div className="center-row">
        {cards.map((card, index) => (
          <div key={index} className="center-element">
            <h2>{index === 0 ? "Past" : index === 1 ? "Present" : "Future"}</h2>
            <img
              src={`TarotReader/card-images/${card.image}`}
              alt={card.name}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h3>{card.name}</h3>
            <p style={{ textAlign: "left" }}>{card[readingType]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
