import React, {useState, useRef} from 'react';
import {View, Platform, Image} from 'react-native';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import Video from 'react-native-video';
import {Styles} from '../styles/Styles';

interface VideoPlayerProps {
  videoURL: string;
  videoThumb: string;
}

const VideoPlayer = ({videoURL, videoThumb}: VideoPlayerProps) => {
  // The video we will play on the player.
  const videoPlayer = useRef<any>();
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);

  const onSeek = (seek: number) => {
    videoPlayer.current?.seek(seek);
  };

  const onSeeking = (currentVideoTime: number) => setCurrentTime(currentVideoTime);

  const onPaused = (newState: PLAYER_STATES) => {
    setPaused(!paused);
    setPlayerState(newState);
  };

  const onReplay = () => {
    videoPlayer.current?.seek(0);
    setCurrentTime(0);
    if (Platform.OS === 'android') {
      setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
    } else {
      setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
    }
  };

  const onProgress = (data: any) => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data: any) => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED);
    setCurrentTime(duration);
  };

  return (
    <View style={[Styles.flex1, Styles.height100per, Styles.width100per]}>
      <Image source={{uri: videoThumb}} resizeMode="contain" blurRadius={2} style={[{position: 'absolute', zIndex: -1, top: 0, left: 0, bottom: 0, right: 0}]} />
      <Video onEnd={onEnd} onLoad={onLoad} onLoadStart={onLoadStart} posterResizeMode={'contain'} poster={videoThumb} onProgress={onProgress} paused={paused} ref={videoPlayer} resizeMode={'contain'} source={{uri: videoURL}} style={[Styles.width100per, Styles.height100per]} />
      <MediaControls isFullScreen={true} duration={duration} isLoading={isLoading} progress={currentTime} onPaused={onPaused} onReplay={onReplay} onSeek={onSeek} onSeeking={onSeeking} mainColor={'red'} playerState={playerState} sliderStyle={{containerStyle: {}, thumbStyle: {}, trackStyle: {}}} />
    </View>
  );
};

export default VideoPlayer;
