import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/navigator';
import store from './store';

function App() {

  useEffect(() => {

    if (!__DEV__) {
      console.log = () => { };
    }
  }, []);

  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <MainNavigator />
          <FlashMessage position={'top'} />
        </SafeAreaView>
      </View>
    </Provider>
  );
}

export default App;

