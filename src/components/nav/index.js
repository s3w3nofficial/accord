import { h } from "preact";
import { Link } from "preact-router/match";

function showMenu(e) {
    console.log('test')
    let nav = document.querySelector('.nav-container-menu')
    nav.style.display = "block"
}

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
      <div class="nav-container-hamburger" onClick={showMenu}>
        <i class="fa fa-bars"></i>
      </div>
      <ul class="nav-container-menu">
        <li class="nav-container-menu-item">
          <Link
            activeClassName="active"
            class="nav-container-menu-item-link"
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li class="nav-container-menu-item">
          <Link
            activeClassName="active"
            class="nav-container-menu-item-link"
            href="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li class="nav-container-menu-item">
          <Link
            activeClassName="active"
            class="nav-container-menu-item-link"
            href="/about"
          >
            About
          </Link>
        </li>
        <li class="nav-container-menu-item">
          <a
            class="nav-container-menu-item-link"
            href="https://github.com/s3w3nofficial/accord"
          >
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
