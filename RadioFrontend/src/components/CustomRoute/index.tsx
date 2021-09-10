/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '~/hooks/useAuth';

interface RoutesProps extends RouteProps {
  role: 'standard' | 'admin';
}

const CustomRoute: React.FC<RoutesProps> = ({ role, ...rest }) => {
  const { user } = useAuth();

  if (user && role === 'admin') {
    return <Route {...rest} />;
  }

  if (user && role === 'standard') {
    return <Route {...rest} />;
  }

  return <Redirect to="/" />;
};

export default CustomRoute;
