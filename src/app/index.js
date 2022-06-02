import React from 'react';
import Routes from '../routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, sagaMiddleware, store} from 'src/redux/store';
import rootSaga from 'src/redux/saga';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
