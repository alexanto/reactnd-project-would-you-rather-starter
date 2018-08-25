import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import './LoginPage.scss';

class LoginPage extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <div className="logo">
                            WYR?
                        </div>
                        <h1>Please sign in</h1>
                        <FormControl type="text" className="username"/>
                        <FormControl type="password" className="pwd"/>
                        <Button bsStyle="primary" className="sign-in"> Sign In</Button>
                        <p>Do not have an account yet? Sign up!</p>
                        <Button bsStyle="primary" className="sign-up"> Sign Up</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LoginPage;