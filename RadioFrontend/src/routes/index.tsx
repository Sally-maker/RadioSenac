/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CustomRoute } from '../components/CustomRoute';
import { useAuth } from '../hooks/useAuth';
import { DashboardToFeed } from '../pages/DashboardToFeed';
import { MainScreen } from '../pages/MainScreen';

const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" exact component={MainScreen} />}
      </Switch>

      {user?.role === 'standard' ? (
        <CustomRoute
          role={user.role}
          path="/dashboard"
          component={DashboardToFeed}
        />
      ) : (
        <CustomRoute
          role={user?.role ?? 'admin'}
          path="/dashboard"
          component={DashboardToFeed}
        />
      )}
    </BrowserRouter>
  );
};

export { Routes };
