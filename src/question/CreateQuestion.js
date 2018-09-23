import React, { Component } from 'react';
import { FormControl, Button } from "react-bootstrap";
import './CreateQuestion.scss';
import { connect } from "react-redux";
import { getAuthenticatedUser } from "../auth/state/authSelectors";
import { bindActionCreators } from "redux";
import { saveQuestion } from "./state/questionActions";
import { Redirect } from "react-router-dom";
import { getIsSaveInProgress } from "./state/questionSelectors";

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redurect: false,
            optionOneText: '',
            optionTwoText: ''
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    };

    handleSubmit = () => {
        const {optionOneText, optionTwoText} = this.state;
        this.props.saveQuestion({optionOneText, optionTwoText, author: this.props.authenticatedUser});

        this.setState({
            redirect: true
        })
    };

    render() {
        const {optionOneText, optionTwoText, redirect} = this.state;
        const {isSaveInProgress} = this.props;

        if(redirect && !isSaveInProgress) {
            return <Redirect to="/"/>
        }

        return (
            <div className="create-question">
                <h1>Create New Question</h1>
                <div>
                    <p>Complete the question:</p>
                    <h3>Would you rather...</h3>
                    <form>
                        <FormControl type="text" className="optionOne" onChange={this.handleChange} name="optionOneText"/>
                        <p>OR</p>
                        <FormControl type="text" className="optionTwo" onChange={this.handleChange} name="optionTwoText"/>
                        <Button bsStyle="primary" className="create" onClick={this.handleSubmit} disabled={!optionOneText || !optionTwoText}> Create</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        authenticatedUser: getAuthenticatedUser(state),
        isSaveInProgress: getIsSaveInProgress(state)
    }),
    (dispatch) => bindActionCreators({saveQuestion}, dispatch)
)(CreateQuestion);