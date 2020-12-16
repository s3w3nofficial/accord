import { h } from "preact";
import { Link } from "preact-router/match";

const Nav = () => (
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-container-banner">
        <a class="nav-container-banner-link">Accord</a>
      </div>
      <ul class="nav-container-menu">
        <li class="nav-container-menu-item">
          <a class="nav-container-menu-item-link" href="">
            Download
          </a>
        </li>
        <li class="nav-container-menu-item">
          <a class="nav-container-menu-item-link" href="a">
            Pricing
          </a>
        </li>
        <li class="nav-container-menu-item">
          <a class="nav-container-menu-item-link" href="b">
            About
          </a>
        </li>
        <li class="nav-container-menu-item">
          <a class="nav-container-menu-item-link" href="c">
            Log In
          </a>
        </li>
        <li class="nav-container-menu-item">
          <a class="nav-container-menu-item-link" href="d">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
