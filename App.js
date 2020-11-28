import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainAStack from './src/stacks/MainStack'
import UserContextProvider from './src/contexts/UserContext'

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainAStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}