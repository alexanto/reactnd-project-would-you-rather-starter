import React, { Component } from 'react';
import { FormControl, Button } from "react-bootstrap";
import './CreateQuestion.scss';

class CreateQuestion extends Component {
    render() {
        return (
            <div className="create-question">
                <h1>Create New Question</h1>
                <div>
                    <p>Complete the question:</p>
                    <h3>Would you rather...</h3>
                    <form>
                        <FormControl type="text" className="either"/>
                        <p>OR</p>
                        <FormControl type="text" className="or"/>
                        <Button bsStyle="primary" className="create"> Create</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateQuestion;