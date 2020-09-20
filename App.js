import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainAStack from './src/stacks/MainStack'

export default () => {
  return (
    <NavigationContainer>
        <MainAStack />
    </NavigationContainer>
  );
}