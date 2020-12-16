import { h } from "preact";

const Prices = () => (
  <>
    <section class="main-pricing">
      <div class="main-pricing-container">
        <div class="main-pricing-container-grid">
          <div class="main-pricing-container-grid-item">
            <h2>Free Tier </h2>
            <h3>Acess to</h3>
            <ul>
              <li>All funtions for personal use</li>
              <li>Automatic updates to new versions</li>
              <li>Bug Fixes</li>
            </ul>
            <button>Contact Us</button>
          </div>
          <div class="main-pricing-container-grid-item">
            <h2>Profesional tier - $10/month </h2>

            <h3>Acess to</h3>
            <ul>
              <li>all functions from free tier</li>
              <li>permission to use accord in bussiness</li>
            </ul>
            <button>Contact Us</button>
          </div>
          <div class="main-pricing-container-grid-item">
            <h2>Supporter tier - $30/month </h2>

            <h3>Acess to</h3>
            <ul>
              <li>all functions from Profesional tire</li>
              <li>direct communication with developers</li>
              <li>vote on new functions</li>
            </ul>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Prices;
