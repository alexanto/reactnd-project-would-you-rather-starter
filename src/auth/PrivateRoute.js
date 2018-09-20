// code adapted based on https://tylermcginnis.com/react-router-protected-routes-authentication/

import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from "./state/authSelectors";
import { connect } from "react-redux";

class PrivateRoute extends Component {
    render() {
        const {component: Component, isAuthenticated, ...rest} = this.props;

        return (
            <Route {...rest} render={(props) => (
                isAuthenticated === true
                ? <Component {...props}/>
                : <Redirect to='/login'/>
        )}/>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps) (PrivateRoute);