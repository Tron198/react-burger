import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "../services/hooks/hooks";
import { useLocation, } from "react-router-dom";
import { TLocation } from "../services/types/types";

export const ProtectedRoute = ({ component, path }: RouteProps) => {
  const authorization = useSelector((state) => state.getLogin.login);
  const location = useLocation<TLocation>();
  if (!authorization) {
    return (
      <Route path={path} component={component}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }
  return <Route path={path} component={component} />;
};





//export const ProtectedRoute = ({ onlyForAuth, children, ...rest }) => {
//  const isAuthorized = getCookie("accessToken");
//  const location = useLocation();

//  if (!onlyForAuth && isAuthorized) {
//    const { from } = location.state || { from: { pathname: "/" } };
//    return (
//      <Route {...rest}>
//        <Redirect to={from} />
//      </Route>
//    );
//  }

//  if (onlyForAuth && !isAuthorized) {
//    return (
//      <Route {...rest}>
//        <Redirect to={{ pathname: "/login", state: { from: location } }} />
//      </Route>
//    );
//  }

//  return <Route {...rest}>{children}</Route>;
//};