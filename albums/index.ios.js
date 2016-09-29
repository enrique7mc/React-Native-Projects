// Import a library to help create a Component

import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/Header';

// Create a Component
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
