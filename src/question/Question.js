import React, { Component } from 'react';
import { Button, FormGroup, Radio, ProgressBar } from "react-bootstrap";
import './Question.scss';
import stormtrooper from '../img/stormtrooper.svg';

class Question extends Component {
  constructor() {
      super();
      this.state = {
          isAnswered: true,
          isQuestion: false,
          question: {
              either: 'be a sparrow',
              or: 'be a snail'
          }
      }
  }
    render() {
        const {isAnswered, isQuestion, question} = this.state;
        let cardContent;
        let cardHeader;

        if (isQuestion) {
            cardContent =
                <div className="question-content">
                    <div className="avatar-pic" style={{backgroundImage: `url(${stormtrooper})`}}></div>
                    <div className="content">
                        <p className="first-part">Would you rather</p>
                        <p className="question-mark">?</p>
                        <Button bsStyle="primary" className="view-poll">View poll</Button>
                    </div>
                </div>
        } else if (!isAnswered) {
            cardContent =
                <div className="question-content">
                    <div className="avatar-pic" style={{backgroundImage: `url(${stormtrooper})`}}></div>
                    <div className="content">
                        <p className="first-part">Would you rather...</p>
                        <FormGroup className="choices">
                            <Radio name="question">
                                {question.either}
                            </Radio>{' '}
                            <Radio name="question">
                                {question.or}
                            </Radio>{' '}
                        </FormGroup>
                        <Button bsStyle="primary" className="submit"> Submit</Button>
                  </div>
                </div>
        } else {
            cardContent =
                <div className="question-content">
                    <div className="avatar-pic" style={{backgroundImage: `url(${stormtrooper})`}}></div>
                    <div className="content">
                        <p className="first-part">Results: </p>
                        <div className="results">
                            <div className="choice chosen">
                                <p className="choice-text">Would you rather {question.either}?</p>
                                <ProgressBar now={60} label={`${60}%`} />
                                <p className="votes">1 out of 2 votes</p>
                            </div>
                            <div className="choice">
                                <p className="choice-text">Would you rather {question.or}?</p>
                                <ProgressBar now={60} label={`${60}%`} />
                                <p className="votes">1 out of 2 votes</p>
                            </div>
                        </div>
                    </div>
                </div>
        }

        if(!isAnswered) {
            cardHeader = <p>John Doe asks:</p>

        } else {
            cardHeader = <p>Asked by John Doe:</p>
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