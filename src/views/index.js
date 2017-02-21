import Router from 'preact-router';
import { h, Component } from 'preact';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Resources from './components/resources';

import Content from './containers/content';

import CSSTransitionGroup from 'preact-css-transition-group';
import './global-style';
import './style.css';

export default class App extends Component {
	render() {
		return (
		<Content>
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Resources path="/resources" />
				<Contact path="/contact" />
			</Router>
		</Content>
		);
	}
}