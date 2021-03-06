import React from 'react';
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import './NotFound.scss';
import { Link } from "react-router-dom";

//https://bootsnipp.com/snippets/Qb71
const NotFound = () => (
    <Grid>
        <Row>
            <Col md={12}>
                <code>
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <p>
                        Sorry, an error has occured, requested page does not exist!
                    </p>
                </code>
                <Link to="/">
                    <Button bsStyle="primary">
                        <Glyphicon glyph="home" />
                        Take Me Home
                    </Button>
                </Link>
            </Col>
        </Row>
    </Grid>
);

export default NotFound;