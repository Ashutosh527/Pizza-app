import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO PIZZA LOVE</h1>
            <p>
            End All Your Hunger.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://th.bing.com/th/id/OIP.SgB8sYIxkxJj-p3Vs8MaCgHaE8?w=279&h=186&c=7&o=5&pid=1.7" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
