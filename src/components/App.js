import React from "react";
import propTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    static propTypes = {
        match: propTypes.object
    };

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;

        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // Take a copy of existing this.state.
        const fishes = { ...this.state.fishes };

        //Add our new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;

        //set the new fishes object to state
        this.setState({ fishes });

        console.log("Adding fish");
    };

    updateFish = (key, updatedFish) => {
        //copy of current this.state
        const fishes = { ...this.state.fishes };

        //update state
        fishes[key] = updatedFish;

        //set state
        this.setState({ fishes });
    };

    deleteFish = key => {
        //copy of current this.state
        const fishes = { ...this.state.fishes };

        //update state
        fishes[key] = null;

        //set state
        this.setState({ fishes });
    };

    sampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        //backup
        const order = { ...this.state.order };
        //update and chanege the value of fish
        order[key] = order[key] + 1 || 1;
        //set this.state
        this.setState({ order });
    };

    removeOrder = key => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Sea Food Market" />
                    <ul className="single-fish">
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
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    removeOrder={this.removeOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    sampleFishes={this.sampleFishes}
                    fishes={this.state.fishes}
                    storeId={this.props.match.params.storeId}
                />
            </div>
        );
    }
}

export default App;
