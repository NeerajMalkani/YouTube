import React from 'react';
import {Image, SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './src/theme/AppTheme';
import ExploreScreen, {navigationRef} from './src/screens/ExploreScreen';
import {Styles} from './src/styles/Styles';

const Tab = createBottomTabNavigator();
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[Styles.flex1]}>
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            initialRouteName="ExploreScreen"
            screenOptions={{
              tabBarStyle: {backgroundColor: 'transparent', position: 'absolute', height: 56, paddingBottom: 8},
              tabBarInactiveTintColor: lightTheme.colors.onPrimary,
              tabBarActiveTintColor: lightTheme.colors.onPrimary,
            }}>
            <Tab.Screen
              name="Home"
              component={() => null}
              options={{
                headerShown: false,
                tabBarLabel: 'Home',
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: () => <Image source={require('./assets/home.png')} style={[Styles.width20, Styles.height20]} />,
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
                // eslint-disable-next-line react/no-unstable-nested-components
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
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: () => <Image source={require('./assets/plus.png')} style={[Styles.width32, Styles.height32, Styles.marginTop16]} />,
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
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: () => <Image source={require('./assets/playlist.png')} style={[Styles.width20, Styles.height20]} />,
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
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: () => <Image source={require('./assets/video-library.png')} style={[Styles.width24, Styles.height24]} />,
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
