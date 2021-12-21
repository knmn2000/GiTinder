import * as React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {CTEXT} from './custom';
import {GLOBAL} from '../styles/global';

type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
}

// TODO: Create a button container which contains the button to fork and star the given repo
const BUTTON_DEFAULT: React.FC<Props> = ({title, onClick, style}: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    <CTEXT style={GLOBAL.CTA.Style.primaryText}>{title}</CTEXT>
  </TouchableOpacity>
);

export {BUTTON_DEFAULT};
