import React, {useState} from 'react';
import {View, StatusBar, Dimensions, Image} from 'react-native';
import {withTheme} from 'react-native-paper';
import {createNavigationContainerRef} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {Styles} from '../styles/Styles';
import {StackProps} from '../models/StackProps';

import {VideoObj} from '../models/Video';

export const navigationRef = createNavigationContainerRef();

const ExploreScreen = ({theme}: StackProps) => {
  const colors: any = theme.colors;
  const [index, setIndex] = useState<number>(0);
  const arrVideos: VideoObj[] = [
    {
      description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: ['https://staticcf.trepup.com/trepupphotos/67943285-47d8-46e7-b4e6-007d9263ee85.mp4'],
      subtitle: 'By Blender Foundation',
      thumb: 'https://mresize.trepup.com/s3/tu-media-v2/trepupphotos/67943285-47d8-46e7-b4e6-007d9263ee85.jpg',
      title: 'Big Buck Bunny',
    },
    {
      description: 'The first Blender Open Movie from 2006',
      sources: ['https://staticcf.trepup.com/trepupphotos/e647defc-0eb2-4b39-a09a-e09e844a219e.mp4'],
      subtitle: 'By Blender Foundation',
      thumb: 'https://mresize.trepup.com/s3/tu-media-v2/trepupphotos/e647defc-0eb2-4b39-a09a-e09e844a219e.jpg',
      title: 'Elephant Dream',
    },
    {
      description: 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
      sources: ['https://staticcf.trepup.com/videoposts/2d052d1b-e434-4752-a971-da1115594165.mp4'],
      subtitle: 'By Google',
      thumb: 'https://mresize.trepup.com/s3/tu-media-v2/videoposts/2d052d1b-e434-4752-a971-da1115594165.jpeg',
      title: 'For Bigger Blazes',
    },
  ];
  return (
    <View style={[Styles.flex1, {backgroundColor: 'black'}]}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Swiper
        index={index}
        showsPagination={false}
        horizontal={false}
        loop={false}
        onIndexChanged={index => {
          console.log(index);
          setIndex(index);
        }}>
        {arrVideos.map((k: VideoObj, i: number) => {
          return (
            <View key={i} style={[Styles.flex1, Styles.flexAlignCenter, Styles.flexJustifyCenter]}>
              <Image source={{uri: k.thumb}} resizeMode="cover" blurRadius={2} style={[Styles.width100per, Styles.height100per, {opacity: 0.3, position: 'absolute', zIndex: -1, top: 0, left: 0, bottom: 0, right: 0}]} />
              <Video resizeMode="contain" poster={k.thumb} posterResizeMode="cover" key={i} paused={i !== index} source={{uri: k.sources[0]}} style={[Styles.flex1, {position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}]} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default withTheme(ExploreScreen);
