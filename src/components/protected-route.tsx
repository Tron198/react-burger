import { Route, Redirect } from "react-router-dom";
import { useSelector } from "../services/hooks/hooks";

export const ProtectedRoute = (props: any) => {
  const authorization = useSelector((state) => state.getLogin.login);

  if (!authorization) {
    return (
      <Route path={props.path} exact={props.exact}>
        <Redirect to={"/login?retpath=/profile"} />
      </Route>
    );
  }
  return <Route {...props} />;
};
