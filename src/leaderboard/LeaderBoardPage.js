import React, { Component } from 'react';
import './LeaderBoardPage.scss';
import LeaderBoardItem from './LeaderBoardItem';
import { Grid, Row, Col } from "react-bootstrap";

class LeaderBoardPage extends Component {
    render() {
        return (
            <Grid className="leader-board">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <LeaderBoardItem/>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default LeaderBoardPage;