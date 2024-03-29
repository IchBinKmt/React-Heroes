import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRouter = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('last_path', rest.location.pathname)
    return (
        <Route 
            {...rest}
            component={ (props) => (
                (isAuth)
                    ? <Component {...props} />
                    : <Redirect to="/login" />

            )

            } 
        />
    )
}

PrivateRouter.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}