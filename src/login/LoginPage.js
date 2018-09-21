import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl, Alert } from "react-bootstrap";
import './login.scss';
import { connect } from "react-redux";
import { getUsers } from "./state/Selectors";
import { bindActionCreators } from "redux";
import { authenticate } from "../auth/state/authActions";
import { getIsAuthenticated, getProtectedPath } from "../auth/state/authSelectors";
import { Redirect } from "react-router";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inCorrectUser: false
        }
    }

    login = () => {
        const user = this.findMatchingUser();
        if(user) {
            this.props.authenticate(user.id);
        } else {
            this.setState({inCorrectUser: true})
        }
    };

    findMatchingUser() {
        const userArray = Object.values(this.props.users);
        return userArray.find((user) => (user.id === this.state.username && user.password === this.state.password))
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {isAuthenticated, protectedPatch} = this.props;
        const {inCorrectUser, username, password} = this.state;

        if (isAuthenticated === true) {
            return <Redirect to={protectedPatch} />
        }

        return (
            <Grid className="login">
                <Row>
                    <Col md={12}>
                        <div className="logo">
                            WYR?
                        </div>
                        <h1>Please sign in</h1>
                        <form>
                            <FormControl type="text" className="username" onChange={this.handleChange} name="username"/>
                            <FormControl type="password" className="pwd" onChange={this.handleChange} name="password"/>
                            {inCorrectUser &&
                            <Alert bsStyle="danger">
                                <strong>Error!</strong> Incorrect username or password
                            </Alert>}
                            <Button bsStyle="primary" className="sign-in" onClick={this.login} disabled={!username || !password}> Login</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    (state) => ({
        users: getUsers(state),
        isAuthenticated: getIsAuthenticated(state),
        protectedPatch: getProtectedPath(state)
    }),
    (dispatch) => bindActionCreators({authenticate}, dispatch)
) (LoginPage);