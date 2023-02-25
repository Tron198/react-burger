import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "../services/hooks/hooks";

export const ProtectedRoute = ({ component, path }: RouteProps) => {
  const authorization = useSelector((state) => state.getLogin.login);

  if (!authorization) {
    return (
      <Route path={path} component={component}>
        <Redirect to={"/login?retpath=/profile"} />
      </Route>
    );
  }
  return <Route path={path} component={component} />;
};
