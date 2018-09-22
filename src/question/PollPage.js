import React, { Component } from 'react';
import Question from './Question';
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getUsers } from "../login/state/loginSelectors";
import { getQuestions } from "./state/questionSelectors";
import './PollPage.scss';

class PollPage extends Component {

    render() {
        const {users, questions} = this.props;
        const questionId = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
        const question = questions.find(question => question.id === questionId);
        const author = users.find(user => user.id === question.author);
        const isAnswered = false;

        return (
            <Grid className="poll">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Question question={question?question:{}} author={author?author:{}} isDetail={true} isAnswered={isAnswered}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    (state) => ({
        users: getUsers(state),
        questions: getQuestions(state)
    })
) (PollPage);