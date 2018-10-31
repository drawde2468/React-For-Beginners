import React from "react";
import Header from "./Header";
import Inventory from "./Inventory.js";
import Order from "./Order.js";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1.Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2.Add our new fish to fishes const
    fishes[`fish${Date.now()}`] = fish;
    // 3.Set the new fishes object state
    this.setState({
      fishes: fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
