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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.checked);
    };

    isChosen = (votes) => {
        return votes.includes(this.props.authenticatedUser);
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
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup className="choices">
                                <Radio name="question" onChange={this.handleChange} value="optionOne">
                                    {optionOne}
                                </Radio>{' '}
                                <Radio name="question" onChange={this.handleChange} value="optionTwo">
                                    {optionTwo}
                                </Radio>{' '}
                            </FormGroup>
                            <Button bsStyle="primary" className="submit" disabled={!checked} type="submit"> Submit</Button>
                        </form>
                    </div>
            } else {
                const allVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
                const optionOneLength = question.optionOne.votes.length;
                const optionTwoLength = question.optionTwo.votes.length;
                const optionOnePercentage = parseFloat((optionOneLength / allVotes * 100).toFixed(2));
                const optionTwoPercentage = parseFloat((optionTwoLength / allVotes * 100).toFixed(2));

                detailContent =
                    <div className="content">
                        <p className="first-part">Results: </p>
                        <div className="results">
                            <div className={this.isChosen(question.optionOne.votes) ? 'choice chosen': 'choice'}>
                                <p className="choice-text">Would you rather {question.optionOne.text}?</p>
                                <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                <p className="votes">{optionOneLength} out of {allVotes} votes</p>
                            </div>
                            <div className={this.isChosen(question.optionTwo.votes) ? 'choice chosen': 'choice'}>
                                <p className="choice-text">Would you rather {question.optionTwo.text}?</p>
                                <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                <p className="votes">{optionTwoLength} out of {allVotes} votes</p>
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