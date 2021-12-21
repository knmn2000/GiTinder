import * as React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import {CTEXT} from './custom';
import {GLOBAL} from '../styles/global';
import {TYPOGRAPHY} from '../styles/typography';

export interface Props {
  text: string;
  style?: ViewStyle;
}

const CHIP: React.FC<Props> = ({text, style}: Props) => (
  <TouchableOpacity style={[GLOBAL.ELEMENTS.Chip, GLOBAL.LAYOUT.shadow, style]}>
    <CTEXT
      style={[
        GLOBAL.CTA.Style.primaryText,
        {color: TYPOGRAPHY.COLOR.Default, alignSelf: 'center'},
      ]}>
      {text}
    </CTEXT>
  </TouchableOpacity>
);

export {CHIP};
