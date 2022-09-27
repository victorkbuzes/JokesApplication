
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/app/store';
import { RootNavigator } from './src/navigation';




export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor = {persistor} >
      <RootNavigator />

      </PersistGate>
 
    </Provider>
 
    

    


  );
}

