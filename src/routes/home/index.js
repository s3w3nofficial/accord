import { h } from "preact";

const Home = () => (
  <>
    <section class="main-about">
      <div class="main-about-container">
        <p>
          Accord is a messenger that gives you the privacy you expect from a
          conversation in your own home, but with everyone across the globe.
        </p>
      </div>
    </section>
    <section class="main-features">
      <div class="main-features-feature">
        <div class="main-features-feature-content">
          <h3>Accord keeps your data personal</h3>
          <p>
            Accord is running in secure cloud, but if you still want more
            security you can just download it and host it yourself
          </p>
          <a href="">
            Learn more <span>></span>
          </a>
        </div>
        <div class="main-features-feature-image">
          <img
            src="https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="main-features-feature">
        <div class="main-features-feature-content">
          <h3>Accord is an Open Source project</h3>
          <p>
            Accord is running in secure cloud, but if you still want more
            security you can just download it and host it yourself
          </p>
          <a href="">
            Learn more <span>></span>
          </a>
        </div>
        <div class="main-features-feature-image">
          <img
            src="https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
      </div>
      <div class="main-features-feature">
        <div class="main-features-feature-content">
          <h3>Accord keeps your data personal</h3>
          <p>
            Accord is running in secure cloud, but if you still want more
            security you can just download it and host it yourself
          </p>
          <a href="">
            Learn more <span>></span>
          </a>
        </div>
        <div class="main-features-feature-image">
          <img
            src="https://images.unsplash.com/photo-1606166325683-e6deb697d301?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="main-trynow">
      <div class="main-trynow-container">
        <h1>Download accord now!</h1>
        <div class="main-trynow-container-buttons">
          <a href="https://github.com/s3w3nofficial/accord/archive/master.zip">
            <button class="main-trynow-container-buttons-button">
              Download
            </button>
          </a>
          <button class="main-trynow-container-buttons-button">
            Support Us
          </button>
        </div>
      </div>
    </section>
  </>
);

export default Home;
