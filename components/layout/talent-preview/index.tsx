import * as React from 'react';
import { FC, useRef, useCallback, useEffect, Fragment } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import BottomSheetWrapper, {
  BottomSheetBackdrop,
  BottomSheetView
} from '@gorhom/bottom-sheet';
import Carousel from 'react-native-reanimated-carousel';

import { snapPoints } from './talent-preview.constants';

import styles from './talent-preview.styles';
import { useVideoStore } from '@store';
import { AddVideoIcon, CartIcon, StarIcon } from '@icons';
import { Colors } from '@enums';

type TalentPreviewProps = {
  talentId: number;
  opened: boolean;
  onClose: () => void;
};
const TalentPreview: FC<TalentPreviewProps> = ({
  talentId,
  opened,
  onClose
}) => {
  const { chosenTalent, fetchTalent } = useVideoStore();

  const sheetRef = useRef<BottomSheetWrapper>(null);

  let carouselRef = null;

  const width = Dimensions.get('window').width;

  const onCloseButtonPress = () => sheetRef.current?.close();

  const BackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const getCarouselPhotos: () => string[] = () => {
    return chosenTalent
      ? new Array(5).fill(chosenTalent.avatar_url)
      : ([] as string[]);
  };

  useEffect(() => {
    opened && fetchTalent(talentId);

    console.log('fetching');
  }, [opened]);

  return (
    <BottomSheetWrapper
      ref={sheetRef}
      index={opened ? 0 : -1}
      snapPoints={snapPoints}
      onClose={onClose}
      backdropComponent={BackDrop}
      enablePanDownToClose
      style={styles.container}
    >
      <BottomSheetView style={styles.container}>
        {opened ? (
          <Fragment>
            <View style={styles.talent__carousel}>
              <Carousel
                width={width}
                height={width / 2}
                pagingEnabled
                enableSnap
                data={getCarouselPhotos()}
                renderItem={({ item, index }) => (
                  <View style={{ flex: 1 }}>
                    <Image style={{ flex: 1 }} source={{ uri: item }} />
                  </View>
                )}
              />
            </View>

            <View style={styles.talent__head}>
              <View>
                <Text style={styles.talent__head_title}>
                  {chosenTalent?.bio_en.slice(0, 10)}...
                </Text>
              </View>

              <View style={styles.talent__head_label}>
                <Text style={styles.talent__head_label_title}>EXCLUSIVE</Text>
              </View>
            </View>

            <View style={styles.talent__name}>
              <Text style={styles.talent__name_title}>
                {chosenTalent?.name_en}
              </Text>

              <View style={styles.talent__price}>
                <Text style={styles.talent__price_was}>
                  $ {chosenTalent?.cost_ios}
                </Text>

                <Text style={styles.talent__price_now}>
                  $ {chosenTalent?.cost}
                </Text>
              </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.talent__content}>
              <View style={styles.talent__content_user}>
                <View style={styles.talent__content_left}>
                  <Image
                    style={styles.talent__content_avatar}
                    source={{ uri: chosenTalent?.avatar_url }}
                  />
                  <View style={styles.talent__content_user_data}>
                    <Text style={styles.talent__content_user_name}>
                      {' '}
                      by user name
                    </Text>
                    <Text style={styles.talent__content_location}>Egypt</Text>
                  </View>
                </View>

                <View style={styles.talent__content_right}>
                  <View style={styles.talent__content_stars}>
                    <StarIcon color={Colors.orange} />
                    <Text style={styles.talent__content_rating_value}>
                      {(+chosenTalent?.average_rating!).toFixed(1)}
                    </Text>
                  </View>
                  <Text>{chosenTalent?.total_feedbacks} total reviews</Text>
                </View>
              </View>

              <View style={styles.talent__content_description}>
                <Text style={styles.talent__content_description_title}>
                  Description
                </Text>
                <Text style={styles.talent__content_description_text}>
                  {chosenTalent?.bio_en.slice(0, 200)}...
                </Text>
              </View>

              <View style={styles.talent__content__footer}>
                <TouchableOpacity style={styles.talent__content_footer_add}>
                  <AddVideoIcon color={Colors.white} />
                  <Text style={styles.talent__content_footer_add_text}>
                    Add video review
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.talent__content_footer_add_to_cart}
                >
                  <CartIcon color={Colors.white} />
                  <Text style={styles.talent__content_footer_add_text}>
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Fragment>
        ) : null}
      </BottomSheetView>
    </BottomSheetWrapper>
  );
};

export { TalentPreview };
