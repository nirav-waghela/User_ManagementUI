import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => (
                localStorage.hasOwnProperty('token') ? (
                    <div>
                        <Component {...props} />
                    </div>
                ) : (
                        <div>
                            {alert('Login to continue')}
                            <Redirect to='/login' />
                        </div>
                    )
            )}
        />
    );
}

export default PrivateRoute;
