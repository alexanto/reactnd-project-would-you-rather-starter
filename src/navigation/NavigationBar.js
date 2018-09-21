import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import avatar from '../img/ninja.svg';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signOut } from "../auth/state/authActions";
import { getAuthenticatedUser, getIsAuthenticated } from "../auth/state/authSelectors";
import { getUsers } from "../login/state/Selectors";

class NavigationBar extends Component {

    signOut = () => {
        this.props.signOut();
    };

    getUserName = () => {
        const {users, authenticatedUser} = this.props;
        return users[authenticatedUser] ? users[authenticatedUser].name : '';
    }

    render() {

        return (
            <Navbar className="navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem componentClass={Link} href="/createquestion" to="/createquestion">
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
                            <div style={{backgroundImage: `url(${avatar})`}}></div>
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