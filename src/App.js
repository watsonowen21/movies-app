import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import MovieList from "./app/Movies/MovieList";
import GenreList from "./app/Genres/GenreList";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./app/components/NavigationBar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/genres" element={<GenreList />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-center" />
    </Provider>
  );
};

export default App;
