import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header class="header">
    <div class="header-hero">
      <div class="header-hero-container">
        <h1>Own your conversations.</h1>
        <p>
          Accord is fast, simple and secure messenger with minimal code, with
          growing comunity
        </p>
        <div class="header-hero-container-buttons">
          <a href="https://github.com/s3w3nofficial/accord/archive/master.zip">
            <button class="header-hero-container-buttons-button">
              Download
            </button>
          </a>
          <a href="https://github.com/s3w3nofficial/accord">
            <button class="header-hero-container-buttons-button">
              Visit github <i class="fa fa-github"></i>
            </button>
          </a>
        </div>
      </div>
      <div class="header-hero-image-container">
        <img
          class="header-hero-image-container-image"
          src="./assets/accord.svg"
          alt=""
        />
      </div>
    </div>
  </header>
);

export default Header;
