import React, {useState, useRef} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {Text, withTheme} from 'react-native-paper';
import {createNavigationContainerRef} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {Styles} from '../styles/Styles';
import {StackProps} from '../models/StackProps';

import {VideoObj} from '../models/Video';
import VideoPlayerScreen from '../components/VideoPlayerScreen';

export const navigationRef = createNavigationContainerRef();
const ExploreScreen = ({theme, route}: StackProps) => {
  const colors: any = theme.colors;
  const [index, setIndex] = useState<number>(0);
  const arrVideos: VideoObj[] = [
    {
      description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: ['https://staticcf.trepup.com/videoposts/5afa81aa-3a68-47a2-ae4a-a7c7e24f1713.mp4'],
      subtitle: 'By Blender Foundation',
      thumb: 'https://staticcf.trepup.com/videoposts/5afa81aa-3a68-47a2-ae4a-a7c7e24f1713.jpeg',
      title: 'Big Buck Bunny',
      ref: useRef<any>(),
    },
    {
      description: 'The first Blender Open Movie from 2006',
      sources: ['https://staticcf.trepup.com/videoposts/cae43943-cf2b-4cc1-88ec-baa9695f160e.mp4'],
      subtitle: 'By Blender Foundation',
      thumb: 'https://staticcf.trepup.com/videoposts/cae43943-cf2b-4cc1-88ec-baa9695f160e.jpeg',
      title: 'Elephant Dream',
      ref: useRef<any>(),
    },
    {
      description: 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
      sources: ['https://staticcf.trepup.com/videoposts/f7bb928d-554b-4b0b-88b6-ea2dc0c95a51.mp4'],
      subtitle: 'By Google',
      thumb: 'https://staticcf.trepup.com/videoposts/f7bb928d-554b-4b0b-88b6-ea2dc0c95a51.jpeg',
      title: 'For Bigger Blazes',
      ref: useRef<any>(),
    },
  ];

  const swiperIndexChanged = (ind: number) => {
    setIndex(ind);
  };

  return (
    <View style={[Styles.flex1, {backgroundColor: colors.shadow}]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Swiper index={index} showsPagination={false} horizontal={false} loop={false} onIndexChanged={swiperIndexChanged}>
        {arrVideos.map((k: VideoObj, i: number) => {
          return (
            <View key={i} style={[Styles.flex1, Styles.flexAlignCenter, Styles.flexJustifyCenter]}>
              <VideoPlayerScreen vpIndex={i} videoURL={k.sources[0]} videoThumb={k.thumb} videoRef={k.ref} colors={colors} index={index} setVideoCurrentTime={route.params.setVideoCurrentTime} setMaxTime={route.params.setMaxTime} currentPlayerRef={route.params.currentPlayerRef} />
              <View style={[Styles.positionAbsolute, Styles.bottom64, Styles.left0, Styles.padding16]}>
                <View style={[Styles.flexRow, Styles.flexAlignCenter]}>
                  <Image source={{uri: k.thumb}} style={[Styles.width32, Styles.height32, Styles.borderRadius8]} />
                  <Text variant="titleMedium" style={[Styles.marginStart12, Styles.textShadow, {color: colors.onPrimary}]}>
                    {k.title}
                  </Text>
                </View>
                <Text variant="titleSmall" numberOfLines={2} style={[Styles.marginTop12, Styles.marginEnd56, Styles.textShadow, {color: colors.onPrimary}]}>
                  {k.description}
                </Text>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default withTheme(ExploreScreen);
