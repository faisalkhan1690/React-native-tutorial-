import { AppRegistry } from 'react-native';
import React from 'react';
import RootReducer from './src/Services/rootreducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import AlbumInfo from './src/Containers/AlbumInfo';


export const store = createStore(
    RootReducer,
    undefined,
    applyMiddleware(thunk),
  );

  const ReduxApp = () => (
    <Provider store={store}>
      <AlbumInfo />
    </Provider>
  );

AppRegistry.registerComponent('TutorialProject', () => ReduxApp);