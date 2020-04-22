import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import pokemonPageReducer from './reducers/pokemonPageReducer';
import { watchGetPokemons } from '../sagas/pollingSaga';


const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  pokemonPage: pokemonPageReducer,
});
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunkMiddleware),
));
sagaMiddleware.run(watchGetPokemons);

// eslint-disable-next-line no-undef
window.store = store;

export default store;
