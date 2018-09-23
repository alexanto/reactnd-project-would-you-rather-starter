import React, { Component } from 'react';
import './LeaderBoardPage.scss';
import LeaderBoardItem from './LeaderBoardItem';
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getUserLeaderBoard } from "../login/state/loginSelectors";

class LeaderBoardPage extends Component {
    render() {

        const {leaderBoardItems} = this.props;

        return (
            <Grid className="leader-board">
                <Row>
                    <Col md={6} mdOffset={3}>
                        {
                            leaderBoardItems.map(item =>
                                <LeaderBoardItem stats={item} key={item.id}/>
                            )
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    (state) => ({
        leaderBoardItems: getUserLeaderBoard(state)
    })
)(LeaderBoardPage);