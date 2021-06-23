import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome/welcome';
import UserIdentification from '../pages/UserIdentification/UserIdentification';
import { Confirmation } from '../pages/Confirmation/Confirmation';

const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >

    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="User"
      component={UserIdentification}
    />

    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />

  </stackRoutes.Navigator>
);

export default AppRoute;