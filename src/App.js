import React from 'react';
import { View } from 'react-native';
// communications loop between redux and react cuz redux itself is designed to work with many langs
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from  './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    // provider can only have one direct child but its first child can have more
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList></LibraryList>
      </View>
    </Provider>
  );
};

export default App;
