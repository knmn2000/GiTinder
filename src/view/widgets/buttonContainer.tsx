import * as React from 'react';
import {TouchableOpacity, ViewStyle, View} from 'react-native';

import {CTEXT} from '../elements/custom';
import {GLOBAL} from '../styles/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import API from '../../../shared/services/core/api';
export interface Props {}

// TODO: Create a button container which contains the button to fork and star the given repo
const BUTTON_CONTAINER: React.FC<Props> = ({}: Props) => (
  <View style={[GLOBAL.CTA.Style.secondary, GLOBAL.CTA.Style.buttonContainer]}>
    <Icon
      onPress={() => API.login()}
      name="star-o"
      size={22}
      color="#fff"
      style={GLOBAL.CTA.Style.icon}
    />
    {/* TODO */}
    {/* How do you add a "-----" divider here ?!*/}
    <Icon
      onPress={() => console.log('irrr')}
      name="code-fork"
      size={26}
      color="#fff"
    />
  </View>
);

export {BUTTON_CONTAINER};
