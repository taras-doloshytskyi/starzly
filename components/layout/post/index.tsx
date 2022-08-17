import { FC, useState, useEffect, Fragment } from 'react';
import { View, TouchableOpacity, Pressable, Text, Image } from 'react-native';

import { VideoPlayer } from '@ui';
import { LikeIcon, CommentIcon, MuteIcon, CheckmarkIcon } from '@icons';

import { TalentPreview } from './../talent-preview';

import { Video } from '@types';
import { Colors } from '@enums';

import styles from './post.styles';

type PostProps = {
  data: Video;
};
export const Post: FC<PostProps> = ({ data }) => {
  const {
    from,
    to,
    talent: {
      id: talentId,
      name_en,
      bio_en,
      cost_ios,
      avatar_url,
      user: { avatar_url: userAvatar }
    },
    url,
    thumbnail
  } = data;

  const [likes, setLikes] = useState(123);
  const [comments, setComments] = useState(123);

  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isTalentOpened, setIsTalentOpened] = useState(false);

  const onLikeToggle = () => setIsLiked((prev) => !prev);
  const oMuteToggle = () => setIsMuted((prev) => !prev);

  const onTalentClose = () => setIsTalentOpened(false);
  const onTalentOpen = () => setIsTalentOpened(true);

  const addToCart = () => setIsInCart(true);

  useEffect(() => {
    setLikes((prev) => (isLiked ? prev + 1 : prev - 1));
  }, [isLiked]);

  return (
    <View style={styles.container}>
      <View style={styles.title__container}>
        <Text style={styles.title__text}>
          {from} to {to === from ? 'All users' : to}
        </Text>
      </View>

      <VideoPlayer {...{ url, thumbnail, isMuted }} />

      <Pressable
        style={[
          styles.talent__container,
          isInCart && styles.talent__container_in_cart,
          isTalentOpened && styles.talent__container_with_modal
        ]}
        onPress={onTalentOpen}
      >
        {!isInCart ? (
          <Fragment>
            <View style={styles.talent__icon_container}>
              <Image style={styles.talent__icon} source={{ uri: avatar_url }} />
            </View>

            <View style={styles.talent__content}>
              <Text style={styles.talent__price}>$ {cost_ios}</Text>

              <Text style={styles.talent__name}>{name_en}</Text>

              <Text style={styles.talent__bio}>{bio_en.slice(0, 15)}...</Text>
            </View>

            <View>
              <TouchableOpacity
                style={styles.talent__button}
                onPress={addToCart}
              >
                <Text style={styles.talent__button_text}>Add to cart</Text>

                <View style={styles.talent__button_underline} />
              </TouchableOpacity>
            </View>
          </Fragment>
        ) : (
          <Fragment>
            <CheckmarkIcon color={Colors.green} />

            <Text style={styles.talent__container_in_cart_title}>
              Added to cart
            </Text>
          </Fragment>
        )}
      </Pressable>

      <View style={styles.sidebar}>
        <View style={styles.sidebar__item}>
          <TouchableOpacity
            style={styles.sidebar__button}
            onPress={onLikeToggle}
          >
            <LikeIcon fill={isLiked ? Colors.pink : Colors.white} />
          </TouchableOpacity>

          <Text style={styles.sidebar__item_text}>{likes}</Text>
        </View>

        <View style={styles.sidebar__item}>
          <TouchableOpacity style={styles.sidebar__button}>
            <CommentIcon />
          </TouchableOpacity>

          <Text style={styles.sidebar__item_text}>{comments}</Text>
        </View>

        <View style={styles.sidebar__item}>
          <TouchableOpacity style={[styles.sidebar__button]}>
            <Image
              style={styles.sidebar__avatar_image}
              source={{ uri: userAvatar }}
              resizeMethod="scale"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.sidebar__item}>
          <TouchableOpacity
            style={styles.sidebar__button}
            onPress={oMuteToggle}
          >
            <MuteIcon color={isMuted ? Colors.pink : Colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <TalentPreview
        talentId={talentId}
        opened={isTalentOpened}
        onClose={onTalentClose}
      />
    </View>
  );
};
