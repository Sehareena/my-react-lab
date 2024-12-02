import React from 'react';
import ProfileCard from './Components/ProfileCard';

function App(props) { 
    return (
        <div className="app">
            <ProfileCard
                name="Sehareena Sheikh"
                age={22}
                occupation="BSCS Student"
                location="Karachi"
            />
        </div>
    );
}

export default App;
