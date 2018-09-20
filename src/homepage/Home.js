import React, { Component } from 'react';
import { Grid, Tabs, Tab, Row, Col } from "react-bootstrap";
import Question from '../question/Question';
import './Home.scss';

class Home extends Component {
    render() {
        return (
        <Grid className="leader-board">
            <Row>
                <Col md={6} mdOffset={3}>
                    <Tabs defaultActiveKey={1} animation={false} id="home-tabs">
                        <Tab eventKey={1} title="Unanswered Questions">
                            <Question/>
                            <Question/>
                        </Tab>
                        <Tab eventKey={2} title="Answered Questions">
                            <Question/>
                            <Question/>
                            <Question/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default Home;