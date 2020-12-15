/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Rout from "./App/Contains/Route";

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Rout);