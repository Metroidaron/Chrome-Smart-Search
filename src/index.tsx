import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ChromeSmartSearch from './ChromeSmartSearch.module';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render( <ChromeSmartSearch />, document.getElementById('root') as Element);

registerServiceWorker();
