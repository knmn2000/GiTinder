import * as React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {CTEXT} from './custom';
import {GLOBAL} from '../styles/global';

type Callback = () => any;
export interface Props {
  onClick: Callback;
  style?: ViewStyle;
  children: React.ReactElement | string;
}

/**
 * Default Button for the application
 */
const ICON_BUTTON: React.FC<Props> = ({onClick, style, children}: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}>
    {children}
  </TouchableOpacity>
);

export {ICON_BUTTON};
