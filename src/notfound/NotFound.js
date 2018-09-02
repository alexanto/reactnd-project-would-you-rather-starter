import React from 'react';
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";
import './NotFound.scss';
import { Link } from 'react-router-dom';

//https://bootsnipp.com/snippets/Qb71
class NotFound extends React.Component {
    render() {
        return (
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
                        <Button bsStyle="primary">
                            <Glyphicon glyph="home" />
                            <Link to="/">Take Me Home</Link>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default NotFound;