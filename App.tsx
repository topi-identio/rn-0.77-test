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
  const openModal = () => {
    Navigation.showModal({
      component: {
        id: 'com.myApp.TestComponent',
        name: 'com.myApp.TestComponent',

        passProps: {
          close: () => {
            Navigation.dismissModal('com.myApp.TestComponent');
          },
        },

        options: {
          animations: {
            showModal: {
              enter: {
                alpha: {
                  from: 0,
                  to: 1,
                  duration: 300,
                },
              },
            },
            dismissModal: {
              exit: {
                alpha: {
                  from: 1,
                  to: 0,
                  duration: 300,
                },
              },
            },
          },
        },
      },
    });
  };

  return (
    <View>
      <Text>Navigation test</Text>
      <Button title="Open modal" onPress={openModal} />
    </View>
  );
}

export default App;
