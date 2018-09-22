import React, { Component } from 'react';
import './LeaderBoardItem.scss';

class LeaderBoardItem extends Component {
    render() {
        return (
            <div className="leader-board-item">
                <div className="avatar-pic"></div>
                <div className="content">
                    <h4>John Doe</h4>
                    <p>Answered questions <span>7</span></p>
                    <hr/>
                    <p>Created questions <span>3</span></p>
                </div>
                <div className="score">
                    <div className="score-label">
                        <p>Score</p>
                    </div>
                    <div className="score-count">10</div>
                </div>
            </div>
        )
    }
}

export default LeaderBoardItem;