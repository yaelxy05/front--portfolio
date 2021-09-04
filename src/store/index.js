import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Import Middlewares
import contactMiddleware from 'src/middlewares/contactMiddleware';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(applyMiddleware(contactMiddleware));
const store = createStore(reducer, enhancers);
export default store;
