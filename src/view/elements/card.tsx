import * as React from 'react';
import {View, ViewStyle} from 'react-native';

import {CTEXT} from './custom';
import {GLOBAL} from '../styles/global';

export interface Props {
  text: string;
  backgroundColor: string;
  style?: ViewStyle;
}

const CARD: React.FC<Props> = ({text, backgroundColor}: Props) => (
  <View style={[GLOBAL.CARD.card, {backgroundColor: backgroundColor}]}>
    <View style={[GLOBAL.CARD.main]}>
      <CTEXT style={[GLOBAL.FONTS.h1, GLOBAL.CTA.Style.primaryText]}>
        {text}
      </CTEXT>
    </View>
    <View style={[GLOBAL.CARD.bottom]}>
      <CTEXT>align bottom</CTEXT>
    </View>
  </View>
);

export {CARD};
