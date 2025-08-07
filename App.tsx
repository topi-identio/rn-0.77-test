/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

function App(): React.JSX.Element {
  const openOverlay = () => {
    Navigation.showOverlay({
      component: {
        id: 'com.myApp.TestComponent',
        name: 'com.myApp.TestComponent',

        passProps: {
          close: () => {
            Navigation.dismissOverlay('com.myApp.TestComponent');
          },
        },

        options: {
          layout: {
            componentBackgroundColor: 'transparent',
          },
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });
  };

  return (
    <View>
      <Text>Navigation test</Text>
      <Button title="Open overlay" onPress={openOverlay} />
      <Button title="Log to console" onPress={() => {console.log('Button pressed');}} />
    </View>
  );
}

export default App;
