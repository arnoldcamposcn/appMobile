import { Provider } from 'react-redux';
import { store } from './src/store/store.ts';
import AppNavigator from './src/navigation/AppNavigator.tsx';

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

export default App;