import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
    <header class="header">
      <div class="header-hero">
        <div class="header-hero-container">
          <h1>Own your conversations.</h1>
          <p>
            Accord is fast, simple and secure messenger
            with minimal code, growing comunity
          </p>
          <div class="header-hero-container-buttons">
            <button class="header-hero-container-buttons-button">Log In</button>
            <button class="header-hero-container-buttons-button">
              Sign Up
            </button>
          </div>
        </div>
        <div class="header-hero-image-container">
          <img
            class="header-hero-image-container-image"
            src="/assets/accord.svg"
            alt=""
          />
        </div>
      </div>
    </header>
);

export default Header;
