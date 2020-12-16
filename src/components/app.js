import { h } from "preact";
import { Router } from "preact-router";

import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import About from '../routes/about';
import Prices from '../routes/prices';
import Contact from '../routes/contact';

const App = () => (
  <div id="app">
    <Nav />
    <Header />
    <main class="main">
      <Router>
        <Home path="/" />
		<Contact path="/contact/" />
		<Prices path="/pricing/" />
		<About path="/about/" />
      </Router>
    </main>
    <Footer />
  </div>
);

export default App;
