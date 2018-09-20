import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import './signup-and-login.scss';
import { connect } from "react-redux";
import { getUsers } from "./state/Selectors";
import { bindActionCreators } from "redux";
import { authenticate } from "../auth/state/authActions";
import { getIsAuthenticated } from "../auth/state/authSelectors";
import { Redirect } from "react-router";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }

    login = () => {
        const user = this.findMatchingUser();
        if(user) {
            this.props.authenticate(user.id);
        } else {
            console.log('display error message');
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

        const {isAuthenticated} = this.props;

        if (isAuthenticated === true) {
            return <Redirect to='/' />
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
                            <Button bsStyle="primary" className="sign-in" onClick={this.login}> Login</Button>
                            <p>Do not have an account yet? Sign up!</p>
                            <Button bsStyle="primary" className="sign-up"> Sign Up</Button>
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
        isAuthenticated: getIsAuthenticated(state)
    }),
    (dispatch) => bindActionCreators({authenticate}, dispatch)
) (LoginPage);