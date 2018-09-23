import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signOut } from "../auth/state/authActions";
import { getAuthenticatedUser, getIsAuthenticated } from "../auth/state/authSelectors";
import { getUsers } from "../login/state/loginSelectors";

class NavigationBar extends Component {

    signOut = () => {
        this.props.signOut();
    };

    getUserName = () => {
        const {users, authenticatedUser} = this.props;
        return  users.length > 0 ? users.find(user => user.id === authenticatedUser).name : '';
    };

    getUserAvatar = () => {
        const {users, authenticatedUser} = this.props;
        if(users.length > 0) {
            const levels = window.location.href.split('/').length - 2;
            const levelUpString = '../'.repeat(levels - 2);
            return levelUpString + users.find(user => user.id === authenticatedUser).avatarURL
        } else {
            return '';
        }
    };

    render() {

        return (
            <Navbar className="navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem componentClass={Link} href="/add" to="/add">
                        New Question
                    </NavItem>
                    <NavItem componentClass={Link} href="/leaderboard" to="/leaderboard">
                        Leaderboard
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem className="avatar">
                        Hello, {this.getUserName()}!
                        <div>
                            <div style={{backgroundImage: `url(${this.getUserAvatar()})`}}></div>
                        </div>
                    </NavItem>
                    <NavItem onClick={this.signOut} componentClass={Link} href="/login" to="/login">
                        Sign Out
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default connect(
    (state) => ({
        users: getUsers(state),
        isAuthenticated: getIsAuthenticated(state),
        authenticatedUser: getAuthenticatedUser(state)
    }),
    (dispatch) => bindActionCreators({signOut}, dispatch)
)(NavigationBar);