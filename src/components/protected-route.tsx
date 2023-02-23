import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "../services/hooks/hooks";
import { useLocation } from "react-router-dom";
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
