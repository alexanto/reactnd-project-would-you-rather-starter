import React, { Component } from 'react';
import { ControlLabel, Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import './signup-and-login.scss';

class SignUpPage extends Component {
    render() {
        return (
            <Grid className="register">
                <Row>
                    <Col md={12}>
                        <div className="logo">
                            WYR?
                        </div>
                        <h1>Please sign up</h1>
                        <form>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl type="text"/>
                            <ControlLabel>User Name</ControlLabel>
                            <FormControl type="text"/>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password"/>
                            <ControlLabel>Repeat Password</ControlLabel>
                            <FormControl type="password"/>
                            <Button bsStyle="primary" className="sign-up">Sign Up</Button>
                            <p>Already have an account. Take me to login</p>
                            <Button bsStyle="primary" className="login">Login</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SignUpPage;