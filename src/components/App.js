import React from "react";
import Header from "./Header";
import Inventory from "./Inventory.js";
import Order from "./Order.js";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;