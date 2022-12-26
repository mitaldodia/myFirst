// import reducers  from "./reducers/index";
import { legacy_createStore as createStore} from 'redux';
import rootReducer from "./reducers/IndexR";

const Store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;