import React, { Component } from 'react';
import { Button, FormGroup, Radio, ProgressBar } from "react-bootstrap";
import './Question.scss';
import { Link } from "react-router-dom";

class Question extends Component {

    constructor (props) {
        super(props);
        this.state = {
            checked: null
        }
    }

    handleChange = (e) => {
        this.setState({checked: e.target.value})
    };

    handleSubmit = () => {
        this.props.handleSubmit(this.state.checked);
    };

    render() {
        const {question, author, isDetail, isAnswered} = this.props;
        const {checked} = this.state;
        let cardContent;
        let cardHeader;
        let nonDetailContent;
        let detailContent;
        const optionOne = question.optionOne?question.optionOne.text:'';
        const optionTwo = question.optionTwo?question.optionTwo.text:'';

        if (!isDetail) {
            if (!isAnswered) {
                nonDetailContent = <p className="question-mark">?</p>;
            } else {
                nonDetailContent =
                   <ul className="non-detail-content">
                       <li>{question.optionOne.text}</li>
                       <li>{question.optionTwo.text}</li>
                   </ul>
            }
            cardContent =
                <div className="question-content">
                    <div className="avatar-pic" style={{backgroundImage: `url(${author.avatarURL})`}}></div>
                    <div className="content">
                        <p className="first-part">Would you rather</p>
                        {nonDetailContent}
                        <Link to={`/question/${question.id}`}>
                            <Button bsStyle="primary" className="view-poll">View poll</Button>
                        </Link>
                    </div>
                </div>

        } else if (isDetail) {
            if (!isAnswered) {
                detailContent =
                    <div className="content">
                        <p className="first-part">Would you rather...</p>
                        <FormGroup className="choices">
                            <Radio name="question" onChange={this.handleChange} value="optionOne">
                                {optionOne}
                            </Radio>{' '}
                            <Radio name="question" onChange={this.handleChange} value="optionTwo">
                                {optionTwo}
                            </Radio>{' '}
                        </FormGroup>
                        <Button bsStyle="primary" className="submit" disabled={!checked} onClick={this.handleSubmit}> Submit</Button>
                    </div>
            } else {
                detailContent =
                    <div className="content">
                        <p className="first-part">Results: </p>
                        <div className="results">
                            <div className="choice chosen">
                                <p className="choice-text">Would you rather {question.optionOne.text}?</p>
                                <ProgressBar now={60} label={`${60}%`} />
                                <p className="votes">1 out of 2 votes</p>
                            </div>
                            <div className="choice">
                                <p className="choice-text">Would you rather {question.optionTwo.text}?</p>
                                <ProgressBar now={60} label={`${60}%`} />
                                <p className="votes">1 out of 2 votes</p>
                            </div>
                        </div>
                    </div>
            }
            cardContent =
                <div className="question-content">
                    <div className="avatar-pic" style={{backgroundImage: `url(../${author.avatarURL})`}}></div>
                        {detailContent}
                </div>
        }

        if(isAnswered) {
            cardHeader = <p>Asked by {author.name}:</p>
        } else {
            cardHeader = <p>{author.name} asks:</p>
        }
        return (
            <div className="question">
                <div className="card-header">
                    {cardHeader}
                </div>
                {cardContent}
            </div>
        )
    }
}

export default Question;