import * as React from 'react';
import {SafeAreaView, View, TextInput, Keyboard} from 'react-native';

import {GLOBAL} from '../../styles/global';
import {TYPOGRAPHY} from '../../styles/typography';
import {CTEXT} from '../../elements/custom';
import {BUTTON_DEFAULT} from '../../elements/buttons';
import {ICON_BUTTON} from '../../elements/iconButton';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

interface Props {}

const DRAWER: React.FC<Props> = () => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <View style={(GLOBAL.LAYOUT.pageContainer, GLOBAL.LAYOUT.drawer)}>
      <CTEXT
        style={[
          {
            ...GLOBAL.CTA.Style.secondaryText,
            marginTop: 12,
            fontSize: 24,
          },
        ]}>
        Search
      </CTEXT>
      <TextInput
        style={{
          ...GLOBAL.TEXT_INPUT.Style.Default,
          margin: 12,
        }}
        placeholder="Search Topics"
        value="brr"
        onChangeText={() => {
          console.log('focus');
        }}
      />
      <ICON_BUTTON onClick={() => {}} style={GLOBAL.CTA.Style.searchButton}>
        <Icon name="search" size={22} color="#fff" />
      </ICON_BUTTON>
    </View>
  </SafeAreaView>
);

export default DRAWER;
