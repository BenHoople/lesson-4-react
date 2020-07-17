import React, {useState} from 'react';
import {Container, Form} from 'react-bootstrap';

//function approach for creating components
const WelcomeContainer = ({name, greeting, setAppName}) =>  {
    const [recipient, setRecipient] = useState(name);
    return (
        <Container className="my-5">
            <h2>Wow, { recipient }</h2>
            <hr/>
            <p>{greeting()}</p>
            <Form.Group>
                <Form.Label>Recipient</Form.Label>
                <Form.Control onInput={
                    (event) => {
                        setRecipient(event.target.value);
                    }
                }/>
                <Form.Label>App Name</Form.Label>
                <Form.Control onInput={
                    (event) => {
                        setAppName(event.target.value);
                    }
                }/>
            </Form.Group>
        </Container>
    );
}

export default WelcomeContainer;