import {Provider} from 'react-redux'
import store from '../redux/configureStore';

const ProviderWrapper = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default ProviderWrapper;
