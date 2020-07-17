import React, { useState } from 'react';
import WelcomeContainer from './components/WelcomeContainer';
import { Jumbotron } from 'react-bootstrap';

const App = () => {
    const [appName, setAppName] = useState('somekind of name for the app');
    return (
        <>
            <Jumbotron classname="my-5">    
                <h1>{ appName }</h1>    
            </Jumbotron>

            <WelcomeContainer name = "Daria" greeting = {
            () => {return ("you passed a function as a prop!");}
            } setAppName = {setAppName}/>
        </>
    );
}

export default App;