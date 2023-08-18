import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './src/theme/AppTheme';
import ExploreScreen, {navigationRef} from './src/screens/ExploreScreen';
import {Styles} from './src/styles/Styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[Styles.flex1]}>
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <NavigationContainer ref={navigationRef}>
          {/* <Stack.Navigator initialRouteName="ExploreScreen">
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{headerShown: false}} />
          </Stack.Navigator> */}
          <Tab.Navigator
            initialRouteName="ExploreScreen"
            screenOptions={{
              tabBarStyle: {backgroundColor: 'transparent', position: 'absolute'},
              tabBarInactiveTintColor: lightTheme.colors.onPrimary,
              tabBarActiveTintColor: lightTheme.colors.onPrimary,
            }}>
            <Tab.Screen
              name="Home"
              component={() => null}
              options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home-outline" color={color} size={size} />,
              }}
              listeners={() => ({
                tabPress: e => {
                  e.preventDefault(); // Prevents navigation
                },
              })}
            />
            <Tab.Screen
              name="ExploreScreen"
              component={ExploreScreen}
              options={{
                headerShown: false,
                tabBarLabel: 'Shorts',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="lightning-bolt" color={color} size={size} />,
              }}
            />
            <Tab.Screen
              name="Plus"
              component={() => null}
              options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarLabelPosition: 'beside-icon',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="plus-circle-outline" color={color} size={size} />,
              }}
              listeners={() => ({
                tabPress: e => {
                  e.preventDefault(); // Prevents navigation
                },
              })}
            />
            <Tab.Screen
              name="Subscription"
              component={() => null}
              options={{
                headerShown: false,
                tabBarLabel: 'Subscription',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="youtube-subscription" color={color} size={size} />,
              }}
              listeners={() => ({
                tabPress: e => {
                  e.preventDefault(); // Prevents navigation
                },
              })}
            />
            <Tab.Screen
              name="Library"
              component={() => null}
              options={{
                headerShown: false,
                tabBarLabel: 'Library',
                tabBarIcon: ({color, size}) => <MaterialIcons name="video-collection" color={color} size={size} />,
              }}
              listeners={() => ({
                tabPress: e => {
                  e.preventDefault(); // Prevents navigation
                },
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
