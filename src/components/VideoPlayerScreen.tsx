import React, {useState, useEffect, useRef} from 'react';
import {View, Image, TouchableNativeFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Video from 'react-native-video';
import {Styles} from '../styles/Styles';
import Slider from 'react-native-slider';
import {Text} from 'react-native-paper';

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

  const viewAnimation = useRef<Animatable.View & View>(null);

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

  useEffect(() => {
    const Animation = () => {
      if (paused) {
        if (viewAnimation && viewAnimation.current && viewAnimation.current.bounceIn) {
          viewAnimation.current.bounceIn(350);
          setTimeout(() => {
            if (viewAnimation && viewAnimation.current && viewAnimation.current.bounceOut) {
              viewAnimation.current.bounceOut(350);
            }
          }, 800);
        }
      } else {
        if (viewAnimation && viewAnimation.current && viewAnimation.current.bounceIn) {
          viewAnimation.current.bounceIn(350);
          setTimeout(() => {
            if (viewAnimation && viewAnimation.current && viewAnimation.current.bounceOut) {
              viewAnimation.current.bounceOut(350);
            }
          }, 800);
        }
      }
    };

    Animation();
  }, [paused, viewAnimation]);

  return (
    <TouchableNativeFeedback onPress={onPaused}>
      <View style={[Styles.flex1, Styles.height100per, Styles.width100per, Styles.flexJustifyCenter]}>
        <Animatable.View ref={viewAnimation} style={[Styles.width64, Styles.height64, Styles.borderRadius32, Styles.positionAbsolute, Styles.flexAlignCenter, Styles.flexAlignSelfCenter, Styles.flexJustifyCenter, Styles.zIndex2, {backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}>
          <Image source={!paused ? require('../../assets/play.png') : require('../../assets/pause.png')} style={[Styles.width20, Styles.height20]} />
        </Animatable.View>
        <View style={[Styles.positionAbsolute, Styles.width48, Styles.flexAlignCenter, Styles.flexJustifyCenter, Styles.zIndex1, Styles.right16, Styles.bottom64]}>
          <Image source={require('../../assets/like.png')} style={[Styles.width36, Styles.height36, Styles.marginStart8]} />
          <Text variant="bodySmall" style={[Styles.marginTop0, Styles.textShadow, {color: colors.onTertiary}]}>
            Like
          </Text>
          <Image source={require('../../assets/like.png')} style={[Styles.width36, Styles.height36, Styles.marginEnd8, Styles.marginTop16, {transform: [{rotateZ: '180deg'}]}]} />
          <Text variant="bodySmall" style={[Styles.marginTop4, Styles.textShadow, {color: colors.onTertiary}]}>
            Dislike
          </Text>
          <Image source={require('../../assets/comment.png')} style={[Styles.width36, Styles.height36, Styles.marginStart8, Styles.marginTop24]} />
          <Text variant="bodySmall" style={[Styles.textShadow, Styles.marginTopMinus2, {color: colors.onTertiary}]}>
            1.4K
          </Text>
          <Image source={require('../../assets/share.png')} style={[Styles.width36, Styles.height36, Styles.marginStart8, Styles.marginTop24]} />
          <Text variant="bodySmall" style={[Styles.textShadow, Styles.marginTopMinus2, {color: colors.onTertiary}]}>
            Share
          </Text>
          <Image source={require('../../assets/remix.png')} style={[Styles.width36, Styles.height36, Styles.marginStart8, Styles.marginTop24]} />
          <Text variant="bodySmall" style={[Styles.textShadow, Styles.marginTopMinus2, {color: colors.onTertiary}]}>
            Remix
          </Text>
          <Image source={{uri: videoThumb}} style={[Styles.width40, Styles.height40, Styles.borderRadius8, Styles.marginTop24]} />
        </View>
        <Image source={{uri: videoThumb}} resizeMode="contain" blurRadius={2} style={[Styles.positionAbsolute, Styles.zIndexMinus1, Styles.top0, Styles.bottom0, Styles.left0, Styles.right0]} />
        <Video onEnd={onEnd} onLoad={onLoad} onLoadStart={onLoadStart} posterResizeMode={'contain'} poster={videoThumb} repeat={true} onProgress={onProgress} paused={paused} ref={videoRef} resizeMode={'contain'} source={{uri: videoURL}} style={[Styles.width100per, Styles.height100per]} />
        <View style={[Styles.height72, Styles.width100per, Styles.positionAbsolute, Styles.bottom0, Styles.flexJustifyStart]}>
          <Slider animateTransitions={true} step={0.01} minimumValue={0} maximumValue={duration} thumbTouchSize={{width: 24, height: 24}} thumbStyle={{width: 14, height: 14}} minimumTrackTintColor={colors.primary} thumbTintColor={colors.primary} maximumTrackTintColor="#828282" value={currentTime} onValueChange={onSeek} trackStyle={[Styles.height2]} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default VideoPlayerScreen;
