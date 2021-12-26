/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import App from './src/navigators';
import {decode, encode} from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

App();
