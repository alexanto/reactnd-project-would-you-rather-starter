import React, { Component } from 'react';
import { Grid, Tabs, Tab, Row, Col } from "react-bootstrap";
import Question from '../question/Question';
import './Home.scss';
import { connect } from "react-redux";
import { getUsers } from "../login/state/loginSelectors";
import { getAnsweredByUser, getUnansweredByUser } from "../question/state/questionSelectors";
import { getAuthenticatedUser } from "../auth/state/authSelectors";

class Home extends Component {

    getAuthorByQuestion = (question) => {
        return this.props.users.find(user => question.author === user.id);
    };

    getStatistics = (question) => {
        return {
            percentage: 60,
            voted: 1,
            all: 3
        }
    };

    render() {

        const {unansweredByUser, answeredByUser, authenticatedUser} = this.props;
        const unansweredQuestionsByUser = unansweredByUser(authenticatedUser);
        const answeredQuestionsByUser = answeredByUser(authenticatedUser);

        return (
        <Grid className="leader-board">
            <Row>
                <Col md={6} mdOffset={3}>
                    <Tabs defaultActiveKey={1} animation={false} id="home-tabs">
                        <Tab eventKey={1} title="Unanswered Questions">
                            {unansweredQuestionsByUser.map(question =>
                                {
                                    const author = this.getAuthorByQuestion(question);
                                    return <Question author={author?author:{}} question={question} isDetail={false} isAnswered={false} key={question.timestamp} type={1} />
                                }

                            )}
                        </Tab>
                        <Tab eventKey={2} title="Answered Questions">
                            {answeredQuestionsByUser.map(question =>
                                {
                                    const author = this.getAuthorByQuestion(question);
                                    return <Question author={author?author:{}} question={question} key={question.timestamp} isDetail={false} isAnswered={true}/>
                                }
                            )}
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default connect(
    (state) => ({
    users: getUsers(state),
    unansweredByUser: getUnansweredByUser(state),
    answeredByUser: getAnsweredByUser(state),
    authenticatedUser: getAuthenticatedUser(state)
}),
)(Home);