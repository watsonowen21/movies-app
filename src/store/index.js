import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import genreReducer from "./reducers/genre-reducer";
import movieReducer from "./reducers/movie-reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
