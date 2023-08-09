import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './src/theme/AppTheme';
import ExploreScreen, {navigationRef} from './src/screens/ExploreScreen';
import {Styles} from './src/styles/Styles';

const Stack = createStackNavigator();
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[Styles.flex1]}>
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="ExploreScreen">
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
