import React from 'react';

class Counter extends React.Component {
  state = {counter: 0};

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  /**
   * https://reactjs.org/docs/react-component.html#unsafe_componentwillmount
   */
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(this.increaseCounter, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    console.log('render');
    return (
      <>
        <p>Click to increase number</p>
        <button onClick={this.increaseCounter}>{this.state.counter}</button>
      </>
    );
  }

}

export default Counter;