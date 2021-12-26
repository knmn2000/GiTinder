import * as React from 'react';
import {Linking, View, ViewStyle} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {CTEXT} from '../elements/custom';
import {CHIP} from '../elements/chip';
import {GLOBAL} from '../styles/global';
import {BUTTON_CONTAINER} from './buttonContainer';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export interface Props {
  text: string;
  backgroundColor: string;
  style?: ViewStyle;
}

const CARD: React.FC<Props> = ({text, backgroundColor}: Props) => {
  return (
    <View style={[GLOBAL.CARD.card, {backgroundColor: backgroundColor}]}>
      <View style={[{padding: 10}]}>
        <BUTTON_CONTAINER />
      </View>
      <View style={[GLOBAL.CARD.main]}>
        <CTEXT style={[GLOBAL.FONTS.h1, GLOBAL.CTA.Style.primaryText]}>
          {text}
        </CTEXT>
      </View>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.40)']}
        style={[GLOBAL.CARD.bottom]}>
        <CTEXT style={[GLOBAL.CARD.bottomText, GLOBAL.CARD.header]}>
          facebook/react
        </CTEXT>
        <CTEXT style={[GLOBAL.CARD.bottomText, GLOBAL.CARD.subheader]}>
          A declarative, efficient, and flexible JavaScript library for building
          user interfaces.
        </CTEXT>
        <CHIP text="JavaScript" />
        {/* <View>
        <CTEXT style={[GLOBAL.CARD.bottomText]}>JavaScript</CTEXT>
      </View> */}
      </LinearGradient>
    </View>
  );
};

export {CARD};
