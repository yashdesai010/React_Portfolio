import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import { toast } from "react-toastify";
import 'react-awesome-button/dist/styles.css';

class Intro extends React.Component {
  showToast = () => {
    toast.success("For More Incredable details Use Navbar WAIT FOR IT");


    setTimeout(() => {
      toast.info("Show after 1 second", { autoClose: 3000 });

      setTimeout(() => {
        window.location.href = "/Projects";
      }, 4000); // Redirect after 1 second
    }, 3000); // Show the initial toast after 1 second
  };

  render() {
    
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              {/* Add a CSS class to center and style the text */}
              <h1 className="intro-title mb-4 text-white">Hello, I am Yash Desai</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider text-white center-text">
                  <Typed
                    strings={[
                      "Software Engineer With One year of experience"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
              <div
  className="btn btn-primary btn-js-scroll px-4 text-white1 attractive-button"
  role="button"
  onClick={this.showToast}
>
  View My Work
</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
