/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import DaveApp from './app/index';

AppRegistry.registerComponent(appName, () => DaveApp);
