import { h } from "preact";
import { Link } from "preact-router/match";

const Nav = () => (
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-container-banner">
        <Link
          activeClassName="active"
          class="nav-container-banner-link"
          href="/"
        >
          Accord
        </Link>
      </div>
      <div class="nav-container-hamburger">
        <i class="fa fa-bars"></i>
      </div>
      <ul class="nav-container-menu">
        <li class="nav-container-menu-item">
          <Link
            activeClassName="active"
            class="nav-container-menu-item-link"
            href="/profile"
          >
            Download
          </Link>
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
          <a class="nav-container-menu-item-link" href="https://github.com/s3w3nofficial/accord">
            <button class="nav-container-menu-item-link-button">
              Visit Github <i class="fa fa-github" />
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
