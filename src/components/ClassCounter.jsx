
import { Component } from "react";
import { connect } from "react-redux";

class ClassCounter extends Component {
    incrementHandler() {
        this.props.increment();
        console.log(this.props.showCounter)
    }

    decrementHandler() {
        this.props.decrement();
    }

    toggleHandler() {
        this.props.toggle();
    }
    render() {
        return (
            <>
                {this.props.showCounter &&  <>
                    <p>{this.props.count}</p>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </>}
                <button onClick={this.toggleHandler.bind(this)}>Toggle Counter</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        showCounter: state.showCounter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "increment", amount: 5 }),
        decrement: () => dispatch({ type: "decrement" }),
        toggle: () => dispatch({ type: "toggle" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter) 