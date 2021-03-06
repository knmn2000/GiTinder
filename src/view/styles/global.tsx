import {
  StyleSheet,
  Platform,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

import {TYPOGRAPHY} from './typography';

export const widgetPaddingValue = 16;

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  container: {
    flex: 1,
  },
  pageContainer: {
    padding: 16,
  },
  drawer: {
    flex: 1,
    flexDirection: 'column',
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 3},
    elevation: Platform.OS === 'ios' ? 0 : 3,
  },
});

const ELEMENTS = StyleSheet.create({
  Card: {
    marginBottom: TYPOGRAPHY.ELEMENTS.Card.marginBottom,
  },
  CategoryIcons: {
    alignItems: 'center',
    marginRight: TYPOGRAPHY.ELEMENTS.CategoryIcons.marginRight,
  },
  Chip: {
    backgroundColor: TYPOGRAPHY.COLOR.Primary,
    borderRadius: 16,
    display: 'flex',
    alignSelf: 'flex-start',
    marginTop: 4,
    padding: 8,
  },
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: TYPOGRAPHY.COLOR.Secondary,
      height: TYPOGRAPHY.BUTTON.primary.height,
      borderWidth: TYPOGRAPHY.BUTTON.primary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.primary.borderRadius,
      paddingVertical: TYPOGRAPHY.BUTTON.primary.paddingVertical,
      paddingHorizontal: TYPOGRAPHY.BUTTON.primary.paddingHorizontal,
    },
    primaryText: {
      color: TYPOGRAPHY.COLOR.Primary,
      fontSize: (TYPOGRAPHY.BUTTON.primary.text as TextStyle).fontSize,
    },
    secondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: TYPOGRAPHY.COLOR.Primary,
      backgroundColor: TYPOGRAPHY.COLOR.Default,
      height: TYPOGRAPHY.BUTTON.secondary.height,
      borderWidth: TYPOGRAPHY.BUTTON.secondary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.secondary.borderRadius,
    },
    secondaryText: {
      textAlign: 'center',
      color: TYPOGRAPHY.COLOR.Primary,
      fontSize: (TYPOGRAPHY.BUTTON.secondary.text as TextStyle).fontSize,
    },
    buttonContainer: {
      justifyContent: 'space-around',
      alignSelf: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.55)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      height: Dimensions.get('window').height * 0.12,
    },
    searchButton: {
      marginLeft: 12,
      marginRight: 12,
      backgroundColor: TYPOGRAPHY.COLOR.Secondary,
      borderWidth: 0,
    },
    icon: {},
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const FONTS = StyleSheet.create({
  h1: {
    ...TYPOGRAPHY.FONT.h1,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.DefaultSelected,
  },
  body: {
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Default,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Secondary,
  },
});

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.Primary,
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Primary,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: TYPOGRAPHY.COLOR.DefaultSelected,
      height: TYPOGRAPHY.FONT.input.height,
      borderRadius: TYPOGRAPHY.FONT.input.borderRadius,
      backgroundColor: TYPOGRAPHY.COLOR.Border,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
      paddingHorizontal: TYPOGRAPHY.FONT.input.paddingHorizontal,
    },
    Bold: {
      fontSize: 12,
      textAlign: 'left',
      borderWidth: 1,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      color: TYPOGRAPHY.COLOR.Primary,
    },
  }),
};

const CARD = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: TYPOGRAPHY.BORDER_RADIUS * 2,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.8,
  },
  main: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  bottom: {
    justifyContent: 'space-between',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  bottomText: {
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
    marginTop: 4,
    flex: 1,
  },
  header: {
    ...TYPOGRAPHY.FONT.extraLarge,
    fontWeight: 'bold',
  },
  subheader: {
    ...TYPOGRAPHY.FONT.subheader,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
});

const GLOBAL = {
  LAYOUT,
  ELEMENTS,
  CTA,
  FONTS,
  TEXT,
  TEXT_INPUT,
  CARD,
};

export {GLOBAL};
