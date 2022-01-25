import { createStore } from 'redux';
import { reducers } from '../src/redux/configureStore';
import { Provider } from 'react-redux';

const store = createStore(reducers);

export const withProvider = (story) => (
    <Provider store={store}>
        { story() }
    </Provider>
)