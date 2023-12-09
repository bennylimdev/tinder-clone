import { useState } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: 'steve jobs',
        url: 'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg'
        },
        {
        name: 'bob the builder',
        url: 'https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg'    
        }
]);

    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
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
    )
}

export default TinderCards;