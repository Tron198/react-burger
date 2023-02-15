import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = (props) => {

    const authorization = useSelector(state => state.getLogin.login);

    if (!authorization) {

        return (
            <Route path={props.path} exact={props.exact}>
                <Redirect
                    to={'/login?retpath=/profile'}
                />
            </Route>
        )
    }
    return <Route {...props} />
}