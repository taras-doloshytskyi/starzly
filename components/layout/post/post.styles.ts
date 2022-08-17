import { Colors } from '@enums';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative'
  },

  title__container: {
    position: 'absolute',
    top: 50,

    width: '100%',

    zIndex: 10
  },
  title__text: {
    textAlign: 'center',

    fontSize: 18,

    color: Colors.white,

    textShadowColor: Colors.black,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },

  sidebar: {
    position: 'absolute',
    right: 18,

    bottom: 240,

    flexDirection: 'column'
  },

  sidebar__item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 22
  },

  sidebar__button: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: Colors.transparentBlack,

    justifyContent: 'center',
    alignItems: 'center'
  },

  sidebar__item_text: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',

    marginTop: 9
  },

  sidebar__avatar_image: {
    borderWidth: 2,
    borderColor: Colors.white,
    width: 48,
    height: 48,
    borderRadius: 24
  },

  talent__container: {
    position: 'absolute',
    bottom: 90,
    left: 18,
    right: 18,

    zIndex: 11,

    padding: 22,

    backgroundColor: Colors.transparentBlack,

    borderRadius: 15,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  talent__container_in_cart: {
    backgroundColor: Colors.white,

    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  talent__container_in_cart_title: {
    fontWeight: 'bold',
    fontSize: 18,

    marginLeft: 16
  },

  talent__icon_container: {
    alignItems: 'center'
  },

  talent__icon: {
    width: 64,
    height: 64,

    borderRadius: 32,

    borderWidth: 2,
    borderColor: Colors.pink,

    alignItems: 'center'
  },

  talent__content: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  talent__button: {
    position: 'relative',
    flex: 1,

    maxWidth: 90,

    padding: 18,

    backgroundColor: Colors.pink,

    borderRadius: 8
  },

  talent__button_text: {
    textAlign: 'center',
    textTransform: 'uppercase',

    color: Colors.white,

    fontWeight: 'bold'
  },

  talent__button_underline: {
    position: 'absolute',
    bottom: 2,

    right: 6,
    left: 6,

    height: 4,

    backgroundColor: Colors.transparentBlack,

    borderRadius: 2
  },

  talent__price: {
    fontSize: 16,
    fontWeight: 'bold',

    color: Colors.white
  },

  talent__name: {
    fontSize: 16,
    fontWeight: 'bold',

    color: Colors.white
  },

  talent__bio: {
    fontSize: 12,
    color: Colors.white
  },

  talent__container_with_modal: {
    bottom: -140
  }
});
