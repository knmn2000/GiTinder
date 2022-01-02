import * as React from 'react';
import {Linking} from 'react-native';

import {GLOBAL} from '../styles/global';
import {CTEXT} from '../elements/custom';
import store from '../../../shared/redux/store';
// import router from '../../navigators/router';
// import {Card, Carousel} from '../elements/layout';
import {CARD} from './card';
// import {BUTTON_DEFAULT} from '../elements/buttons';
import SwipeCards from 'react-native-swipe-cards';
import API from '../../../shared/services/core/api';
// import router from '../../navigators/router';
// import {OptionsTopBarTitle} from 'react-native-navigation';

interface Props {
  componentId: string;
  title?: string;
}

const data = [
  {text: 'Repo 1', backgroundColor: '#e6e8eb'},
  {text: 'Repo 2', backgroundColor: '#e6e8eb'},
  {text: 'Repo 3', backgroundColor: '#e6e8eb'},
  {text: 'Repo 4', backgroundColor: '#e6e8eb'},
  {text: 'Repo 5', backgroundColor: '#e6e8eb'},
  {text: 'Repo 6', backgroundColor: '#e6e8eb'},
];

const Swipable: React.FC<Props> = ({componentId, title}: Props) => {
  const func = () => console.log(store.getState());
  return (
    <SwipeCards
      cards={data}
      loop={true}
      key={componentId}
      renderCard={(cardData: {text: string; backgroundColor: string}) => (
        <CARD {...cardData} />
      )}
      handleYup={() => console.log('swiped')}
      handleNope={() => func()}
      handleMaybe={() => console.log('swiped')}
    />
  );
};

export {Swipable};
