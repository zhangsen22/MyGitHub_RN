/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import fetchDemoPage from './js/fetchDemoPage';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import LoginPage from './js/expend/dao/LoginPage';

AppRegistry.registerComponent(appName, () => LoginPage);
