// code adapted based on https://tylermcginnis.com/react-router-protected-routes-authentication/ and https://reacttraining.com/react-router/web/example/auth-workflow

import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from "./state/authSelectors";
import { connect } from "react-redux";
import { setProtectedInitialPage } from "./state/authActions";
import { bindActionCreators } from "redux";

class PrivateRoute extends Component {

    componentDidMount() {
        if(!this.props.isAuthenticated) {
            this.props.setProtectedInitialPage(this.props.location.pathname);
        }
    }
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

export default connect(
    (state) => ({isAuthenticated: getIsAuthenticated(state)}),
    (dispatch) => bindActionCreators({setProtectedInitialPage}, dispatch)
) (PrivateRoute);