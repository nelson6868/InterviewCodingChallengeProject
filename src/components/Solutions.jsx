import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiCheckSquare } from "react-icons/bi";
import yugo from "../assets/chef.jpg";

export default function Solutions() {
  return (
    <div className="container">
      <div className="features">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="col-8">
              <img
                src={yugo}
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="text-decoration-underline text-warning">
              Solutions
            </h5>
            <h2>Create Paymment Requests</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sint aspernatur aliquid mollitia quia quo culpa.
            </p>
            <div className="my-3 d-flex">
              <ul class="list-group">
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Cras justo odio
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Dapibus ac facilisis in
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Morbi leo risus
                </li>
              </ul>
              <ul class="list-group">
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Cras justo odio
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Dapibus ac facilisis in
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Morbi leo risus
                </li>
              </ul>
            </div>
            <a href="/">
              Create a free account <BsArrowRightCircle className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
