// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from "./components/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
