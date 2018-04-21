import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/components/App';

const init = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

console.log('readyState', document.readyState);
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
