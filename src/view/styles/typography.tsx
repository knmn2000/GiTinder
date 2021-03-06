const BORDER_RADIUS = 5;
const COLOR = {
  // CTA
  Primary: '#1C1E1F',
  Secondary: '#399BE0',
  Default: '#F9F9F9',
  DefaultSelected: '#222222',
  Border: '#E7E7E8',
  Success: '#2BC480',
  Warning: '#D91E5B',

  // Status Bar
  StatusBar: 'transparent',
};

const FONT = {
  Primary: 'Helvetica',
  h1: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 36,
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 12,
  },
  subheader: {
    fontSize: 16,
    // marginBottom: 4,
    // paddingBottom: 4,
  },
  extraLarge: {
    fontSize: 36,
    // marginBottom: 10,
    // paddingBottom: 10,
  },
};

const BUTTON = {
  radius: 5,
  primary: {
    height: 48,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS * 2,
    paddingVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 48,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    text: {
      fontSize: 14,
    },
  },
};

const ELEMENTS = {
  CategoryIcons: {marginRight: 20},
  Card: {marginBottom: 30},
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  ELEMENTS,
  BORDER_RADIUS,
};

export {TYPOGRAPHY};
