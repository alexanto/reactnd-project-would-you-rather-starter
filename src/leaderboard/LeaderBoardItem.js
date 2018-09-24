import React from 'react';
import './LeaderBoardItem.scss';

const LeaderBoardItem = (props) => (
     <div className="leader-board-item">
        <div className="avatar-pic" style={{backgroundImage: `url(${props.stats.avatarURL})`}}></div>
        <div className="content">
            <h4 className="leader-board-name">{props.stats.name}</h4>
            <p>Answered questions <span className="leaderboard-score">{props.stats.answered}</span></p>
            <hr className="leaderboard-divider"/>
            <p>Created questions <span className="leaderboard-score">{props.stats.created}</span></p>
        </div>
        <div className="score">
            <div className="score-label">
                <p className="score-label-text">Score</p>
            </div>
            <div className="score-count">{props.stats.answered + props.stats.created}</div>
        </div>
    </div>
);

export default LeaderBoardItem;