import React from "react";
import './MyForm.css';

class MyForm extends React.Component {
  render() {
    return (
      <div className="my-form-container">
        <form action="https://formspree.io/xbjgwrwl" method="POST">
          <label>
            <div>Your email:</div>
            <input type="text" name="_replyto" />
          </label>
          <label>
            <div>Send a  message:</div>
            <textarea className="text-area" name="message"></textarea>
          </label>
          <br/>
          <button className="submit-button" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
