import config from '../../../src/config';
import { jsonToQueryString } from '../utilities/lib';
// import axios from "axios";
import { Linking } from 'react-native';
import axios from 'axios';
import { accessCodeFetched } from '../../redux/actions/app';
import { IAction } from '../../redux/types/IAction';
import { ApplicationState } from '../../redux/types/stores/app';

const defaultHeaders = () => {
  return {
    Accept: 'application/json',
    'x-host': config.apis.baseUrl,
    'Content-Type': 'application/json',
  };
};

const redirect : string= "https://www.gitinder.com";
const CLIENT_SECRET : (string|undefined) = process.env['GITINDER_SECRET']
const CLIENT_ID: (string|undefined) = process.env['GITINDER_CLIENT']
const API = {
  // TODO : USE CONFIG TO GET THE BASE URL OF API
  login: ()=>{
    Linking.openURL(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}`);
  },
  getAccessToken: (code : string, accessCode: (accessCode: string | void) => IAction<ApplicationState>)=>{
    axios.post("https://github.com/login/oauth/access_token", {
      client_id : CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }).then((data)=>{
      const code = data.data.split('&')[0].split('=')[1];
      accessCode(code);
      })
  }
};

export default API;
