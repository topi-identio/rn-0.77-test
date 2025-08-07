/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import TestComponent from './TestComponent';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('com.myApp.TestComponent', () => TestComponent);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.myApp.WelcomeScreen',
                        },
                    },
                ],
            },
        },
    });
});
