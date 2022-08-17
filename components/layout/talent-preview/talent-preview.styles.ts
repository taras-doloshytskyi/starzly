import { Colors } from '@enums';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    zIndex: 200,

    paddingHorizontal: 18,
    paddingBottom: 60
  },

  talent__carousel: {
    marginVertical: 20,

    justifyContent: 'center',

    borderRadius: 8,

    overflow: 'hidden'
  },

  talent__head: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  talent__head_title: {
    color: Colors.gray,
    fontSize: 12,

    fontWeight: 'bold'
  },

  talent__head_label: {
    paddingHorizontal: 4,
    paddingVertical: 2,

    borderRadius: 4,

    backgroundColor: Colors.pink
  },

  talent__head_label_title: {
    color: Colors.white,
    fontSize: 12
  },

  talent__name: {
    marginTop: 8,
    marginRight: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },

  talent__name_title: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  talent__price: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  talent__price_was: {
    textDecorationLine: 'line-through',

    fontSize: 20,
    fontWeight: 'bold'
  },

  talent__price_now: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.pink,

    marginLeft: 16
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',

    backgroundColor: Colors.transparentBlack
  },

  talent__content: {},

  talent__content_user: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  talent__content_avatar: {
    width: 53,
    height: 53,

    borderRadius: 27,

    marginRight: 14
  },

  talent__content_user_data: {
    flexDirection: 'column'
  },

  talent__content_user_name: {
    fontSize: 16,
    fontWeight: 'bold',

    marginBottom: 6
  },

  talent__content_location: {
    fontSize: 16
  },

  talent__content_left: {
    flexDirection: 'row'
  },
  talent__content_right: {},

  talent__content_rating: {
    flexDirection: 'row'
  },

  talent__content_rating_value: {
    marginLeft: 8,

    fontSize: 14,
    fontWeight: 'bold'
  },

  talent__content_stars: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  talent__content_description: {
    marginTop: 17
  },

  talent__content_description_title: {
    fontSize: 16,
    fontWeight: 'bold',

    marginBottom: 14
  },

  talent__content_description_text: {
    color: Colors.gray
  },

  talent__content__footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 33
  },

  talent__content_footer_add: {
    paddingHorizontal: 10,
    paddingVertical: 14,

    marginRight: 11,

    maxWidth: 140,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: Colors.black,

    borderRadius: 8
  },

  talent__content_footer_add_to_cart: {
    flex: 1,

    paddingHorizontal: 10,
    paddingVertical: 14,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,

    backgroundColor: Colors.pink
  },

  talent__content_footer_add_text: {
    color: Colors.white,
    marginLeft: 10,

    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
