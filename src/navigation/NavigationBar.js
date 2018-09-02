import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import avatar from '../img/ninja.svg';

class NavigationBar extends Component {
    render() {
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
                        Hello, username!
                        <div>
                            <div style={{backgroundImage: `url(${avatar})`}}></div>
                        </div>
                    </NavItem>
                    <NavItem href="/login">
                        Log Out
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;