import React from 'react';
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap";

class NotFound extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col class="col-md-12">
                        <code>
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div>
                                Sorry, an error has occured, Requested page not found!
                            </div>
                        </code>
                        <Button>
                            <Glyphicon glyph="home" />
                            Take Me Home
                        </Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default NotFound;