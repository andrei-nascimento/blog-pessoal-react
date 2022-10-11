import { tokensReducer } from './tokens/tokenReducer';
import { createStore } from "redux";

const store = createStore(tokensReducer)

export default store