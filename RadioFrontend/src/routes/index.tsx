/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CostumRoute } from '~/components';
import CustomRoute from '~/components/CustomRoute';
import { useAuth } from '~/hooks/useAuth';

import { SignIn, Dashboard } from '../pages';

const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>{!user && <Route path="/" exact component={SignIn} />}</Switch>

      {user?.role === 'standard' ? (
        <CostumRoute role={user.role} path="/dashboard" component={Dashboard} />
      ) : (
        <CustomRoute
          role={user?.role ?? 'admin'}
          path="/dashboard"
          component={Dashboard}
        />
      )}
    </BrowserRouter>
  );
};

export default Routes;
