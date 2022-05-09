import React from 'react';
import Routes from '../routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, sagaMiddleware, store} from 'src/redux/store';
import rootSaga from 'src/redux/saga';
const App = () => {
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
