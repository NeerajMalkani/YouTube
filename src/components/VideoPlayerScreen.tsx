import React, {useState} from 'react';
import {View, Platform, Image, TouchableNativeFeedback} from 'react-native';
import Video from 'react-native-video';
import {Styles} from '../styles/Styles';
import Slider from 'react-native-slider';

interface VideoPlayerProps {
  videoURL: string;
  videoThumb: string;
  videoRef: any;
  colors: any;
}

const VideoPlayerScreen = ({videoURL, videoThumb, videoRef, colors}: VideoPlayerProps) => {
  // The video we will play on the player.
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onSeek = (seek: number) => {
    videoRef.current?.seek(seek);
  };

  const onPaused = () => {
    setPaused(!paused);
  };

  const onProgress = (data: any) => {
    if (!isLoading) {
      setCurrentTime(data.currentTime + 1);
    }
  };

  const onLoad = (data: any) => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setCurrentTime(duration);
  };

  return (
    <TouchableNativeFeedback onPress={onPaused}>
      <View style={[Styles.flex1, Styles.height100per, Styles.width100per]}>
        <View style={[Styles.positionAbsolute, Styles.width32, Styles.height64, {right: 16, zIndex: 1, bottom: 72}]}>
          <Image source={require('../../assets/like.png')} style={[Styles.width32, Styles.height32]} />
          <Image source={require('../../assets/dislike.png')} style={[Styles.width32, Styles.height32, Styles.marginTop16]} />
        </View>
        <Image source={{uri: videoThumb}} resizeMode="contain" blurRadius={2} style={[{position: 'absolute', zIndex: -1, top: 0, left: 0, bottom: 0, right: 0}]} />
        <Video onEnd={onEnd} onLoad={onLoad} onLoadStart={onLoadStart} posterResizeMode={'contain'} poster={videoThumb} repeat={true} onProgress={onProgress} paused={paused} ref={videoRef} resizeMode={'contain'} source={{uri: videoURL}} style={[Styles.width100per, Styles.height100per]} />
        <View style={[Styles.height72, Styles.width100per, Styles.positionAbsolute, Styles.bottom0, Styles.flexJustifyStart]}>
          <Slider animateTransitions={true} step={0.01} minimumValue={0} maximumValue={duration} minimumTrackTintColor={colors.primary} thumbTintColor={colors.primary} maximumTrackTintColor="#dedede" value={currentTime} onValueChange={onSeek} trackStyle={{height: 2}} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default VideoPlayerScreen;
