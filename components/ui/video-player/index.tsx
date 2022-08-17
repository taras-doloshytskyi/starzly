import React, { FC, useCallback, useState } from 'react';
import { View, Pressable } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

import styles from './video-player.styles';
import { useEffect } from 'react';
import { Image } from 'react-native';

type VideoPlayerProps = {
  url: string;
  thumbnail: string;
  isMuted: boolean;
};
export const VideoPlayer: FC<VideoPlayerProps> = ({
  url,
  thumbnail,
  isMuted
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  const [view, setView] = useState<any>(null);

  let myInterval: any = null;

  const video = React.useRef<Video>(null);

  const onPlayTogglePress = () => setIsPlaying((prev) => !prev);

  const startWatching = useCallback(() => {
    if (myInterval) return;

    myInterval = setInterval(() => {
      if (!view) return;

      view?.measure &&
        view?.measure(
          (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number
          ) => {
            setIsFocused(pageY === 0);
          }
        );
    });
  }, [myInterval, view]);

  useEffect(() => {
    isPlaying ? video?.current?.playAsync() : video?.current?.pauseAsync();
  }, [video, isFocused, isPlaying]);

  useEffect(() => {
    isFocused && setIsPlaying(true);
  }, [isFocused]);

  startWatching();

  return (
    <View style={styles.container} ref={(view) => setView(view)}>
      {isFocused ? (
        <Pressable style={styles.container} onPress={onPlayTogglePress}>
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: url }}
            isLooping
            isMuted={isMuted}
            posterSource={{ uri: thumbnail }}
            resizeMode={ResizeMode.COVER}
            onLoad={() => setIsPlaying(true)}
          />
        </Pressable>
      ) : (
        <View style={styles.container}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
        </View>
      )}
    </View>
  );
};
