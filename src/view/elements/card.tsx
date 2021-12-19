import * as React from 'react';
import {View, ViewStyle} from 'react-native';

import {CTEXT} from './custom';
import {GLOBAL} from '../styles/global';

export interface Props {
  text: string;
  backgroundColor: string;
  style?: ViewStyle;
}

/**
 * Default Button for the application
 */
const CARD: React.FC<Props> = ({text, backgroundColor}: Props) => (
  <View style={[GLOBAL.CARD.card, {backgroundColor: backgroundColor}]}>
    <CTEXT style={GLOBAL.CTA.Style.primaryText}>{text}</CTEXT>
  </View>
);

export {CARD};
