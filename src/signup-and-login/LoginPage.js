import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import './signup-and-login.scss';

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
                        <form>
                            <FormControl type="text" className="username"/>
                            <FormControl type="password" className="pwd"/>
                            <Button bsStyle="primary" className="sign-in"> Login</Button>
                            <p>Do not have an account yet? Sign up!</p>
                            <Button bsStyle="primary" className="sign-up"> Sign Up</Button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LoginPage;