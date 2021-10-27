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
            <h2>Better payments

<br/>Unlimited opportunities</h2>
            <p >
            Get faster, more reliable transactions.
Higher Conversions. Unbeatable insights and flexibility.so you can delight your
Customers and unlock new revenue streams.

            </p>
            <div className="my-3 d-flex">
              <ul class="list-group">
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Debit and credit cards
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  USSD
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Bank Account 
                </li>
              </ul>
              <ul class="list-group">
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                POS
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Dapibus ac facilisis in
                </li>
                <li class="list-group-item borderless">
                  <BiCheckSquare className="me-2 text-success" />
                  Bank Transfer
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
