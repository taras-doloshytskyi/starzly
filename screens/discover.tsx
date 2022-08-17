import React, { FC, useState, useEffect, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListRenderItem,
  Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { starzlyService } from '@api';

import { CompassIcon } from '@icons';

import { VideoPlayer } from '@ui';

import { BottomTabsScreens, Colors } from '@enums';
import { BottomTabScreen, Video } from '@types';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native';
import { useVideoStore } from '@store';
import { Post } from '@layout';

const DiscoverScreen: FC<BottomTabScreen<BottomTabsScreens.discover>> = ({
  navigation
}) => {
  const { page, videoItems, fetchVideos } = useVideoStore();

  const renderVideo: ListRenderItem<Video> = ({ item, index }) => (
    <Post data={item} />
  );

  const getVideos = async (page: number) => {
    await fetchVideos(page);
  };

  useEffect(() => {
    getVideos(page);
  }, []);

  return (
    <Fragment>
      <FlatList
        data={videoItems}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        decelerationRate="normal"
        onScroll={(event) => {
          const { height } = Dimensions.get('window');
          const { contentOffset } = event.nativeEvent;

          if (videoItems.length - 1 === contentOffset.y / height)
            getVideos(page + 1);
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </Fragment>
  );
};

export { DiscoverScreen };
