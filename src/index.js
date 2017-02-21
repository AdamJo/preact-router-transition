import { h, render } from 'preact';
let root;

function init() {
	let App = require('./views/index').default;
	root = render(<App />, document.body, root);
}

init();

if (module.hot) { 
	require('preact/devtools');
	module.hot.accept('./views/index', init); 
}