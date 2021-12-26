import config from '../../../src/config';
import { jsonToQueryString } from '../utilities/lib';
// import axios from "axios";
import { Linking } from 'react-native';
import axios from 'axios';

const defaultHeaders = () => {
  return {
    Accept: 'application/json',
    'x-host': config.apis.baseUrl,
    'Content-Type': 'application/json',
  };
};

const redirect : string= "https://www.gitinder.com";
const API = {
  // TODO : USE CONFIG TO GET THE BASE URL OF API
  login: ()=>{
    Linking.openURL(`https://github.com/login/oauth/authorize?client_id=512bb3642d63b04a1d2c&redirect_uri=${redirect}`);
  },
  getAccessToken: (code : string)=>{
    axios.post("https://github.com/login/oauth/access_token", {
      client_id : "",
      client_secret: "",
      code,
    })
  }
};

export default API;
