import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Movie from "./app/Movies/Movie";
import Genre from "./app/Genres/Genre";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./app/components/NavigationBar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/genres" element={<Genre />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
