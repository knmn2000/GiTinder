import * as React from 'react';
import {View} from 'react-native';

import {GLOBAL} from '../styles/global';
import {CTEXT} from '../elements/custom';
// import router from '../../navigators/router';
// import {Card, Carousel} from '../elements/layout';
import {CARD} from '../elements/card';
// import {BUTTON_DEFAULT} from '../elements/buttons';
import SwipeCards from 'react-native-swipe-cards';
// import router from '../../navigators/router';
// import {OptionsTopBarTitle} from 'react-native-navigation';

interface Props {
  componentId: string;
  title?: string;
}

const data = [
  {text: 'Repo 1', backgroundColor: 'red'},
  {text: 'Repo 2', backgroundColor: 'purple'},
  {text: 'Repo 3', backgroundColor: 'green'},
  {text: 'Repo 4', backgroundColor: 'blue'},
  {text: 'Repo 5', backgroundColor: 'cyan'},
  {text: 'Repo 6', backgroundColor: 'orange'},
];

const Swipable: React.FC<Props> = ({componentId, title}: Props) => {
  return (
    <SwipeCards
      cards={data}
      renderCard={(cardData: {text: string; backgroundColor: string}) => (
        <CARD {...cardData} />
      )}
      renderNoMoreCards={() => {
        <View>
          <CTEXT style={GLOBAL.CTA.Style.primaryText}>No more cards!</CTEXT>
        </View>;
      }}
      handleYup={() => console.log('swiped')}
      handleNope={() => console.log('swiped')}
      handleMaybe={() => console.log('swiped')}
      hasMaybeAction
    />
  );
};

export {Swipable};
