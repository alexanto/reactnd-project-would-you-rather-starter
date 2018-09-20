import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import avatar from '../img/ninja.svg';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signOut } from "../auth/state/authActions";
import { getAuthenticatedUser, getIsAuthenticated } from "../auth/state/authSelectors";
import { Redirect } from "react-router";

class NavigationBar extends Component {

    signOut = () => {
        this.props.signOut();
    };

    render() {

        const {isAuthenticated, authenticatedUser} = this.props;

        if (!isAuthenticated === true) {
            return <Redirect to='/login' />
        }

        return (
            <Navbar className="navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem  href="/createquestion">
                        New Question
                    </NavItem>
                    <NavItem href="/leaderboard">
                      Leaderboard
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem className="avatar">
                        Hello, {authenticatedUser}!
                        <div>
                            <div style={{backgroundImage: `url(${avatar})`}}></div>
                        </div>
                    </NavItem>
                    <NavItem onClick={this.signOut}>
                        Log Out
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default connect(
    (state) => ({
        isAuthenticated: getIsAuthenticated(state),
        authenticatedUser: getAuthenticatedUser(state)
    }),
    (dispatch) => bindActionCreators({signOut}, dispatch)
)(NavigationBar);