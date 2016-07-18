import React from 'react';
import styles from './app.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <p>{ this.state.count }</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}
