import React from "react";
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
  myinput = React.createRef();

  goToStore = event => {
    //1. Stop the form from submitting
    event.preventDefault();
    //2. Get the text from that input
    const storeName = this.myinput.value.value;
    //3. Change the page to /store/whatever they entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myinput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
