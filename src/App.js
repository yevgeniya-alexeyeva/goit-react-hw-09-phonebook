import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import routs from "./router";
import ViewsLoader from "./components/UI/Loader";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { getIsLoading } from "./redux/auth/auth-selectors";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() =>
  import(/* webpackChunkName: "HomeView" */ "./views/home-view")
);
const RegisterView = lazy(() =>
  import(/* webpackChunkName: "RegisterView" */ "./views/register-view")
);
const LoginView = lazy(() =>
  import(/* webpackChunkName: "LoginView" */ "./views/login-view")
);
const Contacts = lazy(() =>
  import(/* webpackChunkName: "Contacts" */ "./views/contacts-view")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isLoading = useSelector(getIsLoading);

  return (
    <div className="App">
      {!isLoading && <AppBar />}

      <div className="contentWrapper">
        <Suspense fallback={<ViewsLoader />}>
          <Switch>
            <Route path="/" exact component={HomeView} />
            {isLoading ? (
              <ViewsLoader />
            ) : (
              <PublicRoute
                path={routs.RegisterView}
                restricted
                redirectTo={routs.ContactsView}
                exact
                component={RegisterView}
              />
            )}
            {isLoading ? (
              <ViewsLoader />
            ) : (
              <PublicRoute
                path={routs.LoginView}
                restricted
                redirectTo={routs.ContactsView}
                component={LoginView}
              />
            )}
            <PrivateRoute
              path={routs.ContactsView}
              redirectTo={routs.LoginView}
              exact
              component={Contacts}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
