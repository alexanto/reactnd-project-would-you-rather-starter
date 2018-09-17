import React, { Component } from 'react';
import Question from './Question';
import { Grid, Row, Col } from "react-bootstrap";

class PollPage extends Component {
    render() {
        return (
            <Grid className="poll">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Question/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default PollPage;