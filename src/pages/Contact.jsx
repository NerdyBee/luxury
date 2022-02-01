import React from "react";
import Slider from "../components/Slider";
const Contact = () => {
  return (
    <>
    <Slider />
    <div class="b-example-divider"></div>
      <div class="container marketing my-5 py-5">
        <h1 class="text-center text-primary pb-2">Contact</h1>
        {/* <!-- Three columns of text below the carousel --> */}
        <div class="row">
          <div class="col-lg-4 border-start border-success border-3">
            <hr />
            <h2 class="text-info">Address:</h2>
            <ul>
                <li> Shop 5 oppossite AP terminus, Jos, Plateau State.</li>
                <li> Shop 25 Wuse 2, Wuse Abuja.</li>
            </ul>
            <hr />
          </div>
          <div class="col-lg-4 border-start border-success border-3">
            <hr />
            <h2 class="text-info">Phone:</h2>
            <ul>
                <li>08034150437</li>
                <li>07060984243</li>
            </ul>
            <hr />
          </div>
          <div class="col-lg-4 border-start border-success border-3 bg-light">
            <hr />
            <h2 class="text-info">Email:</h2>
            <ul>
                <li>luxury@gmail.com</li>
                <li></li>
            </ul>
            <hr />
          </div>
        </div>
    </div>

    <div class="b-example-divider"></div>  
    {/* <!-- open Form--> */}
      <div class="container my-5 py-5">
        <div class="bd-example"><h1 class="text-center text-primary pb-2">Send Us a Message</h1>
        <form class="row g-3">
          <div class="col-md-4">
            <label for="validationServer01" class="form-label">Fullname</label>
            <input type="text" class="form-control" id="validationServer01" placeholder="Name" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationServer02" class="form-label">Email</label>
            <input type="text" class="form-control" id="validationServer02" placeholder="email address" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationServerUsername" class="form-label">Phone</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationServerUsername" placeholder="Phone Number" required />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <label for="validationServerUsername" class="form-label">Message</label>
            <div class="input-group has-validation">
                <textarea class="form-control" id="validationServerMessage" placeholder="Message" required ></textarea>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
        </div>
      </div>
      {/* <!-- close form--> */}
    </>
  );
};
export default Contact;
