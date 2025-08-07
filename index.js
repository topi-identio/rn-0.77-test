/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import TestComponent from './TestComponent';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('com.myApp.TestComponent', () => TestComponent);

Navigation.events().registerAppLaunchedListener(() => {
  (async () => {
    await Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                id: 'com.myApp.WelcomeScreen',
                name: 'com.myApp.WelcomeScreen',
              },
            },
          ],
        },
      },
    });
  })();
});
