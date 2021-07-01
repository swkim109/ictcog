import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

function App() {

    const [fill, setFill] = useState(false);

    const handleClick = () => {
        setFill(!fill);
        //console.log("Click!");
    }

    return (
        <div style={{padding: "3em"}}>
            <div>
                <FontAwesomeIcon icon={fill?fasCircle:farCircle} size="7x" onClick={handleClick}/>
            </div>
        </div>
    )

}

export default App;

