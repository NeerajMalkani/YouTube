import React, {useState} from 'react';
import {Image, SafeAreaView, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PaperProvider, Text} from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from 'react-native-slider';
import {darkTheme, lightTheme} from './src/theme/AppTheme';
import ExploreScreen, {navigationRef} from './src/screens/ExploreScreen';
import {Styles} from './src/styles/Styles';

const Tab = createBottomTabNavigator();

const HomeIcon = () => {
  return <Image source={require('./assets/home.png')} style={[Styles.width20, Styles.height20]} />;
};
const ShortsIcon = () => {
  return <Image source={require('./assets/shorts.png')} style={[Styles.width20, Styles.height20]} />;
};
const PlusIcon = () => {
  return <Image source={require('./assets/plus.png')} style={[Styles.width32, Styles.height32, Styles.marginTop16]} />;
};
const SubscriptionIcon = () => {
  return <Image source={require('./assets/playlist.png')} style={[Styles.width20, Styles.height20]} />;
};
const LibraryIcon = () => {
  return <Image source={require('./assets/video-library.png')} style={[Styles.width20, Styles.height20]} />;
};

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const setVideoCurrentTime = useState<number>(0);
  const setMaxTime = useState<number>(0);
  const currentPlayerRef = useState<any>();
  const [sliderThumbWidth, setSliderThumbWidth] = useState<number>(12);
  const [sliderThumbHeight, setSliderThumbHeight] = useState<number>(12);

  const onSeek = (seek: number) => {
    currentPlayerRef[0].current?.seek(seek);
    setSliderThumbWidth(12);
    setSliderThumbHeight(12);
  };

  const onSlidingStart = () => {
    setSliderThumbWidth(18);
    setSliderThumbHeight(18);
  };

  const NoScreen = () => null;

  const TabListener = () => ({
    tabPress: (e: any) => {
      e.preventDefault(); // Prevents navigation
    },
  });

  return (
    <SafeAreaView style={[Styles.flex1]}>
      <View style={[Styles.positionAbsolute, Styles.paddingHorizontal16, Styles.flexAlignCenter, Styles.top0, Styles.width100per, Styles.height56, Styles.flex1, Styles.flexRow, Styles.zIndex3]}>
        <Text variant="titleLarge" style={[Styles.flexGrow, Styles.fontBold, {color: lightTheme.colors.onPrimary}]}>
          Shorts
        </Text>
        <View style={[Styles.flexRow, Styles.width120, Styles.flexAlignCenter, Styles.flexSpaceBetween]}>
          <Octicons name="search" color={lightTheme.colors.onPrimary} size={24} />
          <MaterialCommunityIcons name="camera-outline" color={lightTheme.colors.onPrimary} size={24} />
          <Entypo name="dots-three-vertical" color={lightTheme.colors.onPrimary} size={20} />
        </View>
      </View>
      <View style={[Styles.height8, Styles.width100per, Styles.positionAbsolute, Styles.flexJustifyStart, Styles.bottom69, Styles.zIndex2]}>
        <Slider
          animateTransitions={true}
          step={0.01}
          minimumValue={0}
          maximumValue={setMaxTime[0]}
          thumbTouchSize={{width: 24, height: 24}}
          thumbStyle={{width: sliderThumbWidth, height: sliderThumbHeight}}
          minimumTrackTintColor={lightTheme.colors.primary}
          thumbTintColor={lightTheme.colors.primary}
          maximumTrackTintColor="#828282"
          value={setVideoCurrentTime[0]}
          trackStyle={[Styles.height2]}
          onSlidingComplete={onSeek}
          onSlidingStart={onSlidingStart}
        />
      </View>
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            initialRouteName="ExploreScreen"
            screenOptions={{
              tabBarStyle: {backgroundColor: 'black', position: 'absolute', height: 56, paddingBottom: 8},
              tabBarInactiveTintColor: lightTheme.colors.onPrimary,
              tabBarActiveTintColor: lightTheme.colors.onPrimary,
            }}>
            <Tab.Screen name="Home" component={NoScreen} options={{headerShown: false, tabBarLabel: 'Home', tabBarIcon: HomeIcon}} listeners={TabListener} />
            <Tab.Screen name="ExploreScreen" component={ExploreScreen} initialParams={{setVideoCurrentTime: setVideoCurrentTime, setMaxTime: setMaxTime, currentPlayerRef: currentPlayerRef}} options={{headerShown: false, tabBarLabel: 'Shorts', tabBarIcon: ShortsIcon}} />
            <Tab.Screen name="Plus" component={NoScreen} options={{headerShown: false, tabBarLabel: '', tabBarLabelPosition: 'beside-icon', tabBarIcon: PlusIcon}} listeners={TabListener} />
            <Tab.Screen name="Subscription" component={NoScreen} options={{headerShown: false, tabBarLabel: 'Subscription', tabBarIcon: SubscriptionIcon}} listeners={TabListener} />
            <Tab.Screen name="Library" component={NoScreen} options={{headerShown: false, tabBarLabel: 'Library', tabBarIcon: LibraryIcon}} listeners={TabListener} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
