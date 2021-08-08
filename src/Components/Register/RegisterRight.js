import React, { Component } from "react";
import axios from "axios";
import "./Register.css"
class RegisterRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register/registerLogin", this.state)

      .then((response) => {
        console.log("The registration details inserted");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { email, password,confirm_password } = this.state;
    return (
      <div>
        <form className="register_form" onSubmit={this.submitHandler}>
        <h2>Register</h2>
          <div>
            <label className="register_labels">Email</label>
            {/* <br /> */}
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label>Password</label>
            {/* <br /> */}
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label>Confrim Password</label>
            {/* <br /> */}
            <input
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={this.onChangeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterRight;