import React from "react";
import "./ContactUsScreen.css";

const ContactUsScreen = () => {
  return (
    <div>
      <div className="contact-us-container">
        <div className="container-fluid">
        <h5
            className="card-text"
            style={{ color: "white", textAlign: "center" }}
          >
            Feel free to drop us a line below....!
          </h5>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card ">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        name="Name"
                        required
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="email"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <br />

                    <div className="container text-center ">
                      <button type="Send" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default ContactUsScreen;
