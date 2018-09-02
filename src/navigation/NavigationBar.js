import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <Link to="/createquestion">New Question</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;