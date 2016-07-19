import React from 'react';
import styles from './app.css';
// import {app, btnPrimary, btnSecondary}styles from './app.css'; // alt import

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

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className={styles.app}>
        <h1>CSS Modules</h1>
        <p>{ this.state.count }</p>
        <button onClick={() => this.increment()} className={styles.btnPrimary}>Increment</button>
        <button onClick={() => this.decrement()} className={styles.btnSecondary}>Decrement</button>
      </div>
    )
  }
}
