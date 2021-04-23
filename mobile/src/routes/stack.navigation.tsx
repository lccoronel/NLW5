import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import Welcome from '../pages/Welcome';
import UserIndentification from '../pages/UserIndentification';
import Confirmation from '../pages/Confirmation';
import PlantSelection from '../pages/PlantSelection';

const { Screen, Navigator } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIndentification" component={UserIndentification} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSelection" component={PlantSelection} />
    </Navigator>
  );
};

export default AppRoutes;
