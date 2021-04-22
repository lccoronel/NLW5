import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './stack.navigation';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
