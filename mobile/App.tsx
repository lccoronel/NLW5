import React from 'react';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import UserIndentification from './src/pages/UserIndentification';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <UserIndentification />;
};

export default App;
