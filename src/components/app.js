import { h } from "preact";
import { Router } from "preact-router";

import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <Nav />
    <Header />
    <main class="main">
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </main>
    <Footer />
  </div>
);

export default App;
