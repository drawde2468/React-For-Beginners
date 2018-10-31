import React from "react";
import Header from "./Header";
import Inventory from "./Inventory.js";
import Order from "./Order.js";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1.Take a copy of state
    const order = { ...this.state.order };
    //2.Either add to order or update the quantity
    order[key] = order[key] + 1 || 1;
    //3.Call setState to update our state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
