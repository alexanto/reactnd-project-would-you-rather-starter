import React, { Component } from 'react';
import './LeaderBoardItem.scss';

class LeaderBoardItem extends Component {
    render() {
        const {stats} = this.props;

        return (
             <div className="leader-board-item">
                <div className="avatar-pic" style={{backgroundImage: `url(${stats.avatarURL})`}}></div>
                <div className="content">
                    <h4>{stats.name}</h4>
                    <p>Answered questions <span>{stats.answered}</span></p>
                    <hr/>
                    <p>Created questions <span>{stats.created}</span></p>
                </div>
                <div className="score">
                    <div className="score-label">
                        <p>Score</p>
                    </div>
                    <div className="score-count">{stats.answered + stats.created}</div>
                </div>
            </div>
        )
    }
}

export default LeaderBoardItem;