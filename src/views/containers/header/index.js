import { h } from 'preact';
import { Link } from 'preact-router';
import styles from './style'

export default () => (
	<header className={styles.header}>
		<h3>Template</h3>
		<nav>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/resources">Resources</Link>
			<Link href="/contact">Contact</Link>
		</nav>
	</header>
);