import React from 'react';
import { render } from 'react-dom';

function init() {
  let App = require('./App').default;
  render(<App />, document.getElementById('root'));
}

init();

if (module.hot) {
  module.hot.accept('./App', init);
}


