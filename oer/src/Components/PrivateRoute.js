import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute( props){
    console.log(props)
    const {component : Component, ...rest} = props;
    
    return (<Route
            {...rest}
            render= { props => (
                
                localStorage.getItem('token') 
                    ?
                <Component {...props} />
                    :
                <Redirect to = 'login' />
            )
            }
    />)
}

export default PrivateRoute
