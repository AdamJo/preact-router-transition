import { h, Component } from 'preact';
import styles from './style';
import CSSTransitionGroup from 'preact-css-transition-group';

/*export default () => (
							<p className={styles.home}>
								home
							</p>
);*/

export default class Home extends Component {
	componentWillUnmount() {
		if (this.props.end) this.props.end();
	}

	render() {
		return <p>Home</p>;
	}
}

Home.defaultProps = {
	end: () => {}
}