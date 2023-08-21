import React, {useState, useEffect, useRef} from 'react';
import {View, Image, TouchableNativeFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Video from 'react-native-video';
import {Styles} from '../styles/Styles';
import {Text} from 'react-native-paper';

interface VideoPlayerProps {
  vpIndex: number;
  videoURL: string;
  videoThumb: string;
  videoRef: any;
  colors: any;
  index: number;
  setVideoCurrentTime: any;
  setMaxTime: any;
  currentPlayerRef: any;
}

const VideoPlayerScreen = ({vpIndex, videoURL, videoThumb, videoRef, colors, index, setVideoCurrentTime, setMaxTime, currentPlayerRef}: VideoPlayerProps) => {
  // The video we will play on the player.
  const [paused, setPaused] = useState(vpIndex !== index);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const viewAnimation = useRef<Animatable.View & View>(null);

  const onPaused = () => setPaused(!paused);

  const onProgress = (data: any) => {
    if (!isLoading && setVideoCurrentTime) {
      setVideoCurrentTime[1](data.currentTime + 1);
    }
  };

  const onLoad = (data: any) => {
    if (vpIndex === index) {
      setMaxTime[1](Math.round(data.duration));
    }
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    if (setVideoCurrentTime) {
      setVideoCurrentTime[1](setMaxTime[0]);
    }
  };

  useEffect(() => {
    if (vpIndex === index) {
      currentPlayerRef[1](videoRef);
    }
  }, [currentPlayerRef, videoRef, vpIndex, index]);

  useEffect(() => {
    setPaused(vpIndex !== index);
  }, [vpIndex, index]);

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
      <View style={[Styles.flex1, Styles.width100per, Styles.flexJustifyCenter]}>
        <Animatable.View ref={viewAnimation} style={[Styles.width64, Styles.height64, Styles.borderRadius32, Styles.positionAbsolute, Styles.flexAlignCenter, Styles.flexAlignSelfCenter, Styles.flexJustifyCenter, Styles.zIndex2, Styles.backgroundWithOpacity]}>
          <Image source={!paused ? require('../../assets/play.png') : require('../../assets/pause.png')} style={[Styles.width20, Styles.height20]} />
        </Animatable.View>
        <View style={[Styles.positionAbsolute, Styles.width48, Styles.flexAlignCenter, Styles.flexJustifyCenter, Styles.zIndex1, Styles.right16, Styles.bottom72]}>
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
      </View>
    </TouchableNativeFeedback>
  );
};

export default VideoPlayerScreen;
