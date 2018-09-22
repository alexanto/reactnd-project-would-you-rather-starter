import React, { Component } from 'react';
import Question from './Question';
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getUsers } from "../login/state/loginSelectors";
import { getQuestions } from "./state/questionSelectors";
import './PollPage.scss';
import { bindActionCreators } from "redux";
import { answerQuestion } from "./state/questionActions";
import { getAuthenticatedUser } from "../auth/state/authSelectors";

class PollPage extends Component {

    handleSubmit = (answer) => {
        const id = this.getQuestion().id;

        console.log(this.props.authenticatedUser);

        this.props.answerQuestion({
            user: this.props.authenticatedUser,
            id,
            answer
        });
    };

    getQuestion = () => {
        const questionId = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
        return this.props.questions.find(question => question.id === questionId);
    };

    getAuthor = (question) => {
        return this.props.users.find(user => user.id === question.author);
    };

    render() {
        const question = this.getQuestion();
        const author = this.getAuthor(question);
        const isAnswered = false;

        return (
            <Grid className="poll">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Question question={question?question:{}} author={author?author:{}} isDetail={true} isAnswered={isAnswered} handleSubmit={this.handleSubmit}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    (state) => ({
        users: getUsers(state),
        questions: getQuestions(state),
        authenticatedUser: getAuthenticatedUser(state)
    }),
    (dispatch) => bindActionCreators({answerQuestion}, dispatch)
) (PollPage);